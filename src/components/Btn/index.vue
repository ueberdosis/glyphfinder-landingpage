<template>
  <component :is="tag" v-bind="props" class="btn">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      default: null,
      type: String,
    },
  },

  computed: {
    tag() {
      if (this.href) {
        return 'a'
      }

      return 'button'
    },

    props() {
      if (this.href) {
        return {
          href: this.href,
        }
      }

      return {
        type: 'button',
      }
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
