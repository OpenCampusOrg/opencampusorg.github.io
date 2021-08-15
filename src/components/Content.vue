<template>
  <section v-if="content" class="container position-relative text-white">
    <h1>{{ content.motto }}</h1>
    <h2>{{ content.prop }}</h2>
    <ul v-if="content.QA" class="container list-group">
      <li v-for="{question,answer} in content.QA" :key="question" class="col-sm list-group-item">
        <p>{{ question }}</p>
        <p>{{ answer }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Content',
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      colors: ['list-group-item-primary', 'list-group-item-secondary', 'list-group-item-danger', 'list-group-item-warning', 'list-group-item-info', 'list-group-item-light', 'list-group-item-dark']
    }
  },
  mounted () {
    this.setQAColor()
  },
  updated () {
    this.setQAColor()
  },
  methods: {
    setQAColor () {
      let i = 0
      for (const li of document.getElementsByTagName('li')) {
        li.classList.add(this.colors[i++])
        i %= this.colors.length
      }
    }
  }
})
</script>

<style lang="scss" scoped>
h1, h2 {
  padding: 0.5em;
}

.list-group-item, .list-group-item p {
  display: block;
  font-size: x-large;
  opacity: 80%;
}
</style>
