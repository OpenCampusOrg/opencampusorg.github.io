'use strict'
const fs = require('fs')
const path = require('path')

const i18n = {
  /**
   * pass option to retrieve the content in the chose language
   * @param {String} lang
   * @returns {i18n}
   */
  translate (lang) {
    const { content } = JSON.parse(fs.readFileSync(path.resolve('assets', 'i18n', 'index.json')))
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
    return JSON.parse(fs.readFileSync(path.resolve('assets', 'i18n', content[index])))
  }
}
export default i18n
