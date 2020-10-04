<template>
  <section>
    <nuxt-link :to="post.fields.slug" class="text-decoration-none">
      <div>
        <b-card no-body class="overflow-hidden blog_card">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="post.fields.heroImage.fields.file.url"
                alt="Image"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body
                class="d-flex flex-column justify-content-center h-100"
              >
                <b-card-title class="title">{{
                  post.fields.title
                }}</b-card-title>
                <b-card-text class="publish_date"
                  >🕘{{ trimmedYear }}年{{ trimmedMonth }}月{{ trimmedDate }}日
                  {{ trimmedHour }}:{{ trimmedTime }}</b-card-text
                ></b-card-body
              >
            </b-col>
          </b-row>
        </b-card>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
import Mixin from '../mixins/mixin'
export default {
  mixins: [Mixin],
  props: { post: Object },
}
</script>

<style scoped>
.blog_card {
  border-radius: 30px;
}
.title {
  font-size: 32px;
}
.title:hover {
  text-decoration: none;
}
.publish_date {
  font-size: 16px;
}
.publish_date:hover {
  text-decoration: none;
}
section {
  margin: 24px 0;
}

@media screen and (min-width: 480px) {
  section {
    margin: 48px 0;
  }
  .title {
    font-size: 40px;
  }
  .publish_date {
    font-size: 24px;
  }
}
</style>
