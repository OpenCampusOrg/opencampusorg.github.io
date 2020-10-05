'use strict'
const spdy = require('spdy')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config').default
const websocket = require('./websocket')

config.dev = process.env.NODE_ENV !== 'production'

const app = express()
const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

if (process.server) {
  app.use(nuxt.renderer)
}

const server = spdy.createServer(nuxt.options.server.https, app)

websocket({ server })

module.exports = server

if (require.main === module) {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 8000
  server.listen(host, port)
}
