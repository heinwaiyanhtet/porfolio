import Fastify from 'fastify';
import mongodbClient from './config/database.js';

const fastify = Fastify({
  logger: true
})


// Declare a route
fastify.get('/', async function handler (request, reply) {

  return { hello: 'world' }

})

async function insertData(name,email,message){
     try 
      {
          
          await mongodbClient.connect();

          const database = mongodbClient.db("contact"); 
          const collection = database.collection("contact");
          await collection.insertOne({ name, email, message });
          console.log('Contact form data inserted into MongoDB:', { name, email, message });
          
      } 
      catch (e) {
          console.error('Error inserting contact form data into MongoDB:', error);
      } 
      finally {
          await mongodbClient.close();
      }

}

fastify.post('/contact',async function handler (request,reply) {

  try {
    
    const { name, email, message } = request.body;

    await insertData(name,email,message);       

    reply.code(200).send({ success: true });

  } catch (error) {
    console.log("error occur",error);
  }
    
})



try 
{

  await fastify.listen({ port: 3000 })

} catch (err) {
  
fastify.log.error(err)
process.exit(1)
}