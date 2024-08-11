<script setup>
import GraphOne from '@/components/graphs/GraphOne.vue'
import ReloadButton from '@/components/ReloadButton.vue'
</script>

<template>
  <div class="rootElement">
    <h1>Task One</h1>
    <GraphOne />
    <ReloadButton />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
