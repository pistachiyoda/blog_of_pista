<template>
  <section class="container mb-5">
    <h1>{{ post.fields.title }}</h1>
    <div
      class="image"
      :style="`background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`"
    ></div>
    <article v-html="$md.render(post.fields.body)"></article>
  </section>
</template>
<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  computed: {
    post() {
      const post = this.$store.state.posts.filter(
        (el) => el.fields.slug === this.slug
      )
      return post[0]
    },
  },
  head() {
    return {
      title: this.post.fields.title,
    }
  },
}
</script>
