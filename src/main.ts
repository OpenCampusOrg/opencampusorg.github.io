import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.scss'
import './registerServiceWorker'

Promise.resolve(App)
.then(createApp)
.then(app => {
  app.mount('div')
})
