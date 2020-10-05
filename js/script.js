new Vue({
    created() {
        const html = document.documentElement
        let lang = html.getAttribute('lang')
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
        module.exports = { lang }
    }
})

const content = new Vue({
    el: '#content',
    data: {
        motto, proposition, QA: [{ question, answer }]
    }
})

const form = new Vue({
    el: '#form',
    data: {
        name: '',
        birth: Date.now().toString(),
        trade: '', 
        email: '', 
        phone: '', 
        funding: false, 
        message: ''
    }
})

module.exports += { content, form }
