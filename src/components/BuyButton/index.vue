<template>
  <div class="buy-button">
    <div class="buy-button__content">
      <btn :href="gumroadLink" target="_blank">
        {{ label }}
      </btn>
    </div>
    <div class="buy-button__meta">
      30-Day Money-Back Guarantee
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn'

export default {
  components: {
    Btn,
  },

  props: {
    label: {
      default: 'Buy for $4.99',
      type: String,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
