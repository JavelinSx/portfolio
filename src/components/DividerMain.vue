<template>
  <div class="w-full opacity-10 bg-slate-800"
    :class="props.orientation === 'vertical' ? ['self-stretch w-[1px]'] : ['w-full h-[1px]']">
  </div>
</template>
<script setup lang="ts">
const props = defineProps(
  {
    orientation: String,
  }
)
</script>
