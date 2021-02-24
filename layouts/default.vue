<template>
  <div>
    <header class="bg-white sticky-top">
      <div class="container d-flex justify-content-between align-items-center">
        <div></div>
        <h1>Pista's blog</h1>
        <a href="https://twitter.com/pistachiyoda">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </header>
    <Nuxt />
    <footer class="bg-secondary">
      <b-container class="py-5">
        <div class="text-center mx-auto author mb-4">Author</div>
        <b-row>
          <b-col md="6" class="text-center text-md-right">
            <img
              src="~assets/img/profile_img.jpg"
              alt=""
              class="rounded-circle"
            />
          </b-col>
          <b-col md="6" class="mt-3 text-center text-md-left">
            <span class="font-weight-bold mt-4 mb-2 author_name">
              ぴすたちよだ
            </span>
            <p>
              ずっと駆け出しエンジニア。<br />
              最近はNuxt.js,Next.js,Railsを使ったWeb開発を勉強中。<br />
              <br />
              取得資格： <br />
              Ruby Silver, Ruby Gold, HTML5 Professional Lv.1, TOEIC 875 etc...
            </p>
          </b-col>
        </b-row>
      </b-container>
      <small class="bg-primary text-white text-center py-4"
        >@pistachiyoda</small
      >
    </footer>
  </div>
</template>

<style>
header {
  font-family: 'Montserrat', sans-serif;
}

header > div {
  height: 70px;
}

header h1 {
  font-size: 25px;
}

header a {
  font-size: 30px;
}

h2 {
  margin: 0;
}

.author {
  font-size: 30px;
  width: 100px;
  border-bottom: 1px ridge rgb(82, 79, 79);
}

.author_name {
  font-size: 20px;
}

img {
  width: 100px;
}

@media screen and (min-width: 480px) {
  .header {
    margin: auto;
  }
  img {
    width: 300px;
  }
}
</style>
