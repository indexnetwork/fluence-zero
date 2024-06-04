#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use serde::{Deserialize, Serialize};
use surrealdb::engine::local::Db;
use surrealdb::engine::local::Mem;
use surrealdb::sql::{Number, Thing};
use surrealdb::Surreal;
use tokio::runtime::Runtime;

module_manifest!();

pub fn main() {}

#[marine]
pub fn greeting(name: String) -> String {
    format!("Hi, {}", name)
}

#[derive(Debug, Serialize, Deserialize)]
struct VectorData {
    values: Vec<Number>,
}

#[derive(Debug, Deserialize)]
struct Record {
    #[allow(dead_code)]
    id: Thing,
}

struct Database {
    db: Surreal<Db>,
}

#[marine]
pub fn create_vector_wrapper(values: Vec<f64>) -> String {
    let rt = tokio::runtime::Builder::new_current_thread()
        .enable_all()
        .build()
        .unwrap();
    rt.block_on(create_vector(values)).unwrap()
}

async fn create_vector(values: Vec<f64>) -> surrealdb::Result<String> {
    let db = Surreal::new::<Mem>(()).await?;

    // Select a specific namespace / database
    db.use_ns("test").use_db("test").await?;

    let vector_data = VectorData {
        values: values.into_iter().map(Number::from).collect(),
    };
    let created: Vec<Record> = db.create("vector").content(vector_data).await?;
    // return as Vec<Record>
    Ok("created".to_string())
}

// impl Database {
//     // Initialize and return a new instance of Database struct
//     async fn new() -> surrealdb::Result<Self> {
//         let db = Surreal::new::<Mem>(()).await?;

//         // Select a specific namespace / database
//         db.use_ns("test").use_db("test").await?;
//         Ok(Self { db })
//     }

//     // Method to create a new vector
//     async fn create_vector(&self, values: Vec<f64>) -> surrealdb::Result<Vec<Record>> {
//         let vector_data = VectorData {
//             values: values.into_iter().map(Number::from).collect(),
//         };
//         let created: Vec<Record> = self.db.create("vector").content(vector_data).await?;
//         Ok(created)
//     }

//     // Method to search for a vector
//     async fn search_vector(&self, values: Vec<f64>) -> surrealdb::Result<Vec<Record>> {
//         let value_str = values
//             .into_iter()
//             .map(|v| format!("{:.1}", v))
//             .collect::<Vec<_>>()
//             .join(", ");
//         let query = format!("SELECT * FROM vector WHERE values = [ {} ]", value_str);

//         let results: Vec<Record> = self.db.query(&query).await?.take(0)?;
//         Ok(results)
//     }
// }
