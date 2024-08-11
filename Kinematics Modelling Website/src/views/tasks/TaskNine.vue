<script setup>
import GraphNine from '@/components/graphs/GraphNine.vue'
import ReloadButton from '@/components/ReloadButton.vue'
</script>

<template>
  <div class="rootElement">
    <h1>Task Nine</h1>
    <GraphNine />
    <ReloadButton />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
