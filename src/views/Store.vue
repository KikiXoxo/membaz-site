<template>
  <div class="store background content-min-height">
    <div class="container">
      <div class="header px-1">
        <h1>
          Our
          <span class="text-primary">{{
            capitalizedCategory || 'Collection'
          }}</span>
        </h1>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search product..."
          @input="handleSearch"
        />
      </div>

      <!-- Category filter buttons -->
      <div class="category-filters px-1">
        <button
          @click="filterCategory('')"
          class="btn"
          :class="{
            active: currentCategory === '',
            'btn-primary': currentCategory === '',
            'btn-outline': currentCategory !== '',
          }"
        >
          All Products
        </button>

        <button
          v-for="tag in tags"
          :key="tag"
          @click="filterCategory(tag)"
          class="btn"
          :class="{
            active: tag === currentCategory,
            'btn-primary': tag === currentCategory,
            'btn-outline': tag !== currentCategory, // Always have to put hyphenated class name in quotes to avoid error
          }"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Spinner Loader -->
      <SpinnerLoader v-if="loading" />

      <!-- Error message -->
      <p
        v-if="!loading && filteredProducts.length === 0"
        class="error-message px-1"
      >
        No products found for this search, please try again
      </p>

      <!-- Products grid -->
      <!-- If  loading is true, hidden class will be added-->
      <div class="products px-1" :class="{ hidden: loading }">
        <Product
          v-for="product in filteredProducts"
          :key="product.id"
          :title="product.name"
          :price="product.price"
          :cover-img="product.imgs[0]"
          @click="goToProduct(product.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Product from '@/components/Product.vue';
import productsData from '../data/data.json';
import { useTags } from '@/composables/useTags';
import SpinnerLoader from '../components/SpinnerLoader.vue';

const products = ref([]);
const searchQuery = ref('');
const { tags } = useTags();
const currentCategory = ref('');
const loading = ref(false); // Loader state false by default
const timeoutId = ref(null); // Timeout reference

const capitalizedCategory = computed(() => {
  return (
    currentCategory.value.charAt(0).toUpperCase() +
    currentCategory.value.slice(1)
  );
});

const route = useRoute();
const router = useRouter();

onMounted(() => {
  products.value = productsData;
  if (route.params.category) {
    currentCategory.value = route.params.category;
  }

  window.scrollTo(0, 0); // Reset scroll position to top
});

watch(route, newRoute => {
  if (newRoute.params.category) {
    currentCategory.value = newRoute.params.category;
  }
});

// Computed property for filtered products with delay
const filteredProducts = computed(() => {
  if (loading.value) return []; // If loading is true, return empty array ie display no content

  // If loading is false, display content
  return products.value.filter(product => {
    const matchesCategory =
      currentCategory.value === '' ||
      product.category === currentCategory.value;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

const handleSearch = function () {
  // Clear any previous timeout to avoid multiple timers
  if (timeoutId.value) clearTimeout(timeoutId.value);

  loading.value = true; // To reveal spinner

  // Set timeout to simulate loading delay
  timeoutId.value = setTimeout(() => {
    loading.value = false;
  }, 300);
};

// Switch categories dynamically with buttons
const filterCategory = category => {
  currentCategory.value = category;
  router.push({ name: 'store', params: { category } });
};

// Redirect to ProductDetail when product is clicked
const goToProduct = productId => {
  router.push({ name: 'product-detail', params: { id: productId } });
};
</script>

<style scoped>
.store {
  padding: 4rem 0;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.header {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input {
  font-size: 16px;
  border-radius: 30px;
  border-radius: 8px;
  padding: 0 1rem;
  height: 40px;
  width: 45%;
  background-color: #e4e3e3;
}

.category-filters {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
}

.category-filters .btn-primary:hover {
  opacity: 1;
}

button {
  margin-right: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1.1rem;
  margin: auto;
  padding-top: 1rem;
}

/* iPad Styling */
@media screen and (max-width: 1024px) {
  .products {
    padding: 0 2rem;
    gap: 1rem;
  }
}

/* Mobile Styling */
@media screen and (max-width: 767px) {
  .store {
    padding: 2.5rem 0;
  }
  .header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .category-filters {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
  }
  .products {
    padding: 0 0.5rem;
    gap: 0.25rem;
  }

  button {
    margin-right: 1rem;
    margin-bottom: 0.75rem;
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
  }
}
</style>
