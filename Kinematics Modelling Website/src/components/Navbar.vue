<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav-Container">
    <div class="nav-Left">
      <RouterLink :to="{ name: 'home' }" class="side-Icons">
        <img src="..\assets\logo.svg" width="50px" />
      </RouterLink>

      <RouterLink :to="{ name: 'home' }" class="side-Icons">
        <h1>BOUNCE</h1>
      </RouterLink>
    </div>

    <ul class="nav-Links">
      <li class="nav-Item">
        <RouterLink :to="{ name: 'home' }"><span class="nav-text">Home</span></RouterLink>
      </li>
      <li class="nav-Item">
        <RouterLink :to="{ name: 'taskOverviews' }"><span class="nav-text">Tasks</span></RouterLink>
      </li>
      <li class="nav-Item">
        <RouterLink :to="{ name: 'writeup' }"><span class="nav-text">Writeup</span></RouterLink>
      </li>
      <li class="nav-Item">
        <RouterLink :to="{ name: 'about' }"><span class="nav-text">About</span></RouterLink>
      </li>
    </ul>

    <div class="nav-Right">
      <a href="https://www.linkedin.com/in/kshitij-wadkar-2557852b5/" class="side-Icons">
        <img src="..\assets\linkedIn-logo.svg" width="50px" />
      </a>

      <a href="https://github.com/k-wadkar">
        <img src="..\assets\github-logo.svg" width="50px" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
@import '../assets/base.css';

.nav-Container {
  background-image: linear-gradient(to top, rgba(0, 255, 191, 0.1), var(--color-background-mute));
  /*background-color: var(--color-background-mute);*/
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-Left,
.nav-Right {
  display: flex;
  align-items: center;
}

.nav-Links {
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  /*flex-grow: 1;*/
  padding: 1.5% 10%;
}

.nav-Links li {
  display: inline-block;
  padding: 0px 5rem;
}

.nav-Links li a {
  transition: all 0.3s ease 0s;
}

.nav-Links li a:hover {
  color: var(--color-text-hover);
}
/*
.nav-Links li:nth-last-child(2) {
  margin-right: 20px;
}
*/
</style>
