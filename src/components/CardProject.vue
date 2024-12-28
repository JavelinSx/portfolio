<template>
  <v-row dense>
    <v-col dense cols="12" sm="4" md="12">
      <v-card class="m-4 mb-0" :color="getRandomColor()">
        <v-card-item class="flex flex-row justify-center">
          <v-chip class="mr-2 mb-2" :variant="selectedProjectType === 'Личный проект' ? 'elevated' : 'tonal'"
            @click="toggleProjectTypeFilter('Личный проект')">
            Личные проекты
          </v-chip>
          <v-chip class="mr-2 mb-2" :variant="selectedProjectType === 'Коммерческий проект' ? 'elevated' : 'tonal'"
            @click="toggleProjectTypeFilter('Коммерческий проект')">
            Коммерческие проекты
          </v-chip>
          <v-chip class="mr-2 mb-2" :variant="selectedProjectType === 'Тестовый проект' ? 'elevated' : 'tonal'"
            @click="toggleProjectTypeFilter('Тестовый проект')">
            Тестовые проекты
          </v-chip>
        </v-card-item>

      </v-card>
    </v-col>
  </v-row>
  <!-- Filters -->
  <v-row dense v-if="selectedTechnologies.length">
    <v-col dense cols="12" sm="4" md="12">
      <v-card class="m-4">
        <v-card-item>
          <v-chip v-for="tech in selectedTechnologies" :key="tech.name" :color="tech.color" class="p-4 " closable
            @click:close="removeTechnologyFilter(tech)">
            <v-icon start>{{ tech.icon }}</v-icon>
            {{ tech.name }}
          </v-chip>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>

  <!-- Projects -->
  <v-row dense v-for="(project, index) in filteredProjects" :key="project.name" align-center justify-center
    justify-space-between :class="getMotionClass(index)" :style="`animation-delay: ${index * 150}ms`">
    <v-col dense cols="12" sm="4" md="12">
      <v-card class="m-4 mt-0 mb-0 flex flex-col md:flex-row" elevation="10" :color="getRandomColor()">
        <v-card-title class="motion-translate-x-in-[-100%] motion-translate-y-in-[0%]"
          :style="`animation-delay: 600ms`">{{ project.name }}</v-card-title>
        <v-card-subtitle class="motion-translate-x-in-[100%] motion-translate-y-in-[0%]"
          :style="`animation-delay: 600ms`">{{ project.type }}</v-card-subtitle>
        <v-card-text class="flex flex-col md:flex-row min-h-[300px]">

          <div class="flex gap-2 flex-wrap max-w-80 self-start">
            <p class="m-4 w-full motion-scale-in-[0.1] motion-opacity-in-[0%] motion-duration-[0.55s]/scale motion-delay-[0.20s]/scale"
              :style="`animation-delay: 600ms`">{{ project.description }}</p>
            <v-chip :class="`motion-preset-bounce`" :style="`animation-delay: ${index * 75 + 600}ms`"
              v-for="(tech, index) in project.technologies" :key="tech.name" :color="tech.color"
              @click="addTechnologyFilter(tech)" variant="elevated">
              <v-icon start>{{ tech.icon }}</v-icon>
              {{ tech.name }}
            </v-chip>
          </div>

          <divider-main orientation="horizontal" class="mt-3 mb-2 md:hidden" />
          <divider-main orientation="vertical" class="ml-2 mr-2 hidden md:block" />

          <div>
            <v-card v-for="link in projectLinks(project)" :key="link.title" v-bind="link" :color="getRandomColor()"
              class="m-2 motion-translate-x-in-[0%] motion-translate-y-in-[1000%]" :style="`animation-delay: 1000ms`"
              append-icon="mdi-open-in-new" prepend-icon="mdi-github" rel="noopener" target="_blank" />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import data from '../assets/data.json'
import DividerMain from './DividerMain.vue'

interface Tech {
  name: string
  color: string
  icon: string
}

interface Project {
  name: string
  type: string
  description: string
  technologies: Tech[]
  github: string
  live: string
}

const tailwindColors = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'amber',
  'orange',
  'deep-orange'
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * tailwindColors.length);
  return tailwindColors[randomIndex];
}

const originalProjects = ref<Project[]>(data.projects)
const selectedTechnologies = ref<Tech[]>([])
const selectedProjectType = ref<string | null>(null)

const filteredProjects = computed(() => {
  let filtered = originalProjects.value

  // Фильтрация по типу проекта
  if (selectedProjectType.value) {
    filtered = filtered.filter(project => project.type === selectedProjectType.value)
  }

  // Фильтрация по технологиям
  if (selectedTechnologies.value.length > 0) {
    filtered = filtered.filter((project) => {
      return selectedTechnologies.value.every((selectedTech) => {
        return project.technologies.some(
          (projectTech) => selectedTech.name === projectTech.name
        )
      })
    })
  }

  return filtered
})

const getMotionClass = (index: number) => [
  'motion-translate-y-in-[0%]',
  index % 2 === 0 ? 'motion-translate-x-in-[120%]' : 'motion-translate-x-in-[-120%]'
]

const toggleProjectTypeFilter = (type: string) => {
  selectedProjectType.value = selectedProjectType.value === type ? null : type
}

const projectLinks = (project: Project) => [
  {
    href: project.github,
    title: 'GitHub',
    subtitle: 'Репозиторий с исходниками'
  },
  {
    href: project.live,
    title: 'Production',
    subtitle: 'Прод. версия'
  }
]

const addTechnologyFilter = (tech: Tech) => {
  const exists = selectedTechnologies.value.some((t) => t.name === tech.name)
  if (!exists) {
    selectedTechnologies.value = [...selectedTechnologies.value, tech]
  }
}

const removeTechnologyFilter = (tech: Tech) => {
  selectedTechnologies.value = selectedTechnologies.value.filter(
    (t) => t.name !== tech.name
  )
}
</script>

<style lang="css" scoped></style>
