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


fastify.get('/', async function handler (request, reply) {
    return { hello: 'world' }
})


async function insertData(title,email,message){
    try 
    {
        await mongodbClient.connect();
        const database = mongodbClient.db("contact"); 
        const collection = database.collection("contact");
        await collection.insertOne({ title, email, message });
        console.log('Contact form data inserted into MongoDB:', { title, email, message });
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

    const { title, email, message } = request.body;
    await insertData(title,email,message);       
    reply.code(200).send({ success: true });

  } catch (error) {
    console.log("error occur",error);
  } 
})



const PAGE_SIZE = 10; 


async function getPaginationParams(page,totalCount)
{

    const totalPages = Math.ceil(totalCount / PAGE_SIZE);

    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    const prevPage = hasPrevPage ? page - 1 : null;
    const nextPage = hasNextPage ? page + 1 : null;

    const pages = [];

    for (let i = 0; i <= totalPages; i++) {
        pages.push({
            page : i,
            active : i == page
        })
    }
    name
    return {
        prevPage,
        nextPage,
        pages
    };


}

async function getDataFromMongoDb(page,limit)
{
    await mongodbClient.connect();
    const database = mongodbClient.db("contact");
    const collection = database.collection("contact");
    const skip = (page - 1) * limit;    
    const contactData = await collection.find().skip(skip).limit(Number(limit)).toArray();
    return contactData; 
}

async function getTotalCountFromMongoDb(){

   await mongodbClient.connect();
   const database = mongodbClient.db("contact");
   const collection = database.collection("contact");
   const totalCount = await collection.countDocuments();
   return totalCount;

}


fastify.get('/dashboard', async (request, reply) => {

  try {

      const {page=1,limit= PAGE_SIZE} = request.query;

      const contactData = await getDataFromMongoDb(page,limit);
      const totalCount = await getTotalCountFromMongoDb();

      const paginationParams = await getPaginationParams(parseInt(page), totalCount);

    
      return reply.view(
            '/views/layouts/main',
            { 
              contactData ,
              ...paginationParams,
              totalCount ,

            }
      ); 
    
  } 
  catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return reply.code(500).send('Internal Server Error'); 
  }
  finally{
     await mongodbClient.close();
  }
});


try 
{

  await fastify.listen({ port: 3001 })

} catch (err) {

  fastify.log.error(err)
  process.exit(1)

}

