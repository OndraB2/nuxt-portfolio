<template>
  <div class="container">
    <h1>GitHub Repositories</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <ul v-else class="repo-list">
      <li v-for="repo in repositories" :key="repo.name" class="repo-item">
        <a :href="repo.link" target="_blank" class="repo-link">{{ repo.name }}</a>
        <p class="repo-meta">
          Created: {{ formatDate(repo.created_at) }} | Last Updated: {{ formatDate(repo.updated_at) }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { getRepositories } = useGithub();
const repositories = ref<Repository[]>([]);
const loading = ref<boolean>(true);

repositories.value = await getRepositories();
loading.value = false;

</script>
