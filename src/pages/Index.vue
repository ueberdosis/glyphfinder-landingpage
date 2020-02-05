<template>
  <Layout>
    <app-section color="red" width="full">
      <banner>
        <h1>Don’t miss that glyph again.</h1>
        <!-- <floating :glyphs="glyphs"/> -->
        <!-- <floating2 /> -->
      </banner>
    </app-section>
  </Layout>
</template>

<script>
import Banner from '@/components/Banner'
import AppSection from '@/components/AppSection'
// import Floating2 from '@/components/Floating2'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    Banner,
    AppSection,
    // Floating2
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
