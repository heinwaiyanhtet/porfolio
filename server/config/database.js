
import { MongoClient } from 'mongodb';
// import 'dotenv/config'

async function main(){

    // dotenv.config();


    // const mongoDbUri = process.env.MONGODB_URL;
    // console.log(mongoDbUri);


    const uri =  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // print a message when the database is successfully connected
        console.log('Database Connected');

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
// export default main;
