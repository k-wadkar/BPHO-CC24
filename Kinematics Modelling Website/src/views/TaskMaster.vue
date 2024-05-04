<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <SideBar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin-top: 0;
  margin-left: 6rem;
}
</style>
