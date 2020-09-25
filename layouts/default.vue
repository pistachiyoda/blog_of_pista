<template>
  <div>
    <header>
      <b-container class="my-3">
        <b-row>
          <b-col cols="7"
            ><h1 class="title font-weight-bold">ぴすたのブログ</h1></b-col
          >
          <b-col
            ><h2>
              <nuxt-link to="/" class="font-weight-bold">TOP</nuxt-link>
            </h2></b-col
          >
          <b-col
            ><h2>
              <nuxt-link to="/blog" class="font-weight-bold">BLOG</nuxt-link>
            </h2></b-col
          >
          <b-col
            ><h2>
              <nuxt-link to="/about" class="font-weight-bold">AOUBT</nuxt-link>
            </h2></b-col
          >
        </b-row>
      </b-container>
    </header>
    <Nuxt />
    <footer>
      <div class="bg-secondary py-5">
        <div class="text-center author"><u>Author</u></div>
        <div class="d-flex justify-content-center align-items-center mt-4">
          <img
            src="~assets/img/profile_img.jpg"
            alt=""
            class="rounded-circle mr-5"
            style="width: 300px"
          />
          <div>
            <div class="font-weight-bold mb-2 author_name">ぴすたちよだ</div>
            <p>
              ずっと駆け出しエンジニア。<br />
              最近はNuxt.js,Next.js,Railsを使ったWeb開発を勉強中。<br />
              <br />
              取得資格： <br />
              Ruby Silver, Ruby Gold, TOEIC 875 etc...
            </p>
          </div>
        </div>
      </div>
      <div class="bg-primary text-white text-center py-4">@pistachiyoda</div>
    </footer>
  </div>
</template>

<style>
header {
  font-family: 'Nico Moji';
}

h1,
h2 {
  margin: 0;
}

.author {
  font-size: 30px;
}

.author_name {
  font-size: 20px;
}
</style>
