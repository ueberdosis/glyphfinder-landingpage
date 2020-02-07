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

      <app-section color="red" clip-top clip-bottom>
        <!-- <banner> -->
        <h1>
          Find the unicorn in the unicode
        </h1>
        <p class="large">
          Glyphfinder is the missing character search for designers, developers and writers.
        </p>
        <!-- </banner> -->
      </app-section>

      <app-section>
        <h2>
          FAQ
        </h2>
        <grid :options="{ medium: 'wide'}">
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="Do you offer a trial?">
              <p>
                We didn’t implement a trial yet, but no worries—feel free to purchase the app. If it’s not for you send a short message. We’ll refund your order.
              </p>
            </accordion>
            <accordion title="Does Glyphfinder have all the unicode characters in the world?">
              <p>
                …
              </p>
            </accordion>
            <accordion title="Why is it better than the macOS character viewer?">
              <p>
                …
              </p>
            </accordion>
          </grid-item>
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="Is Glyphfinder available for Linux?">
              <p>
                Nope, not for now. But give us a shout and we’ll consider it.
              </p>
            </accordion>
            <accordion title="Something’s wrong. How do I get in touch?">
              <p>
                <a href="mailto:support@glyphfnder.com">Drop us a line</a>, we’ll be happy to help!
              </p>
            </accordion>
          </grid-item>
        </grid>
      </app-section>
    </main>

    <footer class="app__footer">
      <app-section>
        <app-footer />
      </app-section>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ProductHuntBar from '@/components/ProductHuntBar'
import Navigation from '@/components/Navigation'
import AppSection from '@/components/AppSection'
import AppFooter from '@/components/AppFooter'
import Accordion from '@/components/Accordion'
import Testimonials from '@/components/Testimonials'
import { Grid, GridItem } from '@/components/Grid'

export default {
  props: {
    navigationTheme: {
      default: 'dark',
      type: String,
    },
  },

  components: {
    ProductHuntBar,
    Navigation,
    AppSection,
    AppFooter,
    Accordion,
    Testimonials,
    Grid,
    GridItem,
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss"></style>
