<template>
  <div class="app-footer small">
    <div class="app-footer__section">
      <grid :options="{ default: 'backwards wide', medium: 'forwards' }">
        <grid-item :options="{ medium: '6/12' }">
          <grid :options="{ default: 'narrow', medium: 'wide' }">
            <grid-item :options="{ medium: '6/12' }">
              <ul>
                <li>
                  <g-link to="/">
                    Features
                  </g-link>
                </li>
                <li>
                  <a :href="downloadLink" download>
                    Download
                  </a>
                </li>
                <li>
                  <a :href="gumroadLink" target="_blank">
                    Buy
                  </a>
                </li>
                <li>
                  <a href="mailto:support@mouseless.app" target="_blank">
                    Support
                  </a>
                </li>
              </ul>
            </grid-item>
            <grid-item :options="{ medium: '6/12' }">
              <ul>
                <li>
                  <a href="https://floatie.app/glyphfinder" target="_blank">
                    Public Metrics
                  </a>
                </li>
                <li>
                  <a href="/glyphfinder-press-kit.zip" download>
                    Press Kit
                  </a>
                </li>
                <li>
                  <g-link to="/privacy">
                    Privacy Policy
                  </g-link>
                </li>
                <li>
                  <g-link to="/impressum">
                    Impressum
                  </g-link>
                </li>
              </ul>
            </grid-item>
          </grid>
          <p>
            Made with ❤️ by <a href="https://twitter.com/_ueberdosis" target="_blank">überclub</a>
          </p>
        </grid-item>
        <grid-item :options="{ medium: '6/12' }">
          <h3>
            Be the first to know
          </h3>
          <p>
            We’ll inform you about new apps and deals.
            <br>
            No spam, we promise.
          </p>
          <newsletter-form />
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from '@/components/Grid'
import NewsletterForm from '@/components/NewsletterForm'

export default {
  components: {
    Grid,
    GridItem,
    NewsletterForm,
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
