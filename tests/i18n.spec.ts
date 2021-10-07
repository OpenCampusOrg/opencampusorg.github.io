import fs from 'fs'
import fetch from 'node-fetch'
import path from 'path'
import yaml from 'yaml'
import i18n from '@/i18n'
import Language from '@/library/language'

function port (): string {
  const { services } = yaml.parse(fs.readFileSync(path.resolve('..', '.devcontainer', 'docker-compose.yml')).toString())
  return Object.keys(services.strapi.port)[0]
}

const uri = `https://localhost:${port()}/i18n`

const getContent = (lang: string): Promise<string> => Promise.resolve<string>(uri).then(async uri => {
  const url = uri + `/${lang}.json`
  const response = await fetch(url)
  return await response.text()
})

const french = getContent('french')

const english = getContent('english')

const other = getContent('other')

describe('i18n.ts', () => {
  it('Test translate', () => {
    french.then(fr => {
      const expected = JSON.stringify(i18n.translate(Language.French))
      expect(expected).toBe<string>(fr)
    }).catch(reason => reason)
    english.then(en => {
      const expected = JSON.stringify(i18n.translate(Language.English))
      expect(expected).toBe<string>(en)
    }).catch(reason => reason)
    other.then(_ => {
      const expected = JSON.stringify(i18n.translate(Language.Other))
      expect(expected).toBe<string>(_)
    }).catch(reason => reason)
  })
})
