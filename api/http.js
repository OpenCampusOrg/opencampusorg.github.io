'use strict'
const fs = require('fs')
const path = require('path')
const spdy = require('spdy')

const options = {
  key: fs.readFileSync(path.join(__dirname, '/keys/spdy-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/keys/spdy-fullchain.pem')),
  spdy: {
    protocols: ['h2', 'spdy/3.1', 'spdy/3', 'spdy/2'],
    plain: false,
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
  return spdy.createServer(options, app)
}

module.exports = server
