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
      <li class="side-Item">
        <RouterLink :to="{ name: 'taskOverviews' }">
          <span class="side-text">Task Overviews</span>
        </RouterLink>
      </li>
      <li class="side-Item">
        <RouterLink :to="{ name: 'task1' }">Task 1</RouterLink>
      </li>
      <li class="side-Item">
        <RouterLink :to="{ name: 'task2' }">Task 2</RouterLink>
      </li>
      <li class="side-Item">
        <RouterLink :to="{ name: 'task3' }">Task 3</RouterLink>
      </li>
    </ul>
    <img src="..\assets\logo.svg" width="60rem" id="collapse-Arrow" @click="switchClass()" />
  </nav>
</template>

<style scoped>
nav {
  margin: 0px;
  padding: 0;
  height: 100vh;
  position: fixed;
  background-color: var(--color-background-mute);
  transition: all 0.3s ease 0s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#collapse-Arrow {
  transition: all 0.3s ease 0s;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
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
  display: block;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 20vh; */
  list-style: none;
}
.expanded #collapse-Arrow {
  transform: rotate(90deg);
  margin-left: 11rem;
}
</style>
