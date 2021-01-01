'use strict'
const fs = require('fs')
const path = require('path')
const spdy = require('spdy')

const options = {
  key: fs.readFileSync(path.join(__dirname, '/keys/spdy-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/keys/spdy-fullchain.pem')),
  spdy: {
    protocols: ['h2', 'spdy/3.1', 'spdy/3', 'http/1.1'],
    ssl: true,
    'x-forwarded-for': true,
    connection: {
      windowSize: 1 << 20,
      autoSpdy31: true
    }
  }
}

/**
 * server
 * @param {Function} app
 * @returns {spdy.Server}
 */
function server (app) {
  let server = spdy.createServer(options, app)
  server.options = options
  return server
}

module.exports = server
