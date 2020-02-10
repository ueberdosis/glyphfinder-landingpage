<template>
  <Layout>
    <app-section color="red" :clip-top="false">
      <template v-slot:background>
        <floating-glyphs />
      </template>
      <h1 class="huge">
        Every fucking glyph at your fingertips
      </h1>
      <p class="large">
        Glyphfinder is the missing character search for designers, developers and writers.
      </p>
      <btn>
        Get it now
      </btn>
    </app-section>

    <app-section color="black">
      large features
    </app-section>

    <app-section color="deep-black">
      small features
    </app-section>
  </Layout>
</template>

<script>
import Btn from '@/components/Btn'
import AppSection from '@/components/AppSection'
import FloatingGlyphs from '@/components/FloatingGlyphs'

export default {
  components: {
    Btn,
    AppSection,
    FloatingGlyphs,
  },
}
</script>
