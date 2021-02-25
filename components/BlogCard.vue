<template>
  <section>
    <nuxt-link :to="post.fields.slug" class="text-decoration-none">
      <div>
        <b-card no-body class="overflow-hidden blog_card border-white">
          <b-row no-gutters>
            <b-col>
              <b-card-body
                class="d-flex flex-column justify-content-center h-100"
              >
                <b-card-text class="publish_date">
                  <time :datetime="trimmedDateTime">
                    {{ trimmedYear }}/{{ trimmedMonth }}/{{ trimmedDate }}
                  </time>
                </b-card-text>
                <b-card-title class="title">{{
                  post.fields.title
                }}</b-card-title></b-card-body
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
  border-radius: 10px;
}
.title {
  font-size: 16px;
  line-height: 140%;
  font-weight: bold;
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

@media screen and (min-width: 480px) {
  .blog_card {
    height: 198px;
  }
}
</style>
