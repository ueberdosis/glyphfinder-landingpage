<template>
  <section
    :class="['app-section', `app-section--${color}`, { 'is-narrow': narrow }]"
    :style="style"
  >
    <div class="app-section__background" :style="backgroundStyle">
      <slot name="background" />
    </div>
    <div class="app-section__inner" :class="{ 'is-overlapping': clipPathSupported && overlap }">
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

    narrow: {
      default: false,
      type: Boolean,
    },

    clipTop: {
      default: true,
      type: Boolean,
    },

    clipBottom: {
      default: true,
      type: Boolean,
    },

    overlap: {
      default: false,
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
      if (!this.clipPathSupported) {
        return ''
      }

      const margin = this.clipTop ? this.clipOffset : 0
      const paddingTop = this.clipTop ? (this.clipOffset / 2) : 0
      const paddingBottom = this.clipBottom ? (this.clipOffset / 2) : 0

      return `
        margin-top: -${margin}px;
        padding-top: ${paddingTop}px;
        padding-bottom: ${paddingBottom}px;
        `
    },

    backgroundStyle() {
      if (!this.clipPathSupported) {
        return ''
      }

      const clipTop = this.clipTop ? this.clipOffset : 0
      const clipBottom = this.clipBottom ? this.clipOffset : 0
      const clipPath = `polygon(0 ${clipTop}px, 100% 0%, 100% calc(100% - ${clipBottom}px), 0% 100%)`

      return `
        -webkit-clip-path: ${clipPath};
        -moz-clip-path: ${clipPath};
        -ms-clip-path: ${clipPath};
        -o-clip-path: ${clipPath};
        clip-path: ${clipPath};
        `
    },
  },

  methods: {
    degreeToRadian(degree) {
      return degree * (Math.PI / 180)
    },

    setClip() {
      this.clipOffset = Math.tan(this.degreeToRadian(4)) * window.innerWidth
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
