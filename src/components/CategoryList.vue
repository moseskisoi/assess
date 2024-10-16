<template> 
    <div> 
        <h2>Categories</h2>
        <ul>
            <li v-for =  "category in categories" :key="category" @click = "selectCategory(category)"> 
                {{category}}
            </li>
        </ul>
    </div>
</template> 

<script> 
import axios from 'axios'; 

export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    selectCategory(category) {
      this.$emit('category-selected', category);
    }
  }
};

</script>