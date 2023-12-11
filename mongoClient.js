// mongoClient.js

import dotenv from "dotenv";
import {MongoClient, ServerApiVersion} from "mongodb";

dotenv.config();

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  serverApi : {
    version : ServerApiVersion.v1,
    strict : true,
    deprecationErrors : true,
  },
});

export const run = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ping : 1});
    console.log("Connected successfully to MongoDB");
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
};
