<template>
  <Layout>
    <app-section color="red" :clip-top="false">
      <template v-slot:background>
        <floating-glyphs />
      </template>
      <h1>
        Find the unicorn in the unicode
      </h1>
      <p class="large">
        Glyphfinder is the missing character search for designers, developers and writers.
      </p>
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
import AppSection from '@/components/AppSection'
import FloatingGlyphs from '@/components/FloatingGlyphs'

export default {
  components: {
    AppSection,
    FloatingGlyphs,
  },
}
</script>
