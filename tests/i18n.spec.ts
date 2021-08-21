import fs from 'fs'
import path from 'path'
import i18n from '@/i18n'
import Language from '@/library/language'
import { evaluate } from './util/file'

const dir = path.resolve(__dirname, '..', 'src', 'assets', 'i18n')

const french = new Promise<string>((resolve, reject) => {
  const file = path.resolve(dir, 'french.json')
  evaluate(file, resolve, reject)
})
.then(fs.readFileSync)
.then(JSON.stringify)
.catch(reason => reason)

const english = new Promise<string>((resolve, reject) => {
  const file = path.resolve(dir, 'english.json')
  evaluate(file, resolve, reject)
})
.then(fs.readFileSync)
.then(JSON.stringify)
.catch(reason => reason)

const other = new Promise<string>((resolve, reject) => {
  const file = path.resolve(dir, 'other.json')
  evaluate(file, resolve, reject)
})
.then(fs.readFileSync)
.then(JSON.stringify)
.catch(reason => reason)

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
