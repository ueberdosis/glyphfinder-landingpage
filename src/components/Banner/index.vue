<template>
  <div class="c-banner">
    <div class="c-banner__content">
      <div class="c-banner__content-inner">
        <slot />
      </div>
    </div>
    <div class="c-banner__background">
      <floating2 />
    </div>
  </div>
</template>

<script>
import Floating2 from '@/components/Floating2'

export default {
  components: {
    Floating2,
  }
}
</script>

<style lang="scss" src="./style.scss"></style>