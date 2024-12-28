<template>
  <div class="opacity-80 bg-slate-100"
    :class="props.orientation === 'vertical' ? ['self-stretch w-[1px] '] : ['w-full h-[1px]']">
  </div>
</template>
<script setup lang="ts">
const props = defineProps(
  {
    orientation: String,
  }
)
</script>
