'use strict'
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config')

const app = express()
const nuxt = new Nuxt(config)
config.dev = process.env.NODE_ENV !== 'production'

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
} else {
  nuxt.ready()
}

app.use(nuxt.render)

module.exports = app
