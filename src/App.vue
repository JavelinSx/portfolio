<script setup lang="ts">
import CardProject from './components/CardProject.vue';
</script>

<template>

  <CardProject />

</template>

<style>
@keyframes gradientShift {
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
  background: linear-gradient(45deg,
      #FCA5A5,
      /* rose-300 */
      #F472B6,
      /* pink-400 */
      #C084FC,
      /* purple-400 */
      #818CF8,
      /* indigo-400 */
      #60A5FA,
      /* blue-400 */
      #FCA5A5
      /* rose-300 снова для плавного перехода */
    );
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
}
</style>
