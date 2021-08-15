<template>
  <nav>
    <a href="#" class="twitter bg-primary text-light">
      <font-awesome-icon :icon="['fab','twitter']" size="2x" />
    </a>
    <a href="#" class="telegram bg-info text-light">
      <font-awesome-icon :icon="['fab','telegram']" size="2x" />
    </a>
    <a href="#" class="irc bg-dark">
      <font-awesome-icon :icon="['fas','hashtag']" size="xs" />
      <span>IRC</span>
    </a>
    <a href="#" class="twitch text-light">
      <font-awesome-icon :icon="['fab','twitch']" size="2x" />
    </a>
  </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default defineComponent({
  name: 'MediaBar',
  components: { FontAwesomeIcon }
})
</script>


<style lang="scss" scoped>
  ::selection {
    color: none;
    background: none;
  }

nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

/* Style the icon bar links */
nav a {
  display: block;
  text-align: center;
  padding: 1em;
  transition: all 0.3s ease;
  font-size: 20px;
}

.irc {
  color: var(--green);
  font-style: normal;
  line-height: 2em;
}

.irc:hover {
  text-decoration: none;
}

.twitch {
  background: var(--purple);
}
</style>
