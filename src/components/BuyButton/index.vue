<template>
  <div class="buy-button">
    <div class="buy-button__content">
      <btn :href="gumroadLink" target="_blank" @click.native="handleClick">
        {{ label }}
      </btn>
      <icon class="buy-button__icon" name="mac" title="macOS" />
      <!-- <icon class="buy-button__icon" name="windows" title="Windows" /> -->
    </div>
    <div class="buy-button__meta">
      30-Day Money-Back Guarantee
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn'
import Icon from '@/components/Icon'

export default {
  components: {
    Btn,
    Icon,
  },

  props: {
    label: {
      default: 'Buy for $6.99',
      type: String,
    },
  },

  methods: {
    handleClick() {
      window.sa_event(`click_buy_on_${this.os}`)
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
