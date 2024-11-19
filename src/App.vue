<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<!-- <template>
  <div>
    <Hero />
    <Categories />
    <Shop />
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue';
import Shop from './components/Shop.vue';
import Categories from './components/Categories.vue';
</script> -->
