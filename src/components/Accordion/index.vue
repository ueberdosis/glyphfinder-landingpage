<template>
  <div class="c-accordion" :aria-expanded="isActive">
    <button class="c-accordion__header" type="button" @click="toggle">
      <component :is="headingTag" class="c-accordion__headline" v-html="title" />
      <div class="c-accordion__icon-wrapper">
        <icon class="c-accordion__icon" name="arrow-down" v-if="isActive" />
        <icon class="c-accordion__icon" name="arrow-down" v-else />
      </div>
    </button>
    <slide-up-down :active="isActive">
      <div class="c-accordion__content small" :aria-hidden="!isActive">
        <slot />
      </div>
    </slide-up-down>
  </div>
</template>

<script>
import SlideUpDown from '@/components/SlideUpDown'
import Icon from '@/components/Icon'

export default {
  components: {
    SlideUpDown,
    Icon,
  },

  props: {
    title: {
      default: null,
      type: String,
    },

    headingLevel: {
      default: 3,
      type: Number,
    },

    active: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      isActive: false,
    }
  },

  computed: {
    headingTag() {
      return `h${this.headingLevel}`
    },
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
    handleResize() {
      if (window.innerWidth < 800) {
        this.isActive = false
      }
    },
  },

  mounted() {
    this.isActive = !!this.active

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
