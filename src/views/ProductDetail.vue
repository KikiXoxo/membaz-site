<template>
  <div class="background py-1 content-min-height">
    <div class="container">
      <h1 class="px-1">{{ product.name }}</h1>

      <div class="flex-container px-1">
        <!-- Image Gallery -->
        <div class="image-gallery">
          <button
            class="arrow left-arrow"
            @click="prevImage"
            :disabled="!imageLoaded"
          >
            &#10094;
          </button>
          <!-- Arrows disabled if images aren't loaded (maintains fixed position with spinner loader) -->

          <div class="image-slider">
            <div class="img-container" :style="sliderStyle">
              <!-- <SpinnerLoader :class="{ hidden: imageLoaded }" /> -->

              <img
                v-for="img in product.imgs"
                :key="img"
                :src="img"
                alt="Product image"
                @load="imageLoaded = true"
                :class="{ hidden: !imageLoaded }"
              />
            </div>
          </div>

          <button
            class="arrow right-arrow"
            @click="nextImage"
            :disabled="!imageLoaded"
          >
            &#10095;
          </button>
        </div>

        <!-- Product Info -->
        <div class="product-info">
          <p class="price">{{ product.price }}</p>
          <h3>Product Information</h3>
          <p>
            {{ product.description }}
          </p>

          <div class="size">
            <span class="label">Size</span>
            <div>
              <span
                v-for="sizeItem in product.size"
                :key="sizeItem"
                class="size-item"
              >
                {{ sizeItem }}
              </span>
            </div>
          </div>

          <p><span class="label">Style:</span> {{ product.style }}</p>
          <p><span class="label">Design:</span> {{ product.design }}</p>
          <p><span class="label">Detail:</span> {{ product.detail }}</p>
          <p>
            <span class="label">Colors:</span> {{ product.colors.join(', ') }}
          </p>

          <a
            class="btn btn-primary flex-icons-text"
            href="https://wa.me/2348104933739"
            target="_blank"
            ><i-mage-whatsapp-filled /> Order Now</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import SpinnerLoader from '../components/SpinnerLoader.vue';
import productsData from '../data/data.json';

const route = useRoute();
const product = ref(null);
const currentImageIndex = ref(0);
const imageLoaded = ref(false);

watch(
  () => route.params.id,
  () => {
    const productId = Number(route.params.id);
    product.value = productsData.find(item => item.id === productId);
    currentImageIndex.value = 0; // Reset to the first image on product change
  },
  { immediate: true } // Ensures the watch runs immediately on mounted (immediately the component is first created and id is available). This is VERY important. So it doesn't matter that id doesn't ever change. We already forcefully triggered watch() once to update product.value, which is the only time we need it
);

// Navigation functions
const nextImage = () => {
  if (product.value.imgs.length > 1) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % product.value.imgs.length;
  }
};

const prevImage = () => {
  if (product.value.imgs.length > 1) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + product.value.imgs.length) %
      product.value.imgs.length;
  }
};

// Slider style
const sliderStyle = computed(() => {
  return {
    transform: `translateX(-${currentImageIndex.value * 100}%)`,
    transition: 'transform 0.5s ease',
  };
});
</script>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Oswald', sans-serif;
}

.flex-container {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.image-gallery {
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-slider {
  width: 100%;
  overflow: hidden;
}

.img-container {
  display: flex;
  transition: transform 0.5s ease;
}

.img-container img {
  width: 100%; /* Adjust based on your desired size */
  flex-shrink: 0; /* Prevent images from shrinking */
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  z-index: 10;
}

.left-arrow {
  left: 0;
}

.right-arrow {
  right: 0;
}

.arrow:hover {
  color: lightgray;
}

.product-info {
  border: 2.5px solid var(--color-dark);
  /* border: 2.5px solid #888; */
  padding: 1.5rem 0.75rem;
  flex: 1;
  border-radius: 8px;
}

.product-info .price {
  font-size: 1.4rem;
  font-weight: 500;
  font-style: italic;
}

.product-info h3 {
  margin: 1.5rem auto 1rem;
  font-weight: 500;
}
.product-info .size {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.product-info .size .size-item {
  display: inline-block;
  padding: 0.1rem 1rem;
  /* width: 50px; */
  text-align: center;
  border: 2px solid var(--color-primary-dark);
  color: var(--color-primary-dark);
  border-radius: 4px;
  /* font-size: 1rem; */
  cursor: default;
  /* user-select: none; */
  margin-right: 0.375rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
}

.label {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #555;
}

.btn {
  text-transform: uppercase;
  border-radius: 5px;
  margin-top: 2rem;
  width: 60%;
}

.spinner {
  margin-left: 50%;
}

/* iPad and Mobile Styling */
@media screen and (max-width: 1024px) {
  .flex-container {
    gap: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
    gap: 5px;
  }
}

/* Mobile styling */
@media screen and (max-width: 1023px) {
  .flex-container {
    flex-direction: column;
  }

  .btn {
    width: max-content;
  }
}

@media screen and (max-width: 767px) {
  h1 {
    font-size: 1.9rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  .flex-container.px-1 {
    padding: 0;
  }

  .image-slider {
    height: 440px;
  }

  .img-container {
    height: 100%;
  }

  .img-container img {
    object-fit: cover;
  }

  .arrow {
    font-size: 1.5rem;
  }

  .product-info {
    margin: auto 1rem;
  }

  .btn {
    width: 100%;
  }
}
</style>
