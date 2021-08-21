<template>
  <section id="section" v-if="content" class="container position-relative text-white" aria-label="Text section">
    <h1>{{ content.motto }}</h1>
    <h2>{{ content.prop }}</h2>
    <ul v-if="content.QA" class="container list-group" aria-label="Q+A">
      <li v-for="[ question, answer ] in content.QA" :key="question" class="list-group-item">
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
  setup () {
    const colors = ['list-group-item-primary', 'list-group-item-secondary', 'list-group-item-danger', 'list-group-item-warning', 'list-group-item-info', 'list-group-item-light', 'list-group-item-dark']
    return {
      colors
    }
  },
  mounted () {
    this.setQAColor()
  },
  updated () {
    this.setQAColor()
  },
  methods: {
    setQAColor (): void {
      let i = 0
      for (const li of document.getElementsByTagName('li')) {
        li.classList.add(this.colors[i++])
        i %= this.colors.length
      }
    }
  }
})
</script>

<style lang='scss' scoped>

h1, h2 {
  padding: 0.5em;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

.list-group-item, .list-group-item p {
  font-size: large;
  opacity: 80%;
}
</style>
