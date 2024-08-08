<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let barDynamicClass = ref('collapsed')
let linkDynamicClass = ref('links-not-rendered')
let arrowDynamicClass = ref('arrow-visible')

function expand() {
  if (barDynamicClass.value == 'collapsed') {
    arrowDynamicClass.value = 'arrow-invisible'
    setTimeout(function () {
      barDynamicClass.value = 'expanded'
    }, 100)
    setTimeout(function () {
      linkDynamicClass.value = 'links-not-visible'
    }, 301)
    setTimeout(function () {
      linkDynamicClass.value = 'links-are-visible'
    }, 310)
    setTimeout(function () {
      arrowDynamicClass.value = 'arrow-visible'
    }, 350)
  }
}

function collapse() {
  if (barDynamicClass.value == 'expanded') {
    arrowDynamicClass.value = 'arrow-invisible'
    linkDynamicClass.value = 'links-not-visible'
    setTimeout(function () {
      linkDynamicClass.value = 'links-not-rendered'
    }, 201)
    setTimeout(function () {
      barDynamicClass.value = 'collapsed'
    }, 210)
    setTimeout(function () {
      arrowDynamicClass.value = 'arrow-visible'
    }, 350)
  }
}

function switchClass() {
  // Opening the sidebar
  if (barDynamicClass.value == 'collapsed') {
    expand()
  }
  // Closing the sidebar
  else {
    collapse()
  }
}

defineExpose({ collapse })
</script>

<template>
  <nav :class="barDynamicClass" @click="expand()">
    <ul :class="linkDynamicClass">
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
    <img
      src="..\assets\logo.svg"
      width="60rem"
      id="collapse-Arrow"
      :class="arrowDynamicClass"
      @click="switchClass()"
    />
  </nav>
</template>

<style scoped>
nav {
  margin: 0px;
  padding: 0;
  height: calc(100svh - 75px);
  position: fixed;
  background-color: var(--color-background-mute);
  transition: all 0.2s ease 0s;
  display: flex;
  align-items: center;
  z-index: 1;
}

nav ul {
  transition:
    opacity 0.2s,
    visibility 0.2s;
}
.links-not-rendered {
  display: none;
}
.links-not-visible {
  opacity: 0;
  visibility: hidden;
  display: block;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  list-style: none;
}

.links-are-visible {
  opacity: 1;
  visibility: visible;
  margin-left: 5rem;
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

#collapse-Arrow {
  cursor: pointer;
  transition:
    opacity 0.1s,
    visibility 0.1s;
}

.collapsed {
  width: 5rem;
}

.collapsed #collapse-Arrow {
  transform: rotate(270deg);
  margin-left: 0.75rem;
}

.expanded {
  width: 15rem;
}

.expanded #collapse-Arrow {
  transform: rotate(90deg);
}

.arrow-visible {
  opacity: 1;
  visibility: visible;
}
.arrow-invisible {
  opacity: 0;
  visibility: hidden;
}
a.router-link-active {
  border-bottom: 2px solid var(--c-theme-bright);
}
</style>
