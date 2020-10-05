<template>
  <span id="background" class="h-100 w-100 position-fixed bg-body" />
</template>

<script>
import vantaNet from 'vanta/src/vanta.net'
const THREE = require('three')

export default {
  beforeMount () {
    this.vantaEffect = vantaNet({
      el: '#background',
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
    window.vantaEffect.destroy()
  }
}
</script>
