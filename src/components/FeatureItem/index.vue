<template>
  <div class="feature-item">
    <img
      class="feature-item__image"
      :src="src"
      alt=""
      v-if="image"
    >
    <demo-video
      class="feature-item__image"
      :ratio="500/680"
      :name="video"
      v-if="video"
    />
    <h3 class="feature-item__title">
      {{ title }}
    </h3>
    <p class="small">
      <slot />
    </p>
  </div>
</template>

<script>
import DemoVideo from '@/components/DemoVideo'

export default {
  components: {
    DemoVideo,
  },

  props: {
    title: {
      required: true,
      type: String,
    },

    image: {
      default: null,
      type: String,
    },

    video: {
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
