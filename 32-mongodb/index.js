const { MongoClient } = require('mongodb');

// URL de conexión (ajusta según tu configuración)
const uri = "mongodb://localhost:27017";

// Nombre de la base de datos y colección
const dbName = "testdb";
const collectionName = "documents";

async function main() {
  const client = new MongoClient(uri);

  try {
    // Conecta al cliente de MongoDB
    await client.connect();
    console.log("Conectado a MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Limpia la colección para evitar duplicados
    await collection.deleteMany({});

    // Inserta los documentos de ejemplo
    await collection.insertMany([
      { _id: 1, tags: ["tag1", "tag3", "tag5"] },
      { _id: 2, tags: ["tag2", "tag4", "tag6"] },
      { _id: 3, tags: ["tag1", "tag2", "tag3"] },
      { _id: 4, tags: ["tag5", "tag6"] },
      { _id: 5, tags: ["tag1", "tag2"] },
      { _id: 6, tags: ["tag3", "tag7"] },
    ]);

    console.log("Documentos insertados correctamente");

    // Ejercicio 1.1: Usar $in
    const inResult = await collection.find({ tags: { $in: ["tag1", "tag2"] } }).toArray();
    console.log("\nResultado de $in:", inResult);

    // Ejercicio 1.2: Usar $all
    const allResult = await collection.find({ tags: { $all: ["tag1", "tag2"] } }).toArray();
    console.log("\nResultado de $all:", allResult);

  } catch (err) {
    console.error("Error:", err);
  } finally {
    // Cierra la conexión al cliente
    await client.close();
  }
}

// Ejecuta la función principal
main();