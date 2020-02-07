<template>
  <!-- <mailchimp-subscribe
    url="https://mailing.mouseless.app/subscribe/post-json"
    user-id="1bc6d9d915dfd1f9d0950399d"
    list-id="603ad75049"
    @success="onSuccess"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }">
      <form class="newsletter-form" @submit.prevent="subscribe">
        <div class="newsletter-form__content">
          <input
            class="newsletter-form__input"
            type="email"
            v-model="email"
            @input="setEmail(email)"
            placeholder="Your email address"
          >
          <button class="newsletter-form__button" :disabled="loading" type="submit">
            Subscribe
          </button>
        </div>
        <div class="newsletter-form__error" v-html="error" v-if="error" />
        <div class="newsletter-form__success" v-if="success">
          To complete the subscription process, please click the link in the email we just sent you.
        </div>
      </form>
    </template>
  </mailchimp-subscribe> -->
  <div></div>
</template>

<script>
// import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  components: {
    // MailchimpSubscribe,
  },

  methods: {
    onSuccess() {
      this.email = null
    },
  },

  data() {
    return {
      email: null,
    }
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
