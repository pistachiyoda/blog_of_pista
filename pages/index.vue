<template>
  <div class="bg-secondary">
    <b-container class="pt-5" style="width: 900px">
      <blog-card
        v-for="post in posts"
        :key="post.fields.slug"
        :post="post"
      ></blog-card>
      <div class="mx-auto" style="width: 400px">
        <nuxt-link to="blog"
          ><b-button
            variant="primary"
            pill
            class="py-3 my-5"
            style="width: 100%"
            >ブログ記事をもっと見る</b-button
          ></nuxt-link
        >
      </div>
    </b-container>
  </div>
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
