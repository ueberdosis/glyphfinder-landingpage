<template>
  <section
    :class="['app-section', `app-section--${color}`, `app-section--${width}`]"
    :style="clip"
  >
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
      default: false,
      type: Boolean,
    },

    clipBottom: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      clip: 'none',
    }
  },

  methods: {
    degreeToRadian(degree) {
      return degree * (Math.PI / 180)
    },

    getClipPercentage() {
      const degree = 6
      const c = window.innerWidth
      const b = (c * Math.sin(this.degreeToRadian(90))) / Math.sin(this.degreeToRadian(90 - degree))
      const a = Math.sqrt((b ** 2) - 2 * b * c * Math.cos(this.degreeToRadian(degree)) + (c ** 2))
      const height = this.$el.offsetHeight
      const percentage = (100 / height) * a

      return percentage
    },

    setClip() {
      const percentage = this.getClipPercentage()
      const bottonPercentage = 100 - percentage

      this.clip = `clip-path: polygon(0 ${this.clipTop ? percentage : 0}%, 100% 0%, 100% ${this.clipBottom ? bottonPercentage : 100}%, 0% 100%)`
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
