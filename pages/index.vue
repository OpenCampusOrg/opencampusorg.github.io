<template>
  <div>
    <header class="navbar">
      <nav class="d-flex flex-nowrap">
        <font-awesome-icon :icon="['fas','tools']" size="2x" />
        <a class="navbar-brand navbar-light" href="#">Hackerspace LeLab</a>
      </nav>
      <National :country="country" :lang="lang" @click.native="translate()" />
    </header>
    <Content :content="content" />
    <span class="container position-relative text-center w-50 text-white">
      <h2>{{ content.newsletter }}</h2>
      <Form :content="content" />
    </span>
    <aside>
      <MediaBar />
    </aside>
  </div>
</template>

<script>
import i18n from '~/assets/i18n'
export default {
  data () {
    return {
      lang: 'EN',
      country: 'uk'
    }
  },
  computed: {
    content () {
      return i18n.translate(this.lang.toLowerCase())
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
      this.title = title
    }
  },
  updated () {
    localStorage.setItem('lang', this.lang)
    localStorage.setItem('country', this.country)
    localStorage.setItem('title', this.title)
  },
  methods: {
    translate () {
      if (this.lang === 'FR') {
        this.lang = 'EN'
        this.country = 'uk'
        this.title = 'Join the Labspace'
      } else if (this.lang === 'EN') {
        this.lang = 'FR'
        this.country = 'fr'
        this.title = 'Rejoins Labspace'
      } else {
        this.lang = 'EN'
        this.country = 'uk'
        this.title = 'Join the Labspace'
      }
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { httpEquiv: 'Content-Language', content: this.lang.toLowerCase() }
      ],
      htmlAttrs: {
        lang: this.lang.toLowerCase()
      }
    }
  }
}
</script>

<style>
  .navbar ::selection {
    color: none;
    background: none;
  }

  .container {
    background: none;
  }
</style>
