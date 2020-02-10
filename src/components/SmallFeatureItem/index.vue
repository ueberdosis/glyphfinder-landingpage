<template>
  <div class="small-feature-item">
    <div class="small-feature-item__header">
      <icon class="small-feature-item__icon" :name="icon" v-if="icon" />
      <h3 class="small-feature-item__title">
        {{ title }}
      </h3>
    </div>
    <p class="small">
      <slot />
    </p>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },

  props: {
    title: {
      required: true,
      type: String,
    },

    icon: {
      default: null,
      type: String,
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
