'use strict'
const spdy = require('spdy')
const express = require('express')
const { Nuxt, build } = require('nuxt')
const { default: config } = require('../nuxt.config')
const websocket = require('./websocket')

const app = express()
const nuxt = new Nuxt(config)
config.dev = process.env.NODE_ENV !== 'production'

if (config.dev) {
  build(nuxt)
} else {
  nuxt.ready()
}

if (process.server) {
  app.use(nuxt.render)
}

const server = spdy.createServer(config.server.https, app)
const { host, port } = config.server
const wsServerOptions = {
  host,
  port,
  server
}
websocket(wsServerOptions)

export default server

if (require.main === module) {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  server.listen(host, port)
}
