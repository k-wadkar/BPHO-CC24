<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ul class="side-Links">
      <li class="side-Item">
        <RouterLink :to="{ name: 'taskOverviews' }">
          <span class="side-text">Task Overviews</span>
        </RouterLink>
      </li>
      <li class="side-Item">
        <RouterLink :to="{ name: 'task1' }"><span class="side-text">Task 1</span></RouterLink>
      </li>
      <li class="side-Item">
        <RouterLink :to="{ name: 'task2' }"><span class="side-text">Task 2</span></RouterLink>
      </li>
      <li class="side-Item">
        <RouterLink :to="{ name: 'task3' }"><span class="side-text">Task 3</span></RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin: 0px;
  padding: 0;
  width: 5rem;
  height: 100vh;
  position: fixed;
  background-image: linear-gradient(to left, rgba(0, 255, 191, 0), rgb(0, 255, 191));
}
</style>
