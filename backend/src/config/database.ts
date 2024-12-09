import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not set");

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const mongoDbClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const db = mongoDbClient.db("BookInventory");

export async function connectMongoDb() {
  return new Promise(async (resolve) => {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await mongoDbClient.connect();

      // Send a ping to confirm a successful connection
      await mongoDbClient.db("admin").command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } finally {
      // Ensures that the client will close when you finish/error
      //   await mongoDbClient.close();
      resolve(null);
    }
  });
}
