<template>
  <Layout>
    <app-section color="red" :clip-top="false" narrow>
      <template v-slot:background>
        <floating-glyphs />
      </template>
      <h1 class="huge">
        Every fricking character at your fingertips
      </h1>
      <p class="large">
        Glyphfinder is the missing character search for designers, developers and writers.
      </p>
      <buy-button label="Get it now" />
    </app-section>

    <app-section color="black" overlap id="features">
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
          <demo-video
            :ratio="1158/680"
            name="banner.mp4"
          />
        </template>
      </split>
    </app-section>

    <app-section color="black">
      <grid :options="{ default: 'wide'}">
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <feature-item title="Looks like …" video="lookalikes.mp4">
            It’s easier to visually remember a character, so we integrated look-alikes for you. Find characters, no need to know their name.
          </feature-item>
        </grid-item>
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <feature-item title="The Best Emoji Search" video="emojis.mp4">
            We have manually added and tagged every single emoji. That probably makes Glyphfinder the single best emoji search out there.
          </feature-item>
        </grid-item>
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <feature-item title="Learn More" video="shortcuts.mp4">
            In case you want to go mouseless, learn the keyboard shortcuts for all your favorite glyphs right away. Developers copy the entity.
          </feature-item>
        </grid-item>
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <feature-item title="By Your Side" video="menubar.mp4">
            By default, Glyphfinder lives in your menubar. One click and it’s open. Copy a character and it automagically disappears again.
          </feature-item>
        </grid-item>
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <feature-item title="Your New Shortcut" video="shortcut.mp4">
            Don’t waste time moving your cursor to the menubar. Hit the keyboard shortcut
            <shortcut :keys="['⌃', '⌘', 'G']" /> <!--or <shortcut :keys="['CTRL', '❖', 'G']" /> on Windows--> to open Glyphfinder even faster.
          </feature-item>
        </grid-item>
      </grid>
    </app-section>

    <app-section color="deep-black">
      <grid :options="{ default: 'wide'}">
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <small-feature-item title="34.306 Entities" icon="glyphs">
            With our enormous database you have more than 30.000 characters and emojis right at your fingertips, every single one manually tagged.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <small-feature-item title="Quick Access" icon="frequently-used">
            Don‘t feel ashamed looking up characters multiple times. Your most frequently used entities will be pinned to the top.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <small-feature-item title="Offline Support" icon="offline">
            No Wi-fi – no problem. Glyphfinder runs just as smoothly in a rustic cabin as on a plane.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <small-feature-item title="Really Fast Search" icon="fast">
            Search should feel instant, even when looking through hundred of thousands of tags, so that‘s what we made it.
          </small-feature-item>
        </grid-item>
        <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <small-feature-item title="Light & Dark Mode" icon="dark-mode">
            No one wants a flash of bright light in their face when looking up a few entities. Glyphfinder respects your system setting.
          </small-feature-item>
        </grid-item>
        <!-- <grid-item :options="{ small: '6/12', medium: '4/12'}">
          <small-feature-item title="macOS" icon="mac">
            Glyphfinder will work on your favorite operating system (as long as it’s not Linux). All licenses include both apps.
          </small-feature-item>
        </grid-item> -->
      </grid>
    </app-section>
  </Layout>
</template>

<script>
import BuyButton from '@/components/BuyButton'
import Split from '@/components/Split'
import AppSection from '@/components/AppSection'
import FloatingGlyphs from '@/components/FloatingGlyphs'
import FeatureItem from '@/components/FeatureItem'
import SmallFeatureItem from '@/components/SmallFeatureItem'
import { Grid, GridItem } from '@/components/Grid'
import DemoVideo from '@/components/DemoVideo'
import Shortcut from '@/components/Shortcut'

export default {
  components: {
    BuyButton,
    Split,
    AppSection,
    FloatingGlyphs,
    FeatureItem,
    SmallFeatureItem,
    Grid,
    GridItem,
    DemoVideo,
    Shortcut,
  },
}
</script>
