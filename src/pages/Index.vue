<template>
  <Layout>
    <!-- <floating :glyphs="glyphs"/> -->

    <floating2 />
  </Layout>
</template>

<script>
import Floating2 from '@/components/Floating2'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    Floating2
  },

  data() {
    return {
      glyphs: ['⟵', '⟶', '⇐', '⇒', '⬆', '⌘', '♥', '☀', '€', '¥', '‰', '⁋', '≈', '×', '©', '‡', '⅟', '⅞', '∞', '˚', '℮', '∑', '↳', '⚠', '⌥', '¤', '⌧', '⌫', '™', '⁆', '—', '÷', '…', '∫', '◊', '∅', '⎋', '↪',]
      // glyphs: ['✌️', '🙃', '😍', '🤪', '🤓', '🤯', '💩', '👌', '🖖', '👀', '🙅‍♂️', '🐱', '🐝']
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
