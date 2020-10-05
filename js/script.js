'use strict'
import Vue from '../node_modules/vue/dist/vue.esm.browser.js'

var lang = '', form = undefined, content = undefined

VANTA.NET({
    el: '#background', // element selector string or DOM object reference
    color: 0x00adee,
    backgroundColor: 0x0,
    points: 3,
    maxDistance: 60,
    spacing: 35,
    showDots: true
  })

new Vue({
    created() {
        lang = 'fr'
        $('html').attr('lang', lang)

        $('#lang').click(() => {
            if ($('#lang').text() == 'FR') {
                $('#lang').text('EN')
                lang = 'fr'
            } else if ($('#lang').text() == 'EN') {
                $('#lang').text('FR')
                lang = 'en'
            } else {
                throw new ReferenceError('Language not possible')
            }
            $('html').attr('lang', lang)
        })
    }
})

content = new Vue({
    el: '#content',
    data: {
        motto: undefined, prop: undefined, QA: undefined
    }
})

form = new Vue({
    el: '#form',
    data: {
        name: undefined,
        birth: undefined,
        trade: undefined,
        email: undefined,
        phone: undefined,
        funding: undefined,
        message: undefined
    }
})

export {lang, form, content}