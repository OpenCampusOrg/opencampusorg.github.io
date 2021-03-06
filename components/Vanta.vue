<template>
  <div ref="vantaRef" class="h-100 w-100 position-fixed bg-body" />
</template>

<script lang="ts">
import vantaNet from 'vanta/src/vanta.net'
import Vue from 'vue'
export default Vue.extend({
  async mounted () {
    this.vantaEffect = await vantaNet({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      color: 0x00ADEE,
      backgroundColor: 0x0,
      points: 3,
      maxDistance: 60,
      spacing: 35,
      showDots: true
    })
  },
  beforeDestroy () {
    if (this.vantaEffect !== undefined) {
      this.vantaEffect.destroy()
    }
  }
})
</script>
