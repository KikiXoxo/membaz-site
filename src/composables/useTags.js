import { ref } from 'vue';
import productsData from '@/data/data.json';

export function useTags() {
  const tags = ref([]);

  // Extract unique categories from productsData
  const extractCategories = () => {
    const categories = productsData.map(product => product.category); // Get all categories
    tags.value = [...new Set(categories)]; // Remove duplicates and set the unique categories
  };

  extractCategories();

  return { tags };
}
