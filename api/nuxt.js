'use strict'
import config from '../nuxt.config'
const express = require('express')
const { Nuxt, build } = require('nuxt')

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

export { app }
