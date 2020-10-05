<template>
  <div>
    <Content :lang="lang" />
    <span class="container text-center w-50 text-white">
      <h2>Bulletin d'informations</h2>
      <Form />
    </span>
    <MediaBar />
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'EN'
    }
  }
}
</script>

<style>
.container {
  background: none;
}
</style>
