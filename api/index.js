'use strict'
const spdy = require('spdy')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')

config.dev = process.env.NODE_ENV !== 'production'

const app = express()
const nuxt = new Nuxt(config)
const host = '0.0.0.0' || process.env.HOST
const port = process.env.PORT
const websocket = require('./websocket')

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

if (process.server) {
  app.use(nuxt.renderer)
}

const server = spdy.createServer({
  // Private key
  key: undefined, // fs.readFileSync(__dirname + '/keys/spdy-key.pem'),

  // Fullchain file or cert file (prefer the former)
  cert: undefined, // fs.readFileSync(__dirname + '/keys/spdy-fullchain.pem'),

  // **optional** SPDY-specific options
  spdy: {
    protocols: ['h2', 'spdy/3.1', 'spdy/3', 'spdy/2', 'http/1.1', 'http/1.0'],
    plain: true,
    ssl: false,
    'x-forwarded-for': true,
    connection: {
      windowSize: 1024 * 1024, // Server's window size
      autoSpdy31: false
    }
  }
}, app)

websocket()

server.listen(port, host)
