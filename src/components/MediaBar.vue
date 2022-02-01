<template>
  <MDBBtnGroup vertical class="flex-column position-fixed align-self-center" aria-label="Vertical social media bar">
    <MDBBtn title="twitter" href="#" class="twitter text-light" color="primary">
      <MDBIcon size="2x" icon="twitter" iconStyle="fab"/>
    </MDBBtn>
    <MDBBtn title="telegram" href="#" class="telegram text-light" color="info">
      <MDBIcon size="2x" icon="telegram" iconStyle="fab"/>
    </MDBBtn>
    <MDBBtn title="irc" href="#" size="2x" class="irc" color="dark">
      <span>IRC</span>
      <MDBIcon icon="hashtag" iconStyle="fas"/>
    </MDBBtn>
    <MDBBtn title="twitch" href="#" class="twitch text-gray-100" color="secondary">
      <MDBIcon size="2x" icon="twitch" iconStyle="fab"/>
    </MDBBtn>
  </MDBBtnGroup>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { MDBBtn, MDBBtnGroup, MDBIcon } from 'mdb-vue-ui-kit'
export default defineComponent({
  name: 'MediaBar',
  components: { MDBBtn, MDBBtnGroup, MDBIcon }
})
</script>
