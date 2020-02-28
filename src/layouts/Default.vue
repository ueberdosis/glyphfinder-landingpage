<template>
  <div class="app">
    <product-hunt-bar />
    <header class="app__header">
      <navigation :theme="navigationTheme" />
    </header>

    <main class="app__content">
      <slot />

      <app-section color="deep-black">
        <client-only>
          <testimonials />
        </client-only>
      </app-section>

      <app-section color="red" narrow>
        <template v-slot:background>
          <floating-glyphs />
        </template>
        <h2 class="huge">
          Add Glyphfinder to Your Tool Belt
        </h2>
        <p class="large">
          Glyphfinder is the missing character search for designers, developers and writers.
        </p>
        <p>
          <btn :href="gumroadLink" target="_blank">
            Get it now
          </btn>
        </p>
      </app-section>

      <app-section :clip-bottom="false">
        <h2 class="white">
          FAQ
        </h2>
        <grid :options="{ medium: 'wide'}">
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="Do you offer a trial?">
              <p>
                We didn’t implement a trial, but feel free to purchase the app. If it’s not for you <a href="mailto:support@glyphfinder.com">send a short message</a>. We’ll refund your order, no questions asked.
              </p>
            </accordion>
            <accordion title="Does Glyphfinder have all unicode characters in the world?">
              <p>
                To be honest, not at all. Currently, there are 130.000+ characters in unicode. We focus on Western glyphs and emojis (all!) and filter out everything that can’t be rendered on your system.
              </p>
              <p>
                In the end we have 30.000+ characters, all of them manually tagged. That should be enough for your daily work. <a href="mailto:support@glyphfinder.com">Let us know</a> if you think anything important is missing!
              </p>
            </accordion>
            <accordion title="Is Glyphfinder available for Linux?">
              <p>
                Not for now. But <a href="mailto:support@glyphfinder.com">give us a shout</a> and we’ll consider it.
              </p>
            </accordion>
          </grid-item>
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="Something’s wrong. How do I get in touch?">
              <p>
                Sorry to hear something is off. <a href="mailto:support@glyphfinder.com">Send us an email</a>, we’ll be happy to help!
              </p>
            </accordion>
            <accordion title="I have a great idea, whom should I send an email?">
              <p>
                Good news for you: We have a <a href="https://feedback.glyphfinder.com">public feedback board</a>.
              </p>
              <p>
                Use this board to promote your ideas not only to us but to other users as well. We will consider and reply to every suggestion.
              </p>
            </accordion>
            <accordion title="Do you collect my personal data?">
              <p>
                The app needs the internet connection to check your license once, everything else is working offline. We don’t track anything at all, except the number of sales and the number of pageviews.
              </p>
              <p>
                To learn more, check out our <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </accordion>
          </grid-item>
        </grid>
      </app-section>

      <app-section color="black" id="download">
        <h2 class="white">
          Download
        </h2>
        <div>
          <download-btn
            icon="mac"
            label="Download for"
            text="macOS"
            :href="downloadLink"
            meta="macOS 10.14 or higher"
          />
          <download-btn
            icon="windows"
            label="Download for"
            text="Windows"
            :href="downloadLink"
            meta="Windows 10 or higher"
          />
        </div>
      </app-section>
    </main>

    <footer class="app__footer">
      <app-section :clip-top="false" :clip-bottom="false">
        <app-footer />
      </app-section>
    </footer>
  </div>
</template>

<script>
import Btn from '@/components/Btn'
import DownloadBtn from '@/components/DownloadBtn'
import ProductHuntBar from '@/components/ProductHuntBar'
import Navigation from '@/components/Navigation'
import AppSection from '@/components/AppSection'
import AppFooter from '@/components/AppFooter'
import Accordion from '@/components/Accordion'
import Testimonials from '@/components/Testimonials'
import FloatingGlyphs from '@/components/FloatingGlyphs'
import { Grid, GridItem } from '@/components/Grid'

export default {
  props: {
    navigationTheme: {
      default: 'dark',
      type: String,
    },
  },

  components: {
    Btn,
    DownloadBtn,
    ProductHuntBar,
    Navigation,
    AppSection,
    AppFooter,
    Accordion,
    Testimonials,
    FloatingGlyphs,
    Grid,
    GridItem,
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss"></style>
