<template>
  <div>
    <header class="bg-white sticky-top">
      <div class="container d-flex justify-content-between align-items-center">
        <div></div>
        <nuxt-link to="/"><h1>Pista's note</h1></nuxt-link>
        <a href="https://twitter.com/pistachiyoda">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </header>
    <Nuxt />
    <footer class="bg-light">
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

a:hover {
  text-decoration: none;
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
