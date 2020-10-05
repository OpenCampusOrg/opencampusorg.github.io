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
    <a href="#" class="meetup bg-light">
      <font-awesome-icon :icon="['fab','meetup']" size="2x" />
    </a>
  </nav>
</template>

<style scoped>
  ::selection {
    color: none;
    background: none;
  }

nav {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

/* Style the icon bar links */
nav a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  font-size: 20px;
}

.irc {
  color: var(--green);
  font-style: normal;
}

.irc:hover {
  text-decoration: none;
}

.meetup {
  color: var(--red);
}
</style>
