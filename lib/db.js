import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tokvpfn.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority&appName=Cluster0`
  );

  return client;
};
