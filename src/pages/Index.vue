<template>
  <Layout>
    <app-section color="red" :clip-top="false" narrow>
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
      <grid :options="{ medium: 'wide'}">
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="30.000+ Glyphs" icon="glyphs">
            With our enormous database you have more than 30.000 characters right at your fingertips, every single one manually tagged.
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="Quick Access" icon="frequently-used">
            Don‘t feel ashamed looking up characters multiple times. Your most frequently used glyphs will be pinned to the top.
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="Offline Support" icon="offline">
            No Wi-fi – no problem. Glyphfinder runs just as smoothly in a rustic cabin as on a plane.
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="Really Fast Search" icon="fast">
            Search should feel instant, even when looking through hundred thousands tags, so that‘s what we made it.
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="Dark Mode by Default" icon="dark-mode">
            No one wants a flash of bright light in their face when looking up a few glyphs. Enjoy the dark theme for Glyphfinder, it’s the only theme anyway.
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="macOS & Windows" icon="os">
            Glyphfinder will work on your favorite operating system (as long as it’s not Linux). All licenses include both apps.
          </feature-item>
        </grid-item>
      </grid>
    </app-section>
  </Layout>
</template>

<script>
import Btn from '@/components/Btn'
import AppSection from '@/components/AppSection'
import FloatingGlyphs from '@/components/FloatingGlyphs'
import FeatureItem from '@/components/FeatureItem'
import { Grid, GridItem } from '@/components/Grid'

export default {
  components: {
    Btn,
    AppSection,
    FloatingGlyphs,
    FeatureItem,
    Grid,
    GridItem,
  },
}
</script>
