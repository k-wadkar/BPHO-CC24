<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'tasks' }">Tasks</RouterLink>
    <RouterLink :to="{ name: 'writeup' }">Writeup</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
  </nav>
</template>
