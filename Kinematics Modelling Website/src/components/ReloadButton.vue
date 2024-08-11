<!-- MyButton.vue -->
<template>
  <br />
  <div><button @click="reloadPage">Reset parameters</button></div>
  <br />
</template>

<script>
export default {
  methods: {
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
