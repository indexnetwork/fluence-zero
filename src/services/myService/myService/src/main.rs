#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::WasmType;
use serde::{Deserialize, Serialize};
use surrealdb::engine::local::Db;
use surrealdb::engine::local::Mem;
use surrealdb::sql::{Number, Thing};
use surrealdb::Surreal;
use tokio;

module_manifest!();

pub fn main() {}
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

impl Database {
    // Initialize and return a new instance of Database struct
    async fn new() -> surrealdb::Result<Self> {
        let db = Surreal::new::<Mem>(()).await?;

        // Select a specific namespace / database
        db.use_ns("test").use_db("test").await?;
        Ok(Self { db })
    }

    // Method to create a new vector
    async fn create_vector(&self, values: Vec<f64>) -> surrealdb::Result<Vec<Record>> {
        let vector_data = VectorData {
            values: values.into_iter().map(Number::from).collect(),
        };
        let created: Vec<Record> = self.db.create("vector").content(vector_data).await?;
        Ok(created)
    }

    // Method to search for a vector
    async fn search_vector(&self, values: Vec<f64>) -> surrealdb::Result<Vec<Record>> {
        let value_str = values
            .into_iter()
            .map(|v| format!("{:.1}", v))
            .collect::<Vec<_>>()
            .join(", ");
        let query = format!("SELECT * FROM vector WHERE values = [ {} ]", value_str);

        let results: Vec<Record> = self.db.query(&query).await?.take(0)?;
        Ok(results)
    }
}

#[tokio::main]
async fn main() -> surrealdb::Result<()> {
    // Create and initialize the database
    let db = Database::new().await?;

    // Create a vector
    let created = db.create_vector(vec![1.0, 2.0, 3.0]).await?;
    dbg!("Created vector");
    dbg!(&created);

    // Search for the vector
    let found = db.search_vector(vec![1.0, 2.0, 3.0]).await?;
    dbg!("Found vector");
    dbg!(found);

    Ok(())
}
