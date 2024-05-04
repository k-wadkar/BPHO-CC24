<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/task1">Task 1</RouterLink>
    <RouterLink to="/task2">Task 2</RouterLink>
    <RouterLink to="/task2">Task 3</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  margin: 0px;
  padding: 0;
  width: 5rem;
  height: 100vh;
  position: fixed;
  background-image: linear-gradient(to left, rgba(0, 255, 191, 0), rgb(0, 255, 191));
}
</style>
