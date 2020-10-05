'use strict'
const socket = new WebSocket('ws://localhost:3000')

socket.onopen = (event) => {
    console.log('client has sucessfully connected to server websocket')
    if (!form) {
        form.handler = 'newsletter'
        socket.send(JSON.stringify(form.data))
    }
    lang.handler = 'translation'
    socket.send(JSON.stringify(lang))
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

socket.onclose = (event) => {
    console.log('client is disconnected from websocket server')
}
