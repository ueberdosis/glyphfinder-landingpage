<template>
  <div class="app">
    <!-- <product-hunt-bar /> -->
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
        <buy-button />
      </app-section>

      <app-section>
        <h2 class="white">
          FAQ
        </h2>
        <grid :options="{ medium: 'wide'}">
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="Do you offer a trial?">
              <p>
                We didn’t implement a trial, but feel free to purchase the app. If you’re not happy <a href="mailto:support@glyphfinder.com">send a short message</a>. We’ll refund your order, no questions asked.
              </p>
            </accordion>
            <accordion title="Does Glyphfinder have all unicode characters in the world?">
              <p>
                To be honest, not at all. Currently, there are 130.000+ characters in the Unicode set. We focus on a subset of those and filter out everything that can not be rendered on your system.
              </p>
              <p>
                In the end we have 34,306 characters, all of them manually tagged. That should be enough for your daily work. <a href="mailto:support@glyphfinder.com">Let us know</a> if you think anything important is missing!
              </p>
            </accordion>
            <accordion title="How can I copy a character?">
              <p>
                You can double-click on, press Enter or press <shortcut :keys="['ctrl', 'c']" /> on Windows and <shortcut :keys="['⌘', 'c']" /> on macOS to copy the selected character.
              </p>
              <p>
                Open the preferences <shortcut :keys="['⌘', ',']" /> to chose whether you want Glyphfinder to disappear after copying a character.
              </p>
            </accordion>
          </grid-item>
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="Something’s wrong. How do I get in touch?">
              <p>
                Sorry to hear something is off. <a href="mailto:support@glyphfinder.com">Send us an email</a>, we are happy to help.
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
                The app needs the internet connection to check your license once, everything else is working offline. We don’t track anything at all, except the number of sales and the <a href="https://simpleanalytics.com/glyphfinder.com">number of pageviews</a> on this website.
              </p>
              <p>
                To learn more, check out our
                <g-link to="/privacy">
                  Privacy Policy
                </g-link>.
              </p>
            </accordion>
          </grid-item>
        </grid>
      </app-section>

      <app-section color="black" id="download" :clip-bottom="false">
        <h2 class="white">
          Download
        </h2>
        <div>
          <download-btn
            icon="mac"
            label="Download for"
            text="macOS"
            :href="downloadLinkMac"
            meta="macOS 10.13 or higher"
          />
          <download-btn
            icon="windows"
            label="Download for"
            text="Windows"
            :href="downloadLinkWin"
            meta="Windows 10"
          />
          <download-btn
            icon="setapp"
            label="Available on"
            text="Setapp"
            href="https://go.setapp.com/stp268?refAppID=388&utm_medium=available_on_setapp_button&utm_source=388&utm_campaign=https://glyphfinder.com/"
            :download="false"
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
import BuyButton from '@/components/BuyButton'
import DownloadBtn from '@/components/DownloadBtn'
// import ProductHuntBar from '@/components/ProductHuntBar'
import Navigation from '@/components/Navigation'
import AppSection from '@/components/AppSection'
import AppFooter from '@/components/AppFooter'
import Accordion from '@/components/Accordion'
import Testimonials from '@/components/Testimonials'
import FloatingGlyphs from '@/components/FloatingGlyphs'
import { Grid, GridItem } from '@/components/Grid'
import Shortcut from '@/components/Shortcut'

export default {
  components: {
    BuyButton,
    DownloadBtn,
    // ProductHuntBar,
    Navigation,
    AppSection,
    AppFooter,
    Accordion,
    Testimonials,
    FloatingGlyphs,
    Grid,
    GridItem,
    Shortcut,
  },

  props: {
    navigationTheme: {
      default: 'dark',
      type: String,
    },
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss"></style>
