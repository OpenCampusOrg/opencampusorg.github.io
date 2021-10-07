import index_json from './assets/i18n/index.json'
import Language from './library/language'
import type { language } from './library/language'

export default {
  /**
   * pass option to retrieve the content in the chosen language
   * @param lang language needed for translation
   * @returns translated content
   */
  translate (lang: language): Record<string, unknown> {
    const { content } = index_json
    if (process.env.NODE_ENV !== 'production') {
      console.log('i18n switched language to', lang)
    }
    switch (lang) {
      case Language.French: return require(`./assets/i18n/${content[2]}`)
      case Language.English: return require(`./assets/i18n/${content[1]}`)
      default: return require(`./assets/i18n/${content[0]}`)
    }
  }
}
