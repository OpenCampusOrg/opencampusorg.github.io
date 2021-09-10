<template>
  <div ref="vanta" class="h-100 w-100 position-fixed" />
</template>

<script lang='ts'>
import vantaNet from 'vanta/dist/vanta.net.min'
import type { Effect } from 'vanta/dist/vanta.net.min'
import { defineComponent } from 'vue'
declare global {
  interface Window {
    vantaEffect: Effect
  }
}
export default defineComponent({
  mounted () {
    window.vantaEffect = vantaNet({
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
