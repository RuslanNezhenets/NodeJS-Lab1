import * as http from 'node:http'
import router from '../src/router.js'
import defaultHandler from '../src/defaultHandler.js'
import helpers from '../src/helpers.js'
import { safeJSON } from '../src/utils.js'
const PORT = parseInt(process.env.PORT) || 5000

const processedContentTypes = {
  'text/html': (text) => text,
  'text/plain': (text) => text,
  'application/json': (json) => safeJSON(json, {}),
  'application/x-www-form-urlencoded': (data) => {
    return Object.fromEntries(new URLSearchParams(data))
  },
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `https://${req.headers.host}`)
  const routeModule = router.get(url.pathname) ?? {}
  const handler = routeModule[req?.method] ?? defaultHandler
  let payload = {}
  let rawRequest = ''
  for await (const chunk of req) {
    rawRequest += chunk
  }
  if (req.headers['content-type']) {
    const contentType = req.headers['content-type'].split(';')[0]
    if (processedContentTypes[contentType]) {
      payload = processedContentTypes[contentType](rawRequest)
    }
  }
  try {
    handler(req, Object.assign(res, helpers), url, payload, rawRequest)
  } catch (e) {
    res.statusCode = 500
    res.end(process.env.NODE_ENV === 'production' ? 'internal error' : e)
  }
})

server.on('clientError', (err, socket) => {
  if (err) {
    console.log(err.stack)
  }
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

process.on('SIGINT', () => {
  server.close((error) => {
    if (error) {
      console.error(error)
      // eslint-disable-next-line n/no-process-exit
      process.exit(1)
    }
  })
})
