<template>
  <section :class="['app-section', `app-section--${color}`, `app-section--${width}`]">
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
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
