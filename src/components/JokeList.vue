<template>
    <div>
      <h2>Jokes for {{ selectedCategory }}</h2>
      <ul>
        <li v-for="joke in jokes" :key="joke.id">
          {{ joke.value }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['selectedCategory'],
    data() {
      return {
        jokes: []
      };
    },
    watch: {
      selectedCategory: {
        immediate: true,
        handler(newValue) {
          if (newValue) {
            this.fetchJokes(newValue);
          }
        }
      }
    },
    methods: {
      async fetchJokes(category) {
        try {
          const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${category}`);
          this.jokes = response.data.result;
        } catch (error) {
          console.error('Error fetching jokes:', error);
        }
      }
    }
  };
  </script>
  