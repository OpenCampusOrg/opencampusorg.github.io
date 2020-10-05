'use strict'
import Vue from '../node_modules/vue/dist/vue.esm.browser.js'
import {socket} from './client.js'

const translate = () => {
    if ($('#lang').text() == 'FR') {
        $('#lang').text('EN')
        $('.flag')
        .removeClass('fr')
        .addClass('uk')   
        $('html').attr('lang', 'fr')
    } else if ($('#lang').text() == 'EN') {
        $('#lang').text('FR')
        $('.flag')
        .removeClass('uk')
        .addClass('fr')
        $('html').attr('lang', 'en')
    } else {
        $('html').attr('lang', 'fr')
        if ($('.uk') == undefined) {
            if ($('.flag') != undefined) {
                $('.flag').addClass('uk')
            } else {
                $('.navbar-toggler').children().add(
                    new document.createElement('i').addClass('flag').addClass('uk')
                )
            }
        }
    }
    console.log('Attempt to retrieve translated content')
    socket.addEventListener('open', () => {
        while (socket.bufferedAmount != 0);
        let lang = $('html').attr('lang')
        socket.send(JSON.stringify({handler: 'translation', lang: lang}))
        console.log('Changed translation to', lang)
    })
}

const animate = () => {
    VANTA.NET({
        el: '#background', // element selector string or DOM object reference
        color: 0x00adee,
        backgroundColor: 0x0,
        points: 3,
        maxDistance: 60,
        spacing: 35,
        showDots: true
    })
}

let content = new Vue({
    el: '#content',
    data: {
        motto: undefined, prop: undefined, QA: undefined
    }
})

let form = new Vue({
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

new Vue({
    created() {
        socket.addEventListener('message', (event) => {
            if (event.type != 'string') {
                let data = undefined
                try {
                    data = JSON.parse(event.data)
                } catch (e) {
                    data = event.data
                } finally {
                    if (data.handler == 'content') {
                        console.log('Content successfully received')
                        content.motto = data.motto
                        content.prop = data.prop
                        content.QA = data.QA
                    } else {
                        console.log('Message:', event.data)
                        if (event.data == 'user data has been serialized')
                            for (element in form.data) {
                               element = undefined
                            }
                    }
                }
            } else {
                console.log('Binary type message incoming...')
            }
        })

        $('.navbar-toggler').click(translate)

        $('#submit').click(() => {
            form.data.handler = 'newsletter'
            socket.addEventListener('open', () => {
                while (socket.bufferedAmount != 0);
                socket.send(JSON.stringify(form.data))
            })
            console.log('Sent form data to websocket server')
        })

        translate()
        animate()
    }
})