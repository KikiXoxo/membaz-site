import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Store from '@/views/Store.vue';
import productsData from '@/data/data.json';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/store/:category?',
      name: 'store',
      component: Store,
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: () => import('@/views/ProductDetail.vue'), // Lazy loading component (instead of standard loading) since it's not a primary view like Home and Store and likely won't be accessed as frequently
      props: true,

      // Route Guard (beforeEnter) for when a product with id that doesn't exist is searched for
      beforeEnter: (to, _from, next) => {
        const productId = +to.params.id; // Convert id from route the user is trying to visit to a number
        const productExists = productsData.some(
          product => product.id === productId
        ); // Check if id in route matches any id from json

        if (productExists) {
          next(); // Allow navigation to the product details page
        } else {
          next({ name: '404' }); // Redirect to the 404 page if the product ID is invalid
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue'),
    },
  ],
});

export default router;
