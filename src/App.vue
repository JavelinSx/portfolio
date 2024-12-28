<script setup lang="ts">
import CardProject from './components/CardProject.vue';
import { onMounted, ref } from 'vue'

interface RGB {
  r: number;
  g: number;
  b: number;
}

// Преобразуем цвета в RGB формат
const colors: RGB[] = [
  { r: 253, g: 237, b: 236 }, // Light red
  { r: 252, g: 228, b: 236 }, // Light pink
  { r: 243, g: 229, b: 245 }, // Light purple
  { r: 232, g: 234, b: 246 }, // Light indigo
  { r: 227, g: 242, b: 253 }, // Light blue
  { r: 224, g: 247, b: 250 }, // Light cyan
  { r: 224, g: 242, b: 241 }, // Light teal
  { r: 232, g: 245, b: 233 }, // Light green
  { r: 255, g: 243, b: 224 }, // Light amber
  { r: 255, g: 224, b: 178 }  // Light orange
];

const currentGradient = ref('')
const currentColors = ref<RGB[]>([])
const targetColors = ref<RGB[]>([])

const getRandomColor = (): RGB => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const interpolateColor = (start: RGB, end: RGB, progress: number): RGB => {
  return {
    r: Math.round(start.r + (end.r - start.r) * progress),
    g: Math.round(start.g + (end.g - start.g) * progress),
    b: Math.round(start.b + (end.b - start.b) * progress)
  }
}

const rgbToString = (color: RGB) => `rgb(${color.r}, ${color.g}, ${color.b})`

const updateGradient = (progress: number) => {
  const interpolatedColors = currentColors.value.map((current, index) => {
    return interpolateColor(current, targetColors.value[index], progress)
  })

  currentGradient.value = `linear-gradient(
    -45deg,
    ${rgbToString(interpolatedColors[0])} 0%,
    ${rgbToString(interpolatedColors[1])} 50%,
    ${rgbToString(interpolatedColors[2])} 100%
  )`
}

const startNewTransition = () => {
  currentColors.value = [...targetColors.value]
  targetColors.value = [getRandomColor(), getRandomColor(), getRandomColor()]
}

onMounted(() => {
  // Инициализация начальных и целевых цветов
  currentColors.value = [getRandomColor(), getRandomColor(), getRandomColor()]
  targetColors.value = [getRandomColor(), getRandomColor(), getRandomColor()]

  // Анимация
  let startTime: number | null = null
  const duration = 8000 // 8 секунд на переход

  const animate = (currentTime: number) => {
    if (!startTime) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    updateGradient(progress)

    if (progress >= 1) {
      startTime = currentTime
      startNewTransition()
    }

    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
})
</script>

<template>
  <div class="gradient-container" :style="{ background: currentGradient }">
    <header></header>
    <CardProject />
  </div>
</template>

<style>
.gradient-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-size: 200% 200%;
  animation: gradientPosition 8s ease infinite;
}

@keyframes gradientPosition {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

body {
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
