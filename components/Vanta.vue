<template>
  <span ref="vantaRef" class="h-100 w-100 position-fixed bg-body" />
</template>

<script>
import vantaNet from 'vanta/src/vanta.net'
const THREE = require('three')

export default {
  mounted () {
    this.vantaEffect = vantaNet({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      color: 0x00ADEE,
      backgroundColor: 0x0,
      points: 3,
      maxDistance: 60,
      spacing: 35,
      showDots: true,
      THREE
    })
  },
  beforeDestroy () {
    if (this.vantaEffect !== undefined) {
      this.vantaEffect.destroy()
    }
  }
}
</script>
