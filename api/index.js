import { createServer } from 'http'
import Router from '../lib/Router.js'

const router = new Router()

const PORT = 5000

const server = createServer((req, res) => {
  router.emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
  res.end(req.url)
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
