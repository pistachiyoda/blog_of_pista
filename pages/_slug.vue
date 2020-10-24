<template>
  <main>
    <section class="container mb-5">
      <time :datetime="trimmedDateTime" class="d-flex justify-content-end mb-3"
        >🕘{{ trimmedYear }}年{{ trimmedMonth }}月{{ trimmedDate }}日
        {{ trimmedHour }}:{{ trimmedTime }}</time
      >
      <h1 class="mb-4">{{ post.fields.title }}</h1>
      <article v-html="$md.render(post.fields.body)"></article>
    </section>
  </main>
</template>
<script>
import hljs from 'highlight.js'
import Mixin from '../mixins/mixin'
import 'highlight.js/styles/monokai-sublime.css'
export default {
  mixins: [Mixin],
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
  mounted() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  head() {
    return {
      title: this.post.fields.title,
    }
  },
}
</script>
<style scoped>
h1 {
  border-bottom: 1px ridge rgb(82, 79, 79);
}

img {
  width: 100%;
}
</style>
