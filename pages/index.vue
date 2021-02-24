<template>
  <main class="bg-secondary">
    <b-container class="pt-1 post_wrapper">
      <blog-card
        v-for="post in posts"
        :key="post.fields.slug"
        :post="post"
      ></blog-card>
      <nuxt-link to="blog" class="more_blog_btn mx-auto d-block"
        ><b-button variant="primary" pill class="py-3 my-5 w-100"
          >ブログ記事をもっと見る</b-button
        ></nuxt-link
      >
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
