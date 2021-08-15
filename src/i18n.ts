import json from './assets/i18n/index.json'

export default {
  /**
   * pass option to retrieve the content in the chosen language
   * @param lang language needed for translation
   * @returns translated content
   */
  translate (lang: string): unknown {
    const { content } = json 
    let index: number
    const str = lang.toLowerCase().substr(0, 2)
    switch (str) {
      case 'fr':
        index = 2
        break
      case 'en':
        index = 1
        break
      default:
        index = 0
    }
    return require(`./assets/i18n/${content[index]}`)
  }
}
