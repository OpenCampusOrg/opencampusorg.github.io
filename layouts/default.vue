<template>
  <div>
    <Vanta />
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
    <Nuxt />
    <footer />
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
  methods: {
    translate () {
      if (this.lang === 'FR') {
        this.lang = 'EN'
        this.country = 'uk'
      } else if (this.lang === 'EN') {
        this.lang = 'FR'
        this.country = 'fr'
      } else {
        this.lang = 'EN'
        this.country = 'uk'
      }
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.lang.toLowerCase()
      }
    }
  }
}
</script>

<style>
  ::selection {
    color: none;
    background: none;
  }

  .container {
    background: none;
  }
</style>
