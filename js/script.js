var lang, form, content

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
            socket.emit('translation', lang)
        })
    }
})

content = new Vue({
    el: '#content',
    data: {
        motto: null, prop: null, QA: null
    }
})

form = new Vue({
    el: '#form',
    data: {
        name: '',
        birth: '2007-01-01',
        trade: '',
        email: '',
        phone: '',
        funding: false,
        message: ''
    }
})
