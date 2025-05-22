<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors-200">
    <v-container>
      <!-- Заголовок секции -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
          <v-icon icon="mdi-code-tags" class="mr-3" />
          Мои навыки
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Технологии и инструменты, которыми я владею
        </p>
      </div>

      <!-- Фильтры категорий -->
      <div class="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up delay-200">
        <v-chip
          v-for="(category, key) in skillCategories"
          :key="key"
          :color="activeCategory === key ? 'primary' : 'default'"
          :variant="activeCategory === key ? 'flat' : 'outlined'"
          clickable
          class="hover-scale transition-all-300"
          @click="setActiveCategory(key)"
        >
          <v-icon :icon="category.icon" size="16" class="mr-1" />
          {{ category.name }}
        </v-chip>
      </div>

      <!-- Навыки -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(skill, index) in filteredSkills"
          :key="skill.id"
          class="animate-scale-in"
          :class="`delay-${(index + 1) * 100}`"
        >
          <v-card class="p-6 h-full hover-lift transition-all-300 bg-white dark:bg-gray-700">
            <!-- Иконка и название -->
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                :style="{ backgroundColor: skill.color + '20' }"
              >
                <v-icon :icon="skill.icon" :color="skill.color" size="28" />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {{ skill.name }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ skill.description }}
                </p>
              </div>
            </div>

            <!-- Уровень навыка -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Уровень
                </span>
                <span class="text-sm font-bold text-gray-900 dark:text-white">
                  {{ skill.level }}%
                </span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out"
                  :style="{
                    width: showProgress ? skill.level + '%' : '0%',
                    backgroundColor: skill.color
                  }"
                />
              </div>
            </div>

            <!-- Опыт -->
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center text-gray-600 dark:text-gray-400">
                <v-icon icon="mdi-calendar" size="16" class="mr-1" />
                <span>{{ skill.yearsOfExperience }}+ {{ getYearText(skill.yearsOfExperience) }}</span>
              </div>
              <div class="flex items-center text-gray-600 dark:text-gray-400">
                <v-icon icon="mdi-folder-multiple" size="16" class="mr-1" />
                <span>{{ getProjectCount(skill) }} проектов</span>
              </div>
            </div>

            <!-- Проекты (если есть) -->
            <div v-if="getSkillProjects(skill).length > 0" class="mt-4">
              <div class="flex flex-wrap gap-1">
                <v-chip
                  v-for="project in getSkillProjects(skill).slice(0, 2)"
                  :key="project"
                  size="x-small"
                  variant="outlined"
                  class="text-xs"
                >
                  {{ getProjectName(project) }}
                </v-chip>
                <span
                  v-if="getSkillProjects(skill).length > 2"
                  class="text-xs text-gray-500 dark:text-gray-400 px-2 py-1"
                >
                  +{{ getSkillProjects(skill).length - 2 }}
                </span>
              </div>
            </div>
          </v-card>
        </div>
      </div>

      <!-- Статистика -->
      <div class="mt-16 animate-fade-in-up delay-1000">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="(stat, index) in skillStats"
            :key="stat.label"
            class="text-center animate-scale-in"
            :class="`delay-${(index + 1) * 200 + 1000}`"
          >
            <div
              class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
              :style="{ backgroundColor: stat.color + '20' }"
            >
              <v-icon :icon="stat.icon" :color="stat.color" size="32" />
            </div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {{ stat.value }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useSkills } from '@/composables/useSkills'
import { useProjects } from '@/composables/useProjects'

const {
  skills,
  skillCategories,
  getSkillsByCategory,
  getAllSkills
} = useSkills()

const { projects } = useProjects()

const activeCategory = ref('all')
const showProgress = ref(false)

// Отфильтрованные навыки
const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') {
    return getAllSkills()
  }
  return getSkillsByCategory(activeCategory.value)
})

// Статистика навыков
const skillStats = computed(() => [
  {
    label: 'Технологий',
    value: skills.value.length,
    icon: 'mdi-code-tags',
    color: '#3b82f6'
  },
  {
    label: 'Категорий',
    value: Object.keys(skillCategories.value).length,
    icon: 'mdi-view-grid',
    color: '#10b981'
  },
  {
    label: 'Лет опыта',
    value: '3+',
    icon: 'mdi-calendar-clock',
    color: '#f59e0b'
  },
  {
    label: 'Проектов',
    value: '12+',
    icon: 'mdi-folder-multiple',
    color: '#ef4444'
  }
])

onMounted(() => {
  // Запускаем анимацию прогресс-баров с задержкой
  setTimeout(() => {
    showProgress.value = true
  }, 500)
})

const setActiveCategory = (category: string) => {
  activeCategory.value = category
  // Перезапускаем анимацию прогресс-баров
  showProgress.value = false
  setTimeout(() => {
    showProgress.value = true
  }, 100)
}

const getYearText = (years: number): string => {
  if (years === 1) return 'год'
  if (years >= 2 && years <= 4) return 'года'
  return 'лет'
}

const getProjectCount = (skill: any): number => {
  if (!skill.projects) return 0
  if (skill.projects.includes('all-projects')) return projects.value.length
  if (skill.projects.includes('most-projects')) return Math.floor(projects.value.length * 0.8)
  return skill.projects.length
}

const getSkillProjects = (skill: any): string[] => {
  if (!skill.projects) return []
  return skill.projects.filter((p: string) =>
    !['all-projects', 'most-projects', 'design-work'].includes(p)
  )
}

const getProjectName = (projectId: string): string => {
  const project = projects.value.find(p => p.id === projectId)
  return project?.name || projectId
}
</script>
