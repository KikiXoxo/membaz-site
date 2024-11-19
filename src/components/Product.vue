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
  /* border-bottom: 1px dashed #747373; */
  padding-bottom: 42px;

  /* Try 2 */
  border: 2px dashed #666;
  padding: 2rem 1rem 1rem;
  border-radius: 10px;
  background: #3f3f3f;
}
h3 {
  font-weight: 500;
  padding-bottom: 1rem;
  /* height: 3rem; */
}
img {
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
}

img:hover {
  scale: 1.12;
  /* opacity: 0.7; */
  /* background-color: rgba(0, 0, 0, 1); */
  filter: brightness(90%);
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
  color: var(--color-primary-light);
}

.img-container {
  overflow: hidden;
  /* width: 300px; */
  border-radius: 15px;
  height: 400px;
  /* width: 100%; */
}

.shop-now {
  font-weight: 500;
}

.spinner {
  margin-top: 40%;
  margin-left: 40%;
}

/* LIGHT MODE */
.product {
  background: var(--color-light);
  color: var(--color-dark);
  border: 1px solid #999;
}
.icon-price {
  color: var(--color-primary-dark);
  color: black;
}

/* LIGHT MODE DARK BUTTONS, dark .products background */
.btn-primary {
  background: var(--color-primary-dark);
  color: var(--color-light);
  border: 2px solid var(--color-primary-dark);

  background: black;
  border: 2px solid black;
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

@media screen and (max-width: 767px) {
  .flex {
    /* flex-direction: column; */
    /* align-items: flex-end; */
    margin-top: 0.25rem;
  }

  .product {
    padding: 0.5rem 0.375rem;
  }

  h3 {
    font-size: 0.95rem;
    /* font-weight: 400; */
    line-height: 1.1;
    /* text-transform: capitalize; */
    height: 2.7rem;
  }

  .img-container {
    border-radius: 8px;
    height: 200px;
    /* width: 100%; */
  }

  img {
    /* object-fit: contain; */
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
