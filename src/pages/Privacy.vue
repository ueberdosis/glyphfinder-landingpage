<template>
  <Layout navigation-theme="bright">
    <app-section :clip-top="false" narrow>
      <h1>
        Privacy Policy for the Website
      </h1>
      <p>
        We value your privacy and question everything that stores or processes your personal information. With that in mind, we still needed a few external services to publish Glyphfinder. Here is everything you need to know.
      </p>
      <h3>
        Netlify
      </h3>
      <p>
        We use Netlify to host our static website. It features continuous deployment from Git across a global application delivery network and full integration with Let’s Encrypt. <a href="https://www.netlify.com/privacy/">Read Netlify’s Privacy Policy.</a>
      </p>
      <h3>
        Gumroad
      </h3>
      <p>
        Gumroad is an online platform that enables us to sell Glyphfinder directly to you. <a href="https://gumroad.com/privacy">Read Gumroad’s Privacy Policy</a>
      </p>
      <h3>
        Mailcoach
      </h3>
      <p>
        We use a self-hosted instance of Mailcoach to occasionally send out emails about app updates to you.
      </p>
      <h3>
        Mailgun
      </h3>
      <p>
        To actually deliver the emails to you, we use the service Mailgun. <a href="https://www.mailgun.com/gdpr/">Read more about Mailgun’s Privacy Policy</a>
      </p>
      <h3>
        Simple Analytics
      </h3>
      <p>
        To get critical information about the behavior of our visitors, we use <a href="https://simpleanalytics.com" target="_blank">Simple Analytics</a>. This analytics software gives us insight about our visitors only in general, but not about individuals per say, as it does not track visitors and does not store any personal identifiable information. <a href="https://docs.simpleanalytics.com/what-we-collect" target="_blank">Go to their documentation</a> to find out what Simple Analytics collects (and most importantly what they don't).
      </p>
      <p>
        Or have a look at our analytics dashboard: <a href="https://simpleanalytics.com/glyphfinder.com">https://simpleanalytics.com/glyphfinder.com</a>
      </p>
      <h3>
        Floatie
      </h3>
      <p>
        We built a service that aggregates data from all those services (SimpleAnalytics, Gumroad) and shows a public dashboard with all the metrics: <a href="https://floatie.app/glyphfinder">https://floatie.app/glyphfinder</a>. It does not store any personal information.
      </p>
      <h1>
        Privacy Policy for Glyphfinder
      </h1>
      <p>
        We don’t track your usage of Glyphfinder. We need an internet connection during the installation though:
      </p>
      <h3>
        License Check
      </h3>
      <p>
        When you start the app for the first time we ask you for your license key. To check if you have a valid license key, we send the key to the Gumroad API. The result is stored locally and never sent to someone else. <a href="https://help.gumroad.com/article/76-license-keys">Read more about the Gumroad API.</a>
      </p>
    </app-section>
  </Layout>
</template>

<script>
import AppSection from '@/components/AppSection'

export default {
  components: {
    AppSection,
  },

  metaInfo: {
    title: 'Privacy Policy',
  },
}
</script>
