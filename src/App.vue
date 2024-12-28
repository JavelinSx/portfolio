<script setup lang="ts">
import CardProject from './components/CardProject.vue';
import { onMounted } from 'vue'

const colors = [
  '#FDEDEC', // Light red
  '#FCE4EC', // Light pink
  '#F3E5F5', // Light purple
  '#E8EAF6', // Light indigo
  '#E3F2FD', // Light blue
  '#E0F7FA', // Light cyan
  '#E0F2F1', // Light teal
  '#E8F5E9', // Light green
  '#FFF3E0', // Light amber
  '#FFE0B2'  // Light orange
];

onMounted(() => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  document.body.style.backgroundColor = randomColor
})

</script>

<template>
  <header>

  </header>
  <CardProject />

</template>
