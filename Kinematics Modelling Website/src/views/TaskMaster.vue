<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const sideInstance = ref()
const directCollapse = () => {
  sideInstance.value.collapse()
}
</script>

<template>
  <div class="rootElement">
    <SideBar ref="sideInstance" />
    <main @click="directCollapse">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  margin-top: 0;
  margin-left: 6rem;
  height: calc(100svh - 75px);
}
</style>
