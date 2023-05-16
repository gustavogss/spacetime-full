import fastify from 'fastify'


const app = fastify()


app.get('/alo', () => {
  return 'Alô!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor rodando na porta 3333')
  })
