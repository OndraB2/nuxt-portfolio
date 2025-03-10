<template>
  <div class="container">
    <h1>GitHub Repositories</h1>
    <NuxtLink to="/" class="back-button">
      <button class="back-button">Back</button>
    </NuxtLink>
    <div v-if="loading" class="middle_info">Loading...</div>
    <div v-else-if="!loading && !repositories.length" class="middle_info">No repository for given Username.</div>
    <ul v-else class="repo-list">
      <li v-for="repo in repositories" :key="repo.name" class="repo-item">
        <a :href="repo.link" target="_blank" class="repo-link">{{ repo.name }}</a>
        <p class="repo-meta">Language: {{ repo.language ?? 'Not known' }}</p>
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

const { username } = defineProps<{
  username: string;
}>();

fetchRepositories();

async function fetchRepositories() {
  loading.value = true;
  repositories.value = await getRepositories(username);
  loading.value = false;
}
</script>
