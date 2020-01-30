<template>
  <Layout>
    <floating :glyphs="glyphs"/>
  </Layout>
</template>

<script>
import Floating from '@/components/Floating'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    Floating
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
