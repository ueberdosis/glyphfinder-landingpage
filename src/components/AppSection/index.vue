<template>
  <section :class="['app-section', `app-section--${color}`, `app-section--${width}`]" :style="style">
    <div class="app-section__background">
      <slot name="background" />
    </div>
    <div class="app-section__inner">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      default: 'black',
      type: String,
    },

    width: {
      default: 'normal',
      type: String,
    },

    clipTop: {
      default: true,
      type: Boolean,
    },

    clipBottom: {
      default: true,
      type: Boolean,
    },
  },

  data() {
    return {
      clip: 'none',
      clipOffset: 0,
    }
  },

  computed: {
    style() {
      const clipPath = `polygon(0 ${this.clipTop ? this.clipOffset : 0}px, 100% 0%, 100% calc(100% - ${this.clipBottom ? this.clipOffset : 0}px), 0% 100%)`

      return `
        -webkit-clip-path: ${clipPath};
        clip-path: ${clipPath};
        margin-top: -${this.clipTop ? this.clipOffset : 0}px;
        padding-top: ${this.clipOffset / 2}px;
        padding-bottom: ${this.clipOffset / 2}px;
        `
    },
  },

  methods: {
    degreeToRadian(degree) {
      return degree * (Math.PI / 180)
    },

    setClip() {
      const degree = 4
      const c = window.innerWidth
      const b = (c * Math.sin(this.degreeToRadian(90))) / Math.sin(this.degreeToRadian(90 - degree))
      const a = Math.sqrt((b ** 2) - 2 * b * c * Math.cos(this.degreeToRadian(degree)) + (c ** 2))

      this.clipOffset = a
    },

    handleResize() {
      this.setClip()
    },
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.setClip()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
