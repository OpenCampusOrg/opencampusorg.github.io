import { App as Vue, createApp } from 'vue'
import App from './App.vue'
import './assets/global.scss'
import './registerServiceWorker'

new Promise<Vue>(resolve =>
  resolve(createApp(App))
).then(app => {
  app.mount('div')
})
