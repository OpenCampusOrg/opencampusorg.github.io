var lang, form, content

new Vue({
    created() {
        const html = document.documentElement
        lang = 'fr'
        $('#lang').click(() => {
            if (lang == 'en') {
                $(this).text = 'FR'
                lang = 'fr'
            } else if (lang = 'fr') {
                $(this).text = 'EN'
                lang = 'en'
            } else {
                $(this).text = 'FR'
                lang = 'fr'
            }
        })
        html.setAttribute('lang', lang)
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
