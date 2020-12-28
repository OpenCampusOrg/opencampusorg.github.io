'use strict'
import fs from 'fs'
import path from 'path'
const spdy = require('spdy')

const options = {
  key: require(path.resolve('keys/spdy-key.pem')),
  cert: require(path.resolve('keys/spdy-fullchain.pem')),
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
