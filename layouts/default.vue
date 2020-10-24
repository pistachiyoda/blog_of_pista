<template>
  <div>
    <header>
      <b-navbar toggleable="lg" class="header">
        <b-navbar-brand
          ><nuxt-link to="/" class="font-weight-bold header-brand"
            >ぴすたのブログ</nuxt-link
          ></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="header-items ml-auto">
            <b-nav-item
              ><nuxt-link to="/" class="font-weight-bold mr-3"
                >TOP</nuxt-link
              ></b-nav-item
            >
            <b-nav-item
              ><nuxt-link to="/blog" class="font-weight-bold mr-3"
                >BLOG</nuxt-link
              ></b-nav-item
            >
            <b-nav-item
              ><nuxt-link to="/about" class="font-weight-bold"
                >AOUBT</nuxt-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
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
              Ruby Silver, TOEIC 875 etc...
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
.header {
  font-family: 'Nico Moji';
}

h1,
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

.header-brand {
  font-size: 32px;
}
.header-items {
  font-size: 24px;
}
@media screen and (min-width: 480px) {
  .header {
    width: 1400px;
    margin: auto;
  }
  .header-brand {
    font-size: 48px;
  }
  .header-items {
    font-size: 32px;
  }
  img {
    width: 300px;
  }
}
</style>
