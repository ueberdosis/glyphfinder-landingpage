<template>
  <span class="shortcut">
    <small-key v-for="key in keys" :name="key" :key="key" />
  </span>
</template>

<script>
import SmallKey from '@/components/SmallKey'

export default {
  components: {
    SmallKey,
  },

  props: {
    keys: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
