<template>
  <v-app>
    <!-- Простой лоадер -->
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-hero animate-gradient z-50">
      <div class="text-center text-white max-w-xs w-full px-5">
        <v-icon icon="mdi-code-tags" size="48" color="white" class="mb-4" />
        <h2 class="text-xl font-medium mb-5">Загрузка...</h2>
        <v-progress-linear indeterminate color="white" class="mb-4" />
      </div>
    </div>

    <!-- Основное приложение -->
    <div v-else class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors-200">
      <AppHeader />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <AppFooter />

    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

const isLoading = ref(true)

// Простая инициализация
onMounted(async () => {
  // Эмуляция загрузки
  await new Promise(resolve => setTimeout(resolve, 1000))
  isLoading.value = false

})

</script>
