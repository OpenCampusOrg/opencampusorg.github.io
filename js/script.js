'use strict'
import Vue from '../node_modules/vue/dist/vue.esm.browser.js'
import {socket} from './client.js'

var lang = '', form = undefined, content = undefined

function translate() {
    console.log('Attempt to retrieve translated content')
    while (socket.readyState & WebSocket.CONNECTING) {
        if (socket.readyState & WebSocket.OPEN) {
            socket.send(JSON.stringify({handler: 'translation', lang: lang}))
            console.log('Changed translation to', lang)
        }
    }
}

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
        if ($('.uk') == undefined) {
            if ($('.flag') != undefined) {
                $('.flag').addClass('uk')
            } else {
                $('.navbar-toggler').children().add(
                    new document.createElement('i').addClass('flag').addClass('uk')
                )
            }
        }
        translate()

        $('.navbar-toggler').click(() => {
            if ($('#lang').text() == 'FR') {
                $('#lang').text('EN')
                $('.flag')
                .removeClass('fr')
                .addClass('uk')   
                lang = 'fr'
            } else if ($('#lang').text() == 'EN') {
                $('#lang').text('FR')
                $('.flag')
                .removeClass('uk')
                .addClass('fr')
                lang = 'en'
            } else {
                throw new ReferenceError('Language not possible')
            }
            $('html').attr('lang', lang)
            translate()
        })

        $('#submit').click(() => {
            form.data.handler = 'newsletter'
            if (socket.readyState & WebSocket.OPEN) {
                socket.send(JSON.stringify(form.data))
                console.log('Sent form data to websocket server')
            }
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