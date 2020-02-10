<template>
  <div class="feature-item">
    <img
      class="feature-item__image"
      :src="src"
      alt=""
      v-if="image"
    >
    <h3 class="feature-item__title">
      {{ title }}
    </h3>
    <p class="small">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },

    image: {
      default: null,
      type: String,
    },
  },

  computed: {
    src() {
      return require(`~/assets/images/${this.image}`)
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
