const socket = io('http://localhost:3000')

socket.on('connect', () => {
    console.log('client has sucessfully connected to server websocket')
    if (form == null) socket.emit('newsletter', form.data)
    socket.emit('translation', lang)
})

socket.on('content', data => {
    console.log('content successfully received')
    if (data != null) {
        content.motto = data.motto
        content.prop = data.prop
        content.QA = data.QA
    }
})

socket.on('response', ack => { console.log(ack) })

socket.on('disconnect', () => {
    console.log('client is disconnected from server websocket')
    socket.close()
})
