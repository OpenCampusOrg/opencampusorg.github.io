import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import { App as Vue, createApp } from 'vue'
import App from './App.vue'
import './assets/global.scss'
import './registerServiceWorker'

library.add(fas, fab)

new Promise<Vue>(resolve =>
  resolve(createApp(App))
).then(app => {
  app.component('font-awesome-icon', FontAwesomeIcon)
  app.mount('#app')
})
