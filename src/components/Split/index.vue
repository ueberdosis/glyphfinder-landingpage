<template>
  <div class="split" :class="{ 'is-flipped': flipped }">
    <div class="split__media">
      <slot name="media" />
    </div>
    <div class="split__text">
      <slot name="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flipped: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
