<template>
  <nav class="navbar-toggler">
    <a id="lang" class="navbar-brand navbar-light" href="#">{{ lang }}</a>
    <i id="flag" class="flag" :class="country" />
  </nav>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'EN'
    },
    country: {
      type: String,
      default: 'uk'
    }
  }
}
</script>
