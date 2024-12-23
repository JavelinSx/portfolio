<template>
  <!-- Filters -->
  <v-row v-if="selectedTechnologies.length">
    <v-col cols="12" sm="4" md="6">
      <v-card class="m-4" title="Фильтр по технологиям">
        <v-card-item>
          <v-chip v-for="tech in selectedTechnologies" :key="tech.name" :color="tech.color" class="p-4" closable
            @click:close="removeTechnologyFilter(tech)">
            <v-icon start>{{ tech.icon }}</v-icon>
            {{ tech.name }}
          </v-chip>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>

  <!-- Projects -->
  <v-row v-for="project in filteredProjects" :key="project.name" align-center justify-center justify-space-between>
    <v-col cols="12" sm="4" md="6">
      <v-card class="m-4 flex flex-col md:flex-row" :title="project.name" :subtitle="project.type" elevation="10">
        <v-card-text class="flex flex-col md:flex-row min-h-[300px]">

          <div class="flex gap-2 flex-wrap max-w-80 self-start">
            <p class="m-4 w-full">{{ project.description }}</p>
            <v-chip v-for="tech in project.technologies" :key="tech.name" :color="tech.color"
              @click="addTechnologyFilter(tech)">
              <v-icon start>{{ tech.icon }}</v-icon>
              {{ tech.name }}
            </v-chip>
          </div>

          <divider-main orientation="horizontal" class="mt-3 mb-2 md:hidden" />
          <divider-main orientation="vertical" class="ml-2 mr-2 hidden md:block" />

          <div class="w-80">
            <v-card v-for="link in projectLinks(project)" :key="link.title" v-bind="link" class="m-2"
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

const originalProjects = ref<Project[]>(data.projects)
const selectedTechnologies = ref<Tech[]>([])

const filteredProjects = computed(() => {
  if (selectedTechnologies.value.length === 0) {
    return originalProjects.value
  }

  return originalProjects.value.filter((project) => {
    return project.technologies.some((projectTech) => {
      return selectedTechnologies.value.some(
        (selectedTech) => selectedTech.name === projectTech.name
      )
    })
  })
})

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
