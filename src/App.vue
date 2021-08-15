<template>
  <Vanta />
  <header class="navbar">
    <nav class="d-flex flex-nowrap">
      <font-awesome-icon :icon="['fas','tools']" size="2x" />
      <a class="navbar-brand navbar-light" href="#">Labspace</a>
    </nav>
    <National :country="country" :lang="lang" @click="translate()" />
  </header>
  <Content :content="content" />
  <span class="container position-relative text-center w-50 text-white">
    <h2>{{ content.newsletter }}</h2>
    <Form :content="content" />
  </span>
  <aside>
    <MediaBar />
  </aside>
</template>

<script lang='js'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineComponent } from 'vue'
import Content from './components/Content.vue'
import Form from './components/Form.vue'
import MediaBar from './components/MediaBar.vue'
import National from './components/National.vue'
import Vanta from './components/Vanta.vue'
import i18n from './i18n'
export default defineComponent({
  name: 'App',
  components: {
    Content,
    Form,
    FontAwesomeIcon,
    MediaBar,
    National,
    Vanta
  },
  data () {
    return {
      lang: 'EN', 
      country: 'uk'
    }
  },
  computed: {
    content () {
      return i18n.translate(this.lang)
    }
  },
  watch: {
    lang (val) {
      for (const meta of document.getElementsByTagName('meta')) {
        if (meta.httpEquiv === 'Content-Language') {
          meta.content = val.toLowerCase()
        }
      }
      document.documentElement.lang = val.toLowerCase()
    }
  },
  mounted () {
    const lang = localStorage.getItem('lang')
    const country = localStorage.getItem('country')
    const title = localStorage.getItem('title')
    if (typeof lang === 'string') {
      this.lang = lang
    }
    if (typeof country === 'string') {
      this.country = country
    }
    if (typeof title === 'string') {
      document.title = title
    }
  },
  updated () {
    localStorage.setItem('lang', this.lang)
    localStorage.setItem('country', this.country)
    localStorage.setItem('title', document.title)
  },
  methods: {
    translate () {
      if (this.lang === 'FR') {
        this.lang = 'EN'
        this.country = 'uk'
        document.title = 'Join the Labspace'
      } else if (this.lang === 'EN') {
        this.lang = 'FR'
        this.country = 'fr'
        document.title = 'Rejoins Labspace'
      } else {
        this.lang = 'EN'
        this.country = 'uk'
        document.title = 'Join the Labspace'
      }
    }
  }
})
</script>
