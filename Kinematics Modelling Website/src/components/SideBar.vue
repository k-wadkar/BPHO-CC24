<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let dynamicClass = ref('collapsed')

function switchClass() {
  if (dynamicClass.value == 'collapsed') {
    dynamicClass.value = 'expanded'
  } else {
    dynamicClass.value = 'collapsed'
  }
}
</script>

<template>
  <nav :class="dynamicClass">
    <ul>
      <li>
        <RouterLink :to="{ name: 'taskOverviews' }"> Overviews </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task1' }">Task 1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task2' }">Task 2</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task3' }">Task 3</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task4' }">Task 4</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task5' }">Task 5</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task6' }">Task 6</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task7' }">Task 7</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task8' }">Task 8</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'task9' }">Task 9</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'extension1' }">Extension 1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'extension2' }">Extension 2</RouterLink>
      </li>
    </ul>
    <img src="..\assets\logo.svg" width="60rem" id="collapse-Arrow" @click="switchClass()" />
  </nav>
</template>

<style scoped>
nav {
  margin: 0px;
  padding: 0;
  height: calc(100vh - 75px);
  position: fixed;
  background-color: var(--color-background-mute);
  transition: all 0.2s ease 0s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  transition:
    opacity 0.5s,
    visibility 0.5s;
}

#collapse-Arrow {
  transition: all 0.3s ease 0s;
}

.collapsed {
  width: 5rem;
}
.collapsed ul {
  display: none;
}
.collapsed #collapse-Arrow {
  transform: rotate(270deg);
  margin-left: 0.75rem;
}

.expanded {
  width: 15rem;
}
.expanded ul {
  margin-left: 5rem;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  list-style: none;
}
.expanded ul li a {
  transition: all 0.3s ease 0s;
}
.expanded ul li a:hover {
  color: var(--color-text-hover);
}
.expanded #collapse-Arrow {
  transform: rotate(90deg);
}
</style>
