<template>
  <Vanta />
  <header class="navbar" aria-label="Navigation header">
    <nav class="d-flex flex-nowrap" aria-label="Homepage">
      <MDBIcon icon="tools" size="2x" iconStyle="fas"/>
      <a class="navbar-brand navbar-light" href="#">Labspace</a>
    </nav>
    <National
    :country="country"
    @changeCountry="changeCountry($event)"
    @changeLang="changeLang($event)"
    />
  </header>
  <Content :content="content" />
  <Form :content="content" />
  <aside>
    <MediaBar />
  </aside>
  <footer class="position-relative text-center text-gray-400">
    <br>
    &copy; Labspace is a name owned by Steve Huguenin and cannot be used by another hacker group.
    <br>
  </footer>
</template>

<script lang='ts'>
import { MDBIcon } from 'mdb-vue-ui-kit'
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
    MDBIcon,
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
      // this declaration is mandatory with Typescript
      const lang: string = this.lang
      return i18n.translate(lang)
    }
  },
  watch: {
    lang (val: string): void {
      this.setHTML(val)
    }
  },
  mounted () {
    this.restore()
  },
  updated () {
    this.save()
  },
  methods: {
    setHTML(value: string): void {
      for (const meta of document.getElementsByTagName('meta')) {
        if (meta.httpEquiv === 'Content-Language') {
          meta.content = value.toLowerCase()
        }
      }
      document.documentElement.lang = value.toLowerCase()
    },
    restore(): void {
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
    save(): void {
      localStorage.setItem('lang', this.lang)
      localStorage.setItem('country', this.country)
      localStorage.setItem('title', document.title)
    },
    translate (): void {
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
    },
    changeLang (lang: string): void {
      this.lang = lang
    },
    changeCountry (country: string): void {
      this.country = country
    }
  }
})
</script>
