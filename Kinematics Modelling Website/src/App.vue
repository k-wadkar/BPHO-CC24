<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  margin: 0;
  padding: 0;
}
</style>
