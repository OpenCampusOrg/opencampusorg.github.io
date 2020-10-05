import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { faTwitter, faTelegram, faMeetup } from '@fortawesome/free-brands-svg-icons'
import { faTools, faHashtag } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faTelegram, faMeetup)
library.add(faTools, faHashtag)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
