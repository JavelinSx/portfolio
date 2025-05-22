<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-900 transition-colors-200">
    <v-container>
      <!-- Заголовок секции -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
          <v-icon icon="mdi-folder-multiple" class="mr-3" />
          Мои проекты
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Портфолио выполненных работ
        </p>
      </div>

      <!-- Фильтры -->
      <div class="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up delay-200">
        <v-chip v-for="filter in filters" :key="filter" :color="activeFilter === filter ? 'primary' : 'default'"
          :variant="activeFilter === filter ? 'flat' : 'outlined'" clickable class="hover-scale transition-all-300"
          @click="setFilter(filter)">
          {{ filter }}
        </v-chip>
      </div>

      <!-- Проекты -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <v-card v-for="(project, index) in filteredProjects" :key="project.id"
          class="overflow-hidden hover-lift transition-all-300 animate-scale-in" :class="`delay-${(index + 1) * 100}`">
          <!-- Изображение проекта -->
          <div class="relative overflow-hidden h-48 bg-gradient-to-r from-blue-500 to-purple-500">
            <img v-if="getProjectImage(project)" :src="getProjectImage(project)" :alt="project.name"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              @error="handleImageError" />
            <div v-else class="w-full h-full flex items-center justify-center text-white">
              <v-icon icon="mdi-image" size="48" />
            </div>

            <!-- Статус -->
            <div class="absolute top-3 right-3">
              <v-chip :color="getStatusColor(project.status)" size="small" variant="flat">
                {{ getStatusText(project.status) }}
              </v-chip>
            </div>
          </div>

          <v-card-text class="p-6">
            <!-- Заголовок и описание -->
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {{ project.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {{ project.shortDescription }}
            </p>

            <!-- Технологии -->
            <div class="flex flex-wrap gap-1 mb-4">
              <v-chip v-for="tech in project.technologies.slice(0, 3)" :key="tech.name" size="x-small"
                variant="outlined" class="text-xs">
                {{ tech.name }}
              </v-chip>
              <span v-if="project.technologies.length > 3" class="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <!-- Ссылки -->
            <div class="flex gap-2">
              <v-btn v-if="getProjectDemo(project)" :href="getProjectDemo(project)" color="primary" size="small"
                prepend-icon="mdi-open-in-new" target="_blank" class="hover-scale transition-all-300">
                Demo
              </v-btn>
              <v-btn v-if="getProjectGithub(project)" :href="getProjectGithub(project)" variant="outlined" size="small"
                prepend-icon="mdi-github" target="_blank" class="hover-scale transition-all-300">
                Code
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <!-- Больше проектов -->
      <div class="text-center mt-12 animate-fade-in-up delay-1000">
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Хотите увидеть больше проектов?
        </p>
        <v-btn href="https://github.com/JavelinSx" color="primary" size="large" prepend-icon="mdi-github"
          target="_blank" class="hover-lift transition-all-300">
          Посетить GitHub
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProjects } from '@/composables/useProjects'

const {

  getProjectsByType,
  getProjectImage,
  getProjectDemo,
  getProjectGithub,
  getStatusColor,
  getStatusText
} = useProjects()

const activeFilter = ref('Все')

const filters = ['Все', 'Коммерческий проект', 'Личный проект', 'Тестовый проект']

const filteredProjects = computed(() => {
  return getProjectsByType(activeFilter.value)
})

const setFilter = (filter: string) => {
  activeFilter.value = filter
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>
