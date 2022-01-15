import fastify from 'fastify'

const PORT = 4000

export default class Server {
  app = fastify({ logger: true })

  constructor() {
    this.setup()
  }

  setup() {
    this.app.get('/', async(request, reply) => {
      return {hello: 'world'}
    })
  }

  start() {
    return this.app.listen(PORT)
  }

  close() {
    return this.app.close()
  }
}
