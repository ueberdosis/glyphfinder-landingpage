<template>
  <div class="c-banner">
    <div class="c-banner__content">
      <div class="c-banner__content-inner">
        <slot />
      </div>
    </div>
    <div class="c-banner__background">
      <floating-glyphs />
    </div>
  </div>
</template>

<script>
import FloatingGlyphs from '@/components/FloatingGlyphs'

export default {
  components: {
    FloatingGlyphs,
  }
}
</script>

<style lang="scss" src="./style.scss"></style>