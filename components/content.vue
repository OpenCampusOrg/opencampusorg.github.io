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

<script>
export default {
  props: {
    content: {
      type: Object,
      default () {}
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
