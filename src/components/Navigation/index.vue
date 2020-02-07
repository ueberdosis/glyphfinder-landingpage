<template>
  <div :class="`navigation navigation--${theme}`">
    <div class="navigation__inner">
      <g-link class="navigation__link navigation__logo" to="/">
        Glyphfinder
      </g-link>
      <ul class="navigation__menu">
        <li class="navigation__item">
          <g-link class="navigation__link" to="/">
            Features
          </g-link>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" :href="downloadLink" download>
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
