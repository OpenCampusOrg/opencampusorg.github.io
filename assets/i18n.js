'use strict'

const i18n = {
  /**
   * pass option to retrieve the content in the chosen language
   * @param {String} lang
   * @returns {i18n}
   */
  translate (lang) {
    const { content } = require('~/static/i18n/index.json')
    let index
    switch (lang) {
      case 'fr':
        index = 2
        break
      case 'en':
        index = 1
        break
      default:
        index = 0
    }
    return require('~/static/i18n/'.concat(content[index]))
  }
}
module.exports = i18n
