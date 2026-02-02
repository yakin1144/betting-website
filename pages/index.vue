<template>
  <div>
    <div v-html="siteContent"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const siteContent = ref('')

onMounted(() => {
  // Fetch and display the original betting site
  fetch('/original-betting-site.html')
    .then(response => response.text())
    .then(html => {
      siteContent.value = html
    })
    .catch(error => {
      console.error('Error loading betting site:', error)
      siteContent.value = '<h1>Betting Site Loading...</h1>'
    })
})
</script>

<style>
/* Styles will be loaded from the original site */
</style>
