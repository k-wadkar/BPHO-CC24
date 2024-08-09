<script setup>
import GraphThree from '@/components/graphs/GraphThree.vue'
</script>

<template>
  <div class="rootElement">
    <h1>Task Three</h1>
    <br />
    <p>
      <em
        >Note: If nothing is showing on the graph, this means it is not possible for a particle with
        the given characteristics to pass through the target point.</em
      >
    </p>
    <GraphThree />
  </div>
</template>

<style scoped>
h1,
p {
  text-align: center;
}
</style>
