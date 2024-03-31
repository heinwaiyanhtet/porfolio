
import { MongoClient } from 'mongodb';

const uri =  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2";

const mongodbClient = new MongoClient(uri);

export default mongodbClient;

// async function main(){

//     // dotenv.config();


//     // const mongoDbUri = process.env.MONGODB_URL;
//     // console.log(mongoDbUri);





//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//         // print a message when the database is successfully connected
//         console.log('Database Connected');

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// // main();
// // export default main;
