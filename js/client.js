'use strict'

const socket = new WebSocket('ws://localhost:3000')

socket.onopen = () => {
    if (socket.readyState === WebSocket.CONNECTING) {
        console.log('CONNECTING TCP client to websocket server')
        if (socket.readyState === WebSocket.OPEN) {
            console.log('TCP connection to websocket server is OPEN')
        }
    }
}

socket.onerror = (event) => {
    try {
        if (typeof(event.type) == 'string') {
            event.initEvent(event.type, event.bubbles, event.cancelable)
        }
    } catch (e) {
        console.error(e)
    }
}

socket.onclose = (event) => {
    if (socket.readyState === WebSocket.CLOSING) {
        console.log('Server is CLOSING TCP connection')
        if (socket.readyState === WebSocket.CLOSED) {
            console.log('TCP connection to websocket server is CLOSED')
            if (alert.reason != undefined) {
                alert(event.reason)
            } else {
                alert('You have been disconnected. Please restart the page\n\n\
Vous avez été déconnecté. Veuillez SVP recharger la page')
            }
        }
    }
}

export {socket}