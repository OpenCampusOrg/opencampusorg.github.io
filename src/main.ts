import { App as Vue, createApp } from 'vue'
import App from './App.vue'
import './assets/global.scss'
import './registerServiceWorker'

Promise.resolve<Vue>(createApp(App)).then(app => {
  app.mount('div')
})
