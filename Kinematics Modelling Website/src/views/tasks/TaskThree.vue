<script setup>
import GraphThree from '@/components/graphs/GraphThree.vue'
import ReloadButton from '@/components/ReloadButton.vue'
</script>

<template>
  <div class="rootElement">
    <h1>Task Three</h1>
    <br />
    <p>
      <em
        >Note: If the highball and lowball traces are not showing up, this means it is not possible
        for a particle with the specified characteristics to pass through the target point.</em
      >
    </p>
    <GraphThree />
    <ReloadButton />
  </div>
</template>

<style scoped>
h1,
p {
  text-align: center;
}
</style>
