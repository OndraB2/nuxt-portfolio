<template>
  <Repositories :username="route.params.username as string"/>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
