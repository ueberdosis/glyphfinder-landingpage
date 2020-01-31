<template>
  <Layout>
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <form
      method="POST"
      action="https://mailing.ueberdosis.io/mailcoach/subscribe/b4741e9b-69b7-4ba3-8828-4500236686fe"
    >
      <div>
        <label for="email">Email</label>
        <input name="email" />
      </div>

      <div>
        <button type="submit">Subscribe</button>
      </div>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
