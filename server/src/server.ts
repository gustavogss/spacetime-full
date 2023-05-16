import fastify from 'fastify'
import {PrismaClient} from '@prisma/client'


const app = fastify()
const prisma = new PrismaClient()


app.get('/users', async () => {
    return await prisma.user.findMany()   
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor rodando na porta 3333')
  })
