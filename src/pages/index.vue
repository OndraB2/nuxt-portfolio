<template>
  <div class="container">
    <h1>GitHub Repositories Looker</h1>
    <div class="search-container">
      <input
        v-model="username"
        type="text"
        placeholder="Enter GitHub username"
        class="search-input"
      />
      <button @click="navigateTo({ name: 'username', params: { username } })" class="search-button">Search</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const username = ref<string>("");
</script>
