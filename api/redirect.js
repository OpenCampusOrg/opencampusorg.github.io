'use strict'
const express = require('express')

function redirect (port = 443) {
  const service = express()
  service.get('*', (req, res) => res.redirect(`https://${req.hostname}:${port}${req.url}`))
  service.listen(process.env.HTTP_PORT || '5000')
}

module.exports = redirect
