<template>
  <div class="download-button">
    <btn class="download-button__btn" :href="href" :download="download">
      <icon class="download-button__icon" :name="icon" v-if="icon" />
      <span class="download-button__content">
        <span class="download-button__label">
          {{ label }}
        </span>
        <span class="download-button__text">
          {{ text }}
        </span>
      </span>
    </btn>
    <div class="download-button__meta" v-if="meta">
      {{ meta }}
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
    icon: {
      default: null,
      type: String,
    },

    label: {
      default: null,
      type: String,
    },

    text: {
      default: null,
      type: String,
    },

    meta: {
      default: null,
      type: String,
    },

    href: {
      default: null,
      type: String,
    },

    download: {
      default: true,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
