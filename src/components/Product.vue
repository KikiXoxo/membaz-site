<template>
  <div class="product">
    <h3>{{ title }}</h3>
    <div class="img-container">
      <SpinnerLoader :class="{ hidden: imageLoaded }" />

      <img
        :src="coverImg"
        alt="Product Image"
        @load="imageLoaded = true"
        :class="{ hidden: !imageLoaded }"
      />
    </div>
    <div class="flex">
      <div class="flex-icons-text">
        <i-foundation-pricetag-multiple class="icon-price" />
        <p class="description__price">{{ price }}</p>
      </div>

      <button class="btn-primary flex-icons-text">
        <i-mdi-cart />
        <span class="shop-now">SHOP NOW</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SpinnerLoader from '../components/SpinnerLoader.vue';

const imageLoaded = ref(false);

const props = defineProps({
  title: String,
  price: String,
  coverImg: String, // cover-img from Shop.vue automatically converted to coverImg
});
</script>

<style scoped>
.product {
  padding-bottom: 42px;
  padding: 2rem 1rem 1rem;
  border-radius: 10px;
  background: var(--color-light);
  color: var(--color-dark);
  border: 1px solid #999;
}

h3 {
  font-weight: 500;
  padding-bottom: 1rem;
}

img {
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
}

img:hover {
  scale: 1.12;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

button {
  font-size: 1rem;
  width: 40%;
  color: var(--color-light);
  background: black;
  border: 2px solid black;
}

.description__price {
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 4px;
  font-style: italic;
}

.icon-price {
  height: 25px;
  width: 25px;
  color: var(--color-primary-dark);
  color: black;
}

.img-container {
  overflow: hidden;
  border-radius: 15px;
  height: 400px;
}

.shop-now {
  font-weight: 500;
}

.spinner {
  margin-top: 40%;
  margin-left: 40%;
}

/* iPad Styling */
@media screen and (max-width: 1024px) {
  .product {
    padding: 1rem;
  }
  .img-container {
    height: 320px;
  }

  h3 {
    height: 3.4rem;
    padding-bottom: 0;
  }

  .description__price {
    font-size: 0.9rem;
  }

  button {
    width: 50%;
    font-size: 0.9rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

/* Mobile Styling */
@media screen and (max-width: 767px) {
  .flex {
    margin-top: 0.25rem;
  }

  .product {
    padding: 0.5rem 0.375rem;
  }

  h3 {
    font-size: 1rem;
    line-height: 1.1;
    height: 2.6rem;
  }

  .img-container {
    border-radius: 8px;
    height: 200px;
  }

  .description__price,
  button {
    font-size: 0.8rem;
  }

  button {
    width: max-content;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 5px;
    padding: 0.25rem 1rem;
  }

  .description__price {
    margin-left: 2px;
  }
  .icon-price {
    height: 15px;
    width: 15px;
  }

  .shop-now {
    display: none;
  }
}

@media screen and (max-width: 360px) {
  h3 {
    font-size: 1rem;
  }
}
</style>
