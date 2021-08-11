import { MongoClient } from "mongodb";

const client = new MongoClient("<URL>"); // Insert application code

const start = async () => {
  try {
    await client.connect();
    console.log("Connected");

    // Creating a collection
    await client.db().createCollection("<Collection>"); // Replace <Collection>

    const collection = client.db().collection("<Collection>");

    // Add data
    await collection.insertOne({});

  } catch (e) {
    console.log(e);
  }
};

start();
