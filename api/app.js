'use strict'
const { nuxt } = require('./nuxt')
const server = require('./http')(nuxt)
const { websocket } = require('./websocket')

const { host, port } = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || '3000'
}

const wsServerOptions = {
  host,
  port,
  server
}
websocket(wsServerOptions)

if (require.main === module) {
  server.listen(host, port)
} else if (require.main === undefined) {
  server.close()
}

module.exports = server
