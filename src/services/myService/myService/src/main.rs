#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use once_cell::sync::Lazy;
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use surrealdb::engine::local::Db;
use surrealdb::engine::local::Mem;
use surrealdb::sql::{Number, Thing};
use surrealdb::Surreal;
use tokio::runtime::Runtime;
use tokio::sync::Mutex;
use tracing::{error, info};

static DB: Lazy<Arc<Mutex<Option<Surreal<Db>>>>> = Lazy::new(|| Arc::new(Mutex::new(None)));
static RUNTIME: Lazy<Arc<Runtime>> = Lazy::new(|| {
    Arc::new(
        tokio::runtime::Builder::new_current_thread()
            .enable_time()
            .build()
            .expect("Failed to create Tokio runtime"),
    )
});

async fn init_db() -> surrealdb::Result<Surreal<Db>> {
    let db = Surreal::new::<Mem>(()).await?;

    db.use_ns("test").use_db("test").await?;

    Ok(db)
}

async fn get_or_init_db() -> Arc<Mutex<Option<Surreal<Db>>>> {
    let arc_db = DB.clone();
    info!("Getting or initializing database");
    let mut db_guard = arc_db.lock().await;
    info!("Db guard locked");
    // if db_guard.is_none() log it

    if db_guard.is_none() {
        info!("Db Guard is none");
        match init_db().await {
            Ok(db) => {
                *db_guard = Some(db);
                info!("Database initialized successfully.");
            }
            Err(e) => {
                error!("Failed to initialize database: {}", e);
            }
        }
    }
    drop(db_guard);
    arc_db
}

module_manifest!();

pub fn main() {
    tracing_subscriber::fmt()
        .with_max_level(tracing_subscriber::filter::LevelFilter::TRACE)
        .try_init()
        .unwrap_or_else(|e| println!("Tracing init failed: {}", e));

    let arc_db = DB.clone();
    RUNTIME.block_on(async {
        match init_db().await {
            Ok(db) => {
                let mut db_guard = arc_db.lock().await;
                *db_guard = Some(db);
                info!("Database initialized successfully.");
            }
            Err(e) => {
                tracing::error!("Failed to initialize database: {}", e);
            }
        }
    });
}

#[marine]
pub fn greeting(name: String) -> String {
    format!("Hi, {}", name)
}

#[derive(Debug, Serialize, Deserialize)]
struct VectorData {
    values: Vec<Number>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Record {
    #[allow(dead_code)]
    pub id: Thing,
}

#[marine]
pub fn call_create_vector(values: Vec<f64>) -> String {
    match RUNTIME.block_on(create_vector(values)) {
        Ok(result) => result,
        Err(e) => {
            error!("Failed to create vector: {}", e);
            format!("Failed to create vector: {}", e)
        }
    }
}

#[marine]
pub fn call_search_vector(values: Vec<f64>) -> String {
    RUNTIME.block_on(search_vector(values)).unwrap()
}

async fn create_vector(values: Vec<f64>) -> Result<String, surrealdb::Error> {
    let arc_db = get_or_init_db().await;
    let db_guard = arc_db.lock().await;
    match db_guard.as_ref() {
        Some(db) => {
            info!("in db guard");
            let vector_data = VectorData {
                values: values.into_iter().map(Number::from).collect(),
            };
            info!("vector data created");
            let created: Vec<Record> = db.create("vector").content(vector_data).await?;
            info!("created vector");
            Ok(created.get(0).unwrap().id.to_string())
        }
        None => Err(surrealdb::Error::Api(surrealdb::error::Api::InternalError(
            "Database not initialized".to_string(),
        ))),
    }
}

async fn search_vector(values: Vec<f64>) -> Result<String, surrealdb::Error> {
    let arc_db = DB.clone();
    let db_guard = arc_db.lock().await;
    let db = db_guard.as_ref().unwrap();

    let value_str = values
        .into_iter()
        .map(|v| format!("{:.1}", v))
        .collect::<Vec<_>>()
        .join(", ");
    let query = format!("SELECT * FROM vector WHERE values = [ {} ]", value_str);

    let results: Vec<Record> = db.query(&query).await?.take(0)?;
    Ok(results
        .into_iter()
        .map(|record| record.id.to_string())
        .collect())
}
