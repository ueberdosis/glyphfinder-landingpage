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

      return `
        margin-top: -${this.clipTop ? this.clipOffset : 0}px;
        padding-top: ${this.clipTop ? (this.clipOffset / 2) : 0}px;
        padding-bottom: ${this.clipBottom ? (this.clipOffset / 2) : 0}px;
        `
    },

    backgroundStyle() {
      if (!this.clipPathSupported) {
        return ''
      }

      const clipPath = `polygon(0 ${this.clipTop ? this.clipOffset : 0}px, 100% 0%, 100% calc(100% - ${this.clipBottom ? this.clipOffset : 0}px), 0% 100%)`

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
