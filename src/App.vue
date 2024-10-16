<template>
  <div id="app">
    <CategoryList @category-selected="setSelectedCategory" />
    <JokeList :selectedCategory="selectedCategory" />
  </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue';
import JokeList from './components/JokeList.vue';

export default {
  components: {
    CategoryList,
    JokeList
  },
  data() {
    return {
      selectedCategory: null
    };
  },
  methods: {
    setSelectedCategory(category) {
      this.selectedCategory = category;
    }
  }
};
</script>


<style>
/* Reset some default styles */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
}

/* Container for the entire app */
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Heading styles */
h2 {
  color: #333;
  margin-bottom: 16px;
  font-size: 24px;
}

/* Category list styles */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 12px;
  margin: 8px 0;
  background-color: #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #d0d0d0;
}

li.active {
  background-color: #333;
  color: white;
}

/* Joke list styles */
.joke-list {
  margin-top: 20px;
}

.joke-item {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 12px;
  border-left: 4px solid #333;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.joke-item:hover {
  border-color: #555;
}

/* Responsive styling */
@media (max-width: 768px) {
  #app {
    padding: 15px;
    margin: 10px;
  }

  h2 {
    font-size: 20px;
  }

  li {
    font-size: 16px;
    padding: 10px;
  }

  .joke-item {
    font-size: 14px;
    padding: 8px;
  }
}

</style>
