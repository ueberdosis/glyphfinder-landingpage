<template>
  <Layout>

    <app-section color="red" width="full" clip-bottom>
      <banner>
        <h1>
          Find the unicorn in the unicode
        </h1>
        <p class="large">
          Glyphfinder is the missing character search for designers, developers and writers.
        </p>
      </banner>
    </app-section>

    <app-section color="black">
      <h2>
        large features
      </h2>
    </app-section>

    <app-section color="deep-black">
      <h2>
        small features
      </h2>
    </app-section>

  </Layout>
</template>

<script>
import Banner from '@/components/Banner'
import AppSection from '@/components/AppSection'

export default {
  components: {
    Banner,
    AppSection,
  },
}
</script>
