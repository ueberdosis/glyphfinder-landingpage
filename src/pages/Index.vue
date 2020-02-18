<template>
  <Layout>
    <app-section color="red" :clip-top="false" narrow>
      <template v-slot:background>
        <floating-glyphs />
      </template>
      <h1 class="huge">
        Every fricking glyph at your fingertips
      </h1>
      <p class="large">
        Glyphfinder is the missing character search for designers, developers and writers.
      </p>
      <btn>
        Get it now
      </btn>
    </app-section>

    <app-section color="black" overlap>
      <split>
        <template v-slot:text>
          <h2>
            Finds Everything
          </h2>
          <p>
            We made looking for the needle in the unicode haystack easy. Search for words, categories, look-alikes or colors – you can’t do it wrong.
          </p>
        </template>
        <template v-slot:media>
          <img class="rounded-image" src="~@/assets/images/large-feature.png" alt="">
        </template>
      </split>
    </app-section>

    <app-section color="black">
      <grid :options="{ medium: 'wide'}">
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="Looks like …" image="feature.png">
            It’s easier to visually remember a glyph, so we made it easy to search for look-alikes. Type anything you remember and find the correct glyph instant.
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="The Best Emoji Search" image="feature.png">
            We have manually added and tagged every single emoji. That probably makes Glyphfinder the single best emoji search out there. 🧐
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="Learn More" image="feature.png">
            In case you want to go mouseless, learn the keyboard shortcuts for all your favorite glyphs right away. Coders copy the entity.
          </feature-item>
        </grid-item>
      </grid>
    </app-section>

    <app-section color="deep-black">
      <grid :options="{ medium: 'wide'}">
        <grid-item :options="{ medium: '4/12'}">
          <small-feature-item title="30.000+ Glyphs" icon="glyphs">
            With our enormous database you have more than 30.000 characters right at your fingertips, every single one manually tagged.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <small-feature-item title="Quick Access" icon="frequently-used">
            Don‘t feel ashamed looking up characters multiple times. Your most frequently used glyphs will be pinned to the top.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <small-feature-item title="Offline Support" icon="offline">
            No Wi-fi – no problem. Glyphfinder runs just as smoothly in a rustic cabin as on a plane.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <small-feature-item title="Really Fast Search" icon="fast">
            Search should feel instant, even when looking through hundred of thousands of tags, so that‘s what we made it.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <small-feature-item title="Dark Mode by Default" icon="dark-mode">
            No one wants a flash of bright light in their face when looking up a few glyphs. Enjoy the dark theme for Glyphfinder, it’s the only theme anyway.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <small-feature-item title="macOS & Windows" icon="os">
            Glyphfinder will work on your favorite operating system (as long as it’s not Linux). All licenses include both apps.
          </small-feature-item>
        </grid-item>
      </grid>
    </app-section>
  </Layout>
</template>

<script>
import Btn from '@/components/Btn'
import Split from '@/components/Split'
import AppSection from '@/components/AppSection'
import FloatingGlyphs from '@/components/FloatingGlyphs'
import FeatureItem from '@/components/FeatureItem'
import SmallFeatureItem from '@/components/SmallFeatureItem'
import { Grid, GridItem } from '@/components/Grid'

export default {
  components: {
    Btn,
    Split,
    AppSection,
    FloatingGlyphs,
    FeatureItem,
    SmallFeatureItem,
    Grid,
    GridItem,
  },
}
</script>
