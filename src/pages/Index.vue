<template>
  <Layout>
    <app-section color="red" width="full">
      <banner>
        <h1>Don’t miss that glyph again.</h1>
      </banner>
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
