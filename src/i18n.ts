import index_json from './assets/i18n/index.json'

export default {
  /**
   * pass option to retrieve the content in the chosen language
   * @param lang language needed for translation
   * @returns translated content
   */
  translate (lang: string): Record<string, unknown> {
    const { content } = index_json
    const str = lang.toLowerCase().substr(0, 2)
    switch (str) {
      case 'fr': return require(`./assets/i18n/${content[2]}`)
      case 'en': return require(`./assets/i18n/${content[1]}`)
      default: return require(`./assets/i18n/${content[0]}`)
    }
  }
}
