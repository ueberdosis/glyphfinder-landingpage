<template>
  <a
    class="product-banner"
    :style="`background-color:${color}`"
    :href="href"
    target="_blank"
  >
    <div class="product-banner__content">
      <div class="product-banner__headline" v-if="headline">
        {{ headline }}
      </div>
      <div class="product-banner__subline" v-if="subline">
        {{ subline }}
      </div>
    </div>
    <div class="product-banner__media">
      <g-image class="product-banner__image" src="~/assets/images/banner.png" />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      required: true,
      type: String,
    },

    color: {
      default: 'black',
      type: String,
    },

    headline: {
      default: null,
      type: String,
    },

    subline: {
      default: null,
      type: String,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
