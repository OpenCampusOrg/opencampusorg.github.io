'use strict'
import {lang, form, content} from './script.js'

const socket = new WebSocket('ws://localhost:3000')

socket.onopen = () => {
    console.log('Client has sucessfully connected to websocket server')
}

socket.onmessage = (event) => {
    console.log('Message received')
    if (typeOf(event.data) == string) {
        data = JSON.parse(event.data)
        if (data.handler == 'content') {
            console.log('Content successfully received')
            content.motto = data.motto
            content.prop = data.prop
            content.QA = data.QA
        } else {
            console.log('Message:', event.data)
        }
    }
}

socket.onerror = (err) => {
    console.error(err)
}

socket.onclose = () => {
    console.log('client is disconnected from websocket server')
    alert('You have been disconnected. Please restart the page\n\n\
Vous avez été déconnecté. Veuillez SVP recharger la page')
}

export {socket}