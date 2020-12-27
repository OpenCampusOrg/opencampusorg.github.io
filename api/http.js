'use strict'
import fs from 'fs'
import { Server } from 'http'
import path from 'path'
const spdy = require('spdy')

const options = {
  key: fs.readFileSync(path.join(__dirname, '/keys/spdy-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/keys/spdy-fullchain.pem')),
  spdy: {
    protocols: ['h2', 'spdy/3.1', 'spdy/3', 'spdy/2'],
    plain: true,
    'x-forwarded-for': true,
    connection: {
      windowSize: 1 << 20,
      autoSpdy31: true
    }
  }
}

/**
 * server
 * @param {Server} http
 * @returns {spdy.Server}
 */
function server (http = Server()) {
  return spdy.createServer(options, http)
}

module.exports = server
