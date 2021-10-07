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
import { defineComponent, Ref, ref } from 'vue'
import Content from './components/Content.vue'
import Form from './components/Form.vue'
import MediaBar from './components/MediaBar.vue'
import National from './components/National.vue'
import Vanta from './components/Vanta.vue'
import i18n from './i18n'
import Country from './library/country'
import Language from './library/language'
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
  setup () {
    let lang: Ref<string> = ref(Language.English)
    let country: Ref<string> = ref(Country.UnitedKingdom)
    return {
      lang,
      country
    }
  },
  computed: {
    content () {
      // this declaration is mandatory with Typescript
      const lang: string = this.lang
      return i18n.translate(Language.from(lang))
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
    this.translate()
    this.save()
  },
  methods: {
    setHTML(value: string): void {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Switch language to', this.lang, '.')
      }
      value = value.toLowerCase()
      for (const meta of document.getElementsByTagName('meta')) {
        if (meta.httpEquiv === 'Content-Language') {
          meta.content = value
        }
      }
      document.documentElement.lang = value
    },
    restore(): void {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Restore language from localeStorage cookie.')
      }
      const lang = localStorage.getItem('lang')
      const country = localStorage.getItem('country')
      const title = localStorage.getItem('title')
      if (typeof lang === 'string') {
        this.lang = Language.from(lang)
      }
      if (typeof country === 'string') {
        this.country = Country.from(country)
      }
      if (typeof title === 'string') {
        document.title = title
      }
    },
    save(): void {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Save language to localeStorage cookie.')
      }
      localStorage.setItem('lang', this.lang)
      localStorage.setItem('country', this.country)
      localStorage.setItem('title', document.title)
    },
    translate (): void {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Translate Title.')
      }
      switch (this.lang) {
        case Language.French: {
          document.title = 'Rejoins Labspace'
          break
        }
        case Language.English: {
          document.title = 'Join the Labspace'
          break
        }
        default: {
          document.title = process.env.VUE_APP_NAME || 'hackerspace-lelab.github.io'
          break
        }
      }
    },
    changeLang (lang: string): void {
      this.lang = Language.from(lang)
    },
    changeCountry (country: string): void {
      this.country = Country.from(country)
    }
  }
})
</script>
