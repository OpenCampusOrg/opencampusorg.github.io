/* eslint-disable */
const npm_package = require('./package.json')

process.env = {
  VUE_APP_NAME: npm_package.name,
  VUE_APP_VERSION: npm_package.version,
  VUE_APP_DESCRIPTION: npm_package.description,
  VUE_APP_AUTHOR: npm_package.author,
  VUE_APP_URL: npm_package.url,
  VUE_APP_EMAIL: npm_package.email
}
