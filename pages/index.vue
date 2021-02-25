<template>
  <main class="bg-light">
    <b-container class="post_wrapper pt-3">
      <b-row>
        <b-col
          v-for="post in posts"
          :key="post.fields.slug"
          class="my-2"
          md="4"
          sm="6"
          xs="12"
        >
          <blog-card :post="post"></blog-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
  head: {
    title: 'ぴすたのブログ',
  },
}
</script>
<style scoped>
.post_wrapper {
  font-size: 8px;
}
@media screen and (min-width: 480px) {
  .post_wrapper {
    font-size: 16px;
  }
  .more_blog_btn {
    width: 400px;
  }
}
</style>
