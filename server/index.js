import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})


// Declare a route
fastify.get('/', async function handler (request, reply) {

  return { hello: 'world' }

})

fastify.post('/contact',async function handler (request,reply) {

    const { name, email, message } = request.body;

    console.log('Received contact form submission:', { name, email, message });

    reply.code(200).send({ success: true });
    
})

// Run the server!

try 
{
await fastify.listen({ port: 3001 })
} catch (err) {
fastify.log.error(err)
process.exit(1)
}