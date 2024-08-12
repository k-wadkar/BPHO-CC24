<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped>
header {
  margin: 0;
  padding: 0;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
