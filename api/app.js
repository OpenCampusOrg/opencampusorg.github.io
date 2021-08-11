'use strict'
const consola = require('consola')
const config = require('../nuxt.config')
const { dependencies } = require('../package-lock.json')
const app = require('./nuxt')
const redirect = require('./redirect')
const server = require('./http')(app)

config.version = 'v' + dependencies.nuxt.version

const { host, port } = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || '5500'
}

redirect(port)

server.listen(port, host, () =>
  consola.log(`\r\n\
\t╭───────────────────────────────────────╮\r\n\
\t│                                       │\r\n\
\t│   Nuxt @ ${config.version !== undefined ? config.version : 'latest'}                      │\r\n\
\t│                                       │\r\n\
\t│   ▸ Environment: ${config.dev ? 'development' : 'production '}          │\r\n\
\t│   ▸ Rendering:   ${config.ssr ? 'server-side' : 'client-side'}          │\r\n\
\t│   ▸ Target:      ${config.ssr ? 'server' : 'client'}               │\r\n\
\t│                                       │\r\n\
\t│   Listening: ${server.options.spdy.ssl === true ? 'https' : 'http'}://${host}:${port}/    │\r\n\
\t│                                       │\r\n\
\t╰───────────────────────────────────────╯\r\n`))

module.exports = server
