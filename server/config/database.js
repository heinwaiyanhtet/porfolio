
import { MongoClient } from 'mongodb';

const uri =  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2";

const mongodbClient = new MongoClient(uri);

export default mongodbClient;


