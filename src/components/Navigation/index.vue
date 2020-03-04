<template>
  <div :class="`navigation navigation--${theme}`">
    <div class="navigation__inner">
      <g-link class="navigation__logo" to="/">
        <g-image class="navigation__logo-image" src="~/assets/images/logo.png" immediate />
        <span class="navigation__logo-text">
          Glyphfinder
        </span>
      </g-link>
      <ul class="navigation__menu">
        <li class="navigation__item">
          <g-link class="navigation__link" to="/#features">
            Features
          </g-link>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#download" download>
            Download
          </a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" :href="gumroadLink" target="_blank">
            Buy
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      default: 'dark',
      type: String,
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
