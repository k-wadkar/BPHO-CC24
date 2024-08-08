<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

/*
The following creates a variable which contains the string 'hidden'.
Then, depending on if the user has scrolled down enough such that the
navbar is out of the viewport, this variable is switched between 'showing'
and 'hidden'. Evaluation of this condition occurs every time the user scolls.

If the navbar is out of sight, the variable is switched to 'showing', and
vice versa for when it is in sight. This variable is then dynamically bound to
the class of the button which jumps the viewport to the top of the page.

This creates the effect of the 'jump to top' button appearing after scrolling down.
*/
let classHolder = ref('hidden')

var myScrollFunc = function () {
  var y = window.scrollY
  if (y >= 75) {
    classHolder.value = 'showing'
  } else {
    classHolder.value = 'hidden'
  }
}

window.addEventListener('scroll', myScrollFunc)
</script>

<template>
  <!--Jump to top button-->
  <a href="#top">
    <img src="..\assets\logo.svg" width="60rem" id="jump-Arrow" :class="classHolder" />
  </a>

  <nav class="nav-Container">
    <!-- Contains website icon and title (which link to the homepage) -->
    <div class="nav-Left">
      <RouterLink :to="{ name: 'home' }">
        <img src="..\assets\logo.svg" width="50px" />
      </RouterLink>

      <RouterLink :to="{ name: 'home' }">
        <h1>BOUNCE</h1>
      </RouterLink>
    </div>

    <!-- Contains internal links (using vue router) -->
    <ul class="nav-Center">
      <li class="nav-Item">
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      </li>
      <li class="nav-Item">
        <RouterLink :to="{ name: 'tasks' }">Tasks</RouterLink>
      </li>
      <li class="nav-Item">
        <RouterLink :to="{ name: 'writeup' }">Writeup</RouterLink>
      </li>
      <li class="nav-Item">
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </li>
    </ul>

    <!-- Contains external links (GitHub and LinkedIn) -->
    <div class="nav-Right">
      <!--LinkedIn Logo-->
      <a href="https://www.linkedin.com/in/kshitij-wadkar-2557852b5/">
        <img src="..\assets\linkedIn-logo.svg" width="50px" class="external-Icons" />
      </a>

      <!--GitHub Logo-->
      <a href="https://github.com/k-wadkar/BPHO-CC24">
        <img src="..\assets\github-logo.svg" width="50px" class="external-Icons" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
@import '../assets/base.css';

/* Customisations for jump arror*/
#jump-Arrow {
  position: fixed;
  transform: rotate(180deg);
  margin-left: 10px;
  margin-top: 12px;
  transition:
    opacity 0.5s,
    visibility 0.5s;
}

.hidden {
  visibility: hidden;
  opacity: 0;
}
.showing {
  visibility: visible;
  opacity: 1;
}

/* Customisations for the whole navbar */
.nav-Container {
  background-image: linear-gradient(to bottom, var(--c-theme-soft), var(--color-background-mute));
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
}

/* Customisations for the icons on the far ends of the navbar */
.nav-Left,
.nav-Right {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vw;
  gap: 1vw;
}

/* Customisations for the icons on the right side of the navbar */
.nav-Right a {
  opacity: 1;
  transition: all 0.3s ease 0s;
}

.nav-Right a:hover {
  opacity: 0.75;
}

/* Switches the colour of the github and linkedIn logo (to black) depending if light mode on */
.external-Icons {
  filter: invert(75%);
}

@media (prefers-color-scheme: dark) {
  .nav-Right a {
    opacity: 0.5;
  }

  .nav-Right a:hover {
    opacity: 1;
  }
  /* Reverts logo colours to white if dark mode on */
  .external-Icons {
    filter: invert(0%);
  }
}

/* Customisations for the internal links in the center of the navbar */
.nav-Center {
  flex-grow: 1;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}

.nav-Center li {
  display: inline-block;
  margin: 0px 3vw;
}

.nav-Center li a {
  transition: all 0.3s ease 0s;
}

.nav-Center li a:hover {
  color: var(--color-text-hover);
}

.nav-Center .router-link-active {
  border-bottom: 2px solid var(--c-theme-bright);
  transition: border-bottom 300ms ease-in-out;
}
</style>
