<template>
  <div ref="vanta" class="h-100 w-100 position-fixed bg-body" />
</template>

<script lang='js'>
import vantaNet from 'vanta/src/vanta.net'
import { defineComponent } from 'vue'
export default defineComponent({
  async mounted () {
    window.vantaEffect = await vantaNet({
      el: this.$refs.vanta,
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
  beforeUnmount () {
    window.vantaEffect.destroy()
  }
})
</script>
