<template>
  <div class="demo-video">
    <div class="demo-video__ratio" :style="`padding-bottom: ${ratio * 100}%`">
      <video
        ref="video"
        class="demo-video__video"
        :src="url"
        playsinline
        muted
        loop
      />
    </div>
  </div>
</template>

<script>
import scrollMonitor from 'scrollmonitor'

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

  data() {
    return {
      view: null,
    }
  },

  computed: {
    url() {
      return require(`~/assets/videos/${this.name}`)
    },
  },

  methods: {
    play() {
      const { video } = this.$refs

      if (video && !this.isPlaying()) {
        video.play()
      }
    },

    pause() {
      const { video } = this.$refs

      if (video && this.isPlaying()) {
        video.pause()
      }
    },


    isPlaying() {
      const { video } = this.$refs

      return video
        && video.currentTime > 0
        && !video.paused
        && !video.ended
        && video.readyState > 2
    },
  },

  mounted() {
    this.view = scrollMonitor.create(this.$el, { top: 50, bottom: 50 })
    this.view.enterViewport(this.play)
    this.view.exitViewport(this.pause)
  },

  beforeDestroy() {
    if (this.view) {
      this.view.destroy()
    }
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
