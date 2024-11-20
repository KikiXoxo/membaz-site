<template>
  <div id="categories" class="categories-container background pall-1">
    <h1 class="text-primary">Collection</h1>

    <div class="categories">
      <div class="category" v-for="(product, i) in products" :key="product.id">
        <div class="img-container">
          <img :src="product.imgs[0]" alt="Product Image" />
        </div>

        <!-- Button links to the Shop view with the selected category -->
        <RouterLink :to="`/store/${tags[i]}`" class="btn btn-outline">
          {{ tags[i] }}
        </RouterLink>
      </div>
    </div>

    <!-- View Collection button defaults to 'jerseys' -->
    <RouterLink to="/store" class="btn btn-primary flex-icons-text">
      VIEW COLLECTION <i-mdi-arrow-right-thin />
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import productsData from '../data/data.json';
import { useTags } from '@/composables/useTags';

const products = ref([]);
const { tags } = useTags();

onMounted(() => {
  // Select only 1 product per category
  products.value = [
    productsData[0],
    productsData[2],
    productsData[8],
    productsData[10],
  ];
});
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 1.25rem;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.img-container {
  overflow: hidden;
  border-radius: 10px;
  height: 250px;
  width: 100%;
}

img {
  height: 100%;
  object-fit: cover;
}

.category .btn {
  width: 90%;
  text-transform: uppercase;
  margin-top: 1rem;

  border-radius: 0;
}

.categories-container {
  display: flex;
  flex-direction: column;
}

.btn.btn-primary {
  width: max-content;
  align-self: end;
  margin-top: 3rem;
  font-size: 1.1rem;
  padding: 0.5rem 3.5rem;
  border-radius: 30px;
}

svg {
  margin-left: 0.25rem;
  width: 30px;
  height: 30px;
}
.btn.btn-primary {
  background: black;
  color: var(--color-light);
  border-color: black;
}

/* iPad Styling */
@media screen and (max-width: 1024px) {
  .categories {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .category .btn {
    width: 100%;
  }

  .btn.btn-primary {
    margin-top: 1.5rem;
    width: calc(50% - 1.25rem);
    padding: 0.5rem 0;
    justify-content: center;
  }
}

/* Mobile Styling */
@media screen and (max-width: 767px) {
  .categories {
    grid-template-columns: 1fr;
  }

  .img-container {
    height: 300px;
  }

  .btn.btn-primary {
    width: 100%;
  }
}
</style>
