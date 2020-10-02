<template>
  <section class="mb-5">
    <nuxt-link :to="post.fields.slug">
      <div class="d-flex">
        <img
          :src="post.fields.heroImage.fields.file.url"
          alt=""
          style="width: 350px"
          class="rounded-l"
        />
        <div
          class="d-flex flex-column justify-content-center bg-white p-4 rounded-r"
          style="width: 100%"
        >
          <h2 class="title mb-3">
            {{ post.fields.title }}
          </h2>
          <span
            >🕘{{ trimmedYear }}年{{ trimmedMonth }}月{{ trimmedDate }}日
            {{ trimmedDate }}:{{ trimmedTime }}</span
          >
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: { post: Object },
  computed: {
    trimmedYear() {
      return new Date(this.post.fields.publishDate).getFullYear()
    },
    trimmedMonth() {
      return new Date(this.post.fields.publishDate).getMonth()
    },
    trimmedDate() {
      return new Date(this.post.fields.publishDate).getDate()
    },
    trimmedTime() {
      // const hour = new Date(this.post.fields.publishDate).getHours()
      const second = (
        '00' + new Date(this.post.fields.publishDate).getSeconds()
      ).slice(-2)
      return second
    },
  },
}
</script>

<style scoped>
.rounded-l {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.rounded-r {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>
