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
          <span>{{ post.fields.publishDate }}</span>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: { post: Object },
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
