import Fastify from 'fastify';
import mongodbClient from './config/database.js';
import helmet from '@fastify/helmet';
import fastifyView from '@fastify/view';
import Handlebars from 'handlebars';

const fastify = Fastify({
  logger: true
})

fastify.register(helmet);


fastify.register(fastifyView, {
    engine: {
      handlebars: Handlebars,
    },
    layout: "/views/layouts/main.hbs",
    options: {
      partials: {
        head: '/views/partials/head.hbs',
        header: '/views/partials/header.hbs',
        footer: '/views/partials/footer.hbs'
      }
    } 
});


// fastify.register(pointOfView, {
//   engine: {
//     handlebars: require('handlebars')
//   },
//   includeViewExtension: true,
//   options: {
//     partials: {
//       head: '/views/partials/head.hbs',
//       header: '/views/partials/header.hbs',
//       footer: '/views/partials/footer.hbs'
//     }
//   } 
// });


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

fastify.get('/dashboard',(request,reply) => {

   reply.view('/views/layouts/main', {});

})



try 
{

  await fastify.listen({ port: 3000 })

} catch (err) {

  fastify.log.error(err)
  process.exit(1)

}