'use strict'
import {lang, form, content} from './script.js'

const socket = new WebSocket('ws://localhost:3000')

socket.onopen = () => {
    console.log('client has sucessfully connected to server websocket')
    if (!form) {
        form.data.handler = 'newsletter'
        setInterval(function() {
            if (socket.bufferedAmount == 0)
                socket.send(JSON.stringify(form.data))
        }, 50)
    }
    setInterval(function() {
        if (socket.bufferedAmount == 0)
            socket.send(JSON.stringify({handler: 'translation', lang: lang}))
    }, 50)
}

socket.onmessage = (message) => {
    console.log('message received')
    if (typeOf(message) == string) {
        data = JSON.parse(message)
        if (data.handler == 'content') {
            console.log('content successfully received')
            content.motto = data.motto
            content.prop = data.prop
            content.QA = data.QA
        } else {
            console.log('message:', message)
        }
    }
}

socket.onerror = (err) => {
    console.error(err)
}

socket.onclose = () => {
    console.log('client is disconnected from websocket server')
}
