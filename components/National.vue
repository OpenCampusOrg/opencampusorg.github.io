<template>
  <nav class="navbar-toggler">
    <a class="navbar-brand navbar-light" href="#">{{ lang }}</a>
    <i class="flag" :class="country" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
})
</script>
