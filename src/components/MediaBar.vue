<template>
  <MDBBtnGroup vertical aria-label="Vertical social media bar">
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


<style lang='scss' scoped>
@import 'mdb/scss/standard/bootstrap/vendor/rfs';
@import 'mdb/scss/standard/bootstrap/functions';
@import 'mdb/scss/standard/bootstrap/variables';

::selection {
  color: none;
  background: none;
}

.btn-group-vertical {
  position: fixed !important;
  top: 40% !important;
  margin: 0;
}

.btn-group-vertical a:hover {
  transition: all 0.3s ease;
}

.irc {
  color: $green;
  line-height: 2em;
}

.irc:hover {
  color: $green-400;
}

.hashtag {
  padding: 0 0;
}

.twitch {
  background: $purple;
}

.twitch:hover {
  color: $gray-400;
  background: $purple-600;
}
</style>
