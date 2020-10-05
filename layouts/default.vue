<template>
  <div>
    <Vanta />
    <header class="navbar">
      <nav class="d-flex flex-nowrap">
        <font-awesome-icon :icon="['fas','tools']" size="2x" />
        <a class="navbar-brand navbar-light" href="#">Hackerspace LeLab</a>
      </nav>
      <National :country="country" :lang="language" @click.native="translate()" />
    </header>
    <Nuxt :lang="language" />
    <footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: 'EN',
      country: 'uk'
    }
  },
  methods: {
    translate () {
      if (this.language === 'FR') {
        this.language = 'EN'
        this.country = 'uk'
      } else if (this.language === 'EN') {
        this.language = 'FR'
        this.country = 'fr'
      } else {
        this.language = 'EN'
        this.country = 'uk'
      }
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.language.toLowerCase()
      }
    }
  }
}

</script>
