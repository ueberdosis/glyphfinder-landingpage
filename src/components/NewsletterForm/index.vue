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
  </mailchimp-subscribe>
  <div></div> -->
  <form class="newsletter-form" @submit.prevent="onSubmit">
    <div class="newsletter-form__content">
      <input
        class="newsletter-form__input"
        type="email"
        v-model="email"
        placeholder="Your email address"
      >
      <button class="newsletter-form__button" :disabled="loading" type="submit">
        Subscribe
      </button>
    </div>
    <div class="newsletter-form__error" v-if="error">
      {{ error }}
    </div>
    <div class="newsletter-form__success" v-if="success">
      To complete the subscription process, please click the link in the email we just sent you.
    </div>
  </form>
</template>

<script>
// import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import axios from 'axios'

export default {
  components: {
    // MailchimpSubscribe,
  },

  data() {
    return {
      email: null,
      error: null,
      success: false,
      loading: false,
    }
  },

  methods: {
    // onSuccess() {
    //   this.email = null
    // },

    onSubmit() {
      if (this.loading) {
        return
      }

      this.loading = true

      axios
        .post('https://mailing.ueberdosis.io/api/subscribe/b4741e9b-69b7-4ba3-8828-4500236686fe', {
          email: this.email,
        })
        .then(response => {
          console.log({response})
          this.email = null
          this.success = true
          this.error = null
          this.loading = false
        })
        .catch(error => {
          console.log({error})
          this.success = false
          this.error = error?.response?.data?.message
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
