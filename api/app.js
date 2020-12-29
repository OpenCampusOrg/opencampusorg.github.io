'use strict'
const consola = require('consola')
const config = require('../nuxt.config')
const app = require('./nuxt')
const server = require('./http')(app)
const websocket = require('./websocket')

const { host, port } = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || '3000'
}

const wsServerOptions = {
  server
}
websocket(wsServerOptions)

server.listen(port, host, () =>
  consola.log(`\r\n\
\t╭───────────────────────────────────────╮\r\n\
\t│                                       │\r\n\
\t│   Nuxt @ ${config.version !== undefined ? config.version : 'v2.14.12'}                     │\r\n\
\t│                                       │\r\n\
\t│   ▸ Environment: ${config.dev ? 'development' : 'production '}          │\r\n\
\t│   ▸ Rendering:   ${config.ssr ? 'server-side' : 'client-side'}          │\r\n\
\t│   ▸ Target:      ${config.ssr ? 'server' : 'client'}               │\r\n\
\t│                                       │\r\n\
\t│   Listening: https://${host}:${port}/    │\r\n\
\t│                                       │\r\n\
\t╰───────────────────────────────────────╯\r\n`))

module.exports = server
