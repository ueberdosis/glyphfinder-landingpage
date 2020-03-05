<template>
  <div class="demo-video">
    <div class="demo-video__ratio" :style="`padding-bottom: ${ratio * 100}%`">
      <video
        class="demo-video__video"
        :src="url"
        playsinline
        autoplay
        muted
        loop
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      default: 0.8,
      type: Number,
    },

    name: {
      required: true,
      type: String,
    },
  },

  computed: {
    url() {
      return require(`~/assets/videos/${this.name}`)
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
