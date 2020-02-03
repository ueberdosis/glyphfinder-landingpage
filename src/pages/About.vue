<template>
  <Layout>
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input name="email" v-model="email" />
      </div>

      <div>
        <button type="submit">Subscribe</button>
      </div>
    </form>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  metaInfo: {
    title: 'About us'
  },

  data() {
    return {
      email: null,
    }
  },

  methods: {
    onSubmit() {
      axios
        .post('https://mailing.ueberdosis.io/mailcoach/subscribe/b4741e9b-69b7-4ba3-8828-4500236686fe', {
          email: this.email,
        })
        .then(response => {
          console.log({response})
        })
        .catch(error => {
          console.log({error})
        })
    },
  },
}
</script>
