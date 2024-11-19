<template>
  <header>
    <div class="header pall-1">
      <div class="container">
        <div>
          <h1>
            Many are called, few are
            <span class="text-highlight">MEMBAZ</span>
          </h1>
          <h3>FOR <span class="text-highlight">MEMBAZ</span> ONLY</h3>
          <a href="#categories" class="btn btn-primary flex-icons-text">
            <i-fluent-shopping-bag-tag-28-filled /> START SHOPPING</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// import Navbar from './Navbar.vue';
// import Footer from './Footer.vue';
</script>

<style scoped>
header {
  height: calc(100vh - 80px);
  color: var(--color-dark);
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url('@/assets/img/hero-img.PNG') no-repeat 107% 55% / 55%;
}

h1 {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
}

h3 {
  font-size: 1.4rem;
  margin-top: 1.2rem;
  font-weight: 500;
}
.text-highlight {
  color: rgb(233, 135, 23);
  font-style: italic;
  font-family: 'Fira Sans', sans-serif;
}

h1 .text-highlight {
  font-size: 3.6rem;
  font-weight: 700;
}
h3 .text-highlight {
  font-size: 1.6rem;
  font-weight: 800;
}

.container {
  justify-content: center;
  align-items: start;
}

.container > * {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 65%;
}

.btn {
  margin-top: 3rem;
  width: 45%;
  font-size: 1.1rem;
  font-weight: 500;
  gap: 0 1rem;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 30px;
}

/* DARK MODE */
/* header {
  color: var(--color-light);
}
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)),
    url('../public/img/hero-img.png') no-repeat 95% 55% / 55%;
} */

/* iPad Styling */
@media screen and (max-width: 1024px) {
  .header {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url('@/assets/img/hero-img.PNG') no-repeat 10px 220px / 150%;

    /* DARK MODE */
    /* background: linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)),
      url('../public/img/hero-img.png') no-repeat 0% center / 200%; */
  }

  .container > * {
    width: 80%;
  }

  .btn {
    width: 60%;
    margin-top: 4rem;
  }
}

@media screen and (min-height: 1180px) {
  header {
    height: 60vh;
  }
}

/* Mobile Styling */
@media screen and (max-width: 767px) {
  .header {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url('@/assets/img/hero-img.PNG') no-repeat 50% 340px / 200%;
  }
  .container {
    /* text-align: center; */
  }
  .container > * {
    width: 100%;
    /* align-items: center; */
  }
  h1 {
    font-size: 2.8rem;
    /* font-weight: 600; */
    line-height: 1.1;
  }

  h1 .text-highlight {
    font-size: 3.3rem;
    display: block;
    /* margin-top: 0.25rem; */
  }

  .btn.btn-primary {
    width: 100%;
    background-color: var(--color-light);
    color: var(--color-dark);
    border-color: var(--color-dark);
  }
}
</style>
