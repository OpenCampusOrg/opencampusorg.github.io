<template>
  <section v-if="content" class="container position-relative text-white">
    <h1>{{ content.motto }}</h1>
    <h2>{{ content.prop }}</h2>
    <ul v-if="content.QA" class="container list-group list-group-item">
      <li v-for="{question,answer} in content.QA" :key="question" class="col-sm">
        <p>{{ question }}</p>
        <p>{{ answer }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import i18n from '@/assets/i18n'

export default {
  props: {
    lang: {
      type: String,
      default: 'EN'
    }
  },
  data () {
    return {
      content: i18n.translate('en')
    }
  },
  watch: {
    lang: {
      immediate: true,
      handler () {
        this.content = i18n.translate(this.lang?.toLowerCase())
      }
    }
  }
}
</script>

<style scoped>
h1,h2 {
  padding: 0.5em;
}

li {
  display: block;
}
</style>
