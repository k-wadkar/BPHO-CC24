<script setup>
import GraphTwo from '@/components/graphs/GraphTwo.vue'
import ReloadButton from '@/components/ReloadButton.vue'
</script>

<template>
  <div class="rootElement">
    <h1>Task Two</h1>
    <GraphTwo />
    <ReloadButton />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
