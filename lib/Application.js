import { createServer } from 'http'
import { EventEmitter } from 'events'
import { parseJSON } from './parseJSON.js'
import helpers from './helpers.js'

const processedContentTypes = {
  'text/html': (text) => text,
  'text/plain': (text) => text,
  'application/json': (json) => parseJSON(json, {}),
  'application/x-www-form-urlencoded': (data) => {
    return Object.fromEntries(new URLSearchParams(data))
  },
}

export default class Application {
  constructor() {
    this.emitter = new EventEmitter()
    this.server = this._createServer()
  }

  listen(port, callback) {
    this.server.listen(port, callback)
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach((path) => {
      const endpoint = router.endpoints[path]
      Object.keys(endpoint).forEach((method) => {
        const handler = endpoint[method]
        this.emitter.on(this._getRouterMask(path, method), async (req, res) => {
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
          handler(req, Object.assign(res, helpers), payload)
        })
      })
    })
  }

  _createServer() {
    return createServer((req, res) => {
      const emitted = this.emitter.emit(
        this._getRouterMask(req.url, req.method),
        req,
        res,
      )
      if (!emitted) {
        res.end()
      }
    })
  }

  _getRouterMask(path, method) {
    return `[${path}]:[${method}]`
  }

  shutdown() {
    process.on('SIGINT', () => {
      this.server.close((error) => {
        if (error) {
          console.error(error)
          process.exitCode = 1
        }
      })
    })
  }
}
