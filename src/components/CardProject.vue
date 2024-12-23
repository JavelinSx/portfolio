<template>
  <v-row align-center justify-center justify-space-between v-for="project in projects" :key="project.name">
    <v-col cols="12" sm="4" md="6">
      <v-card class="m-4 flex flex-col md:flex-row" :title="project.name" :subtitle="project.type" elevation="10">
        <v-card-text class="flex flex-col md:flex-row">

          <div class="flex gap-2 flex-wrap max-w-80">
            <p class="m-4 w-full">{{ project.description }}</p>
            <v-chip v-for="tech in project.technologies" :key="tech.name" :color="tech.color">
              <v-icon start>{{ tech.icon }}</v-icon>
              {{ tech.name }}
            </v-chip>
          </div>
          <v-divider class="mt-3 mb-2"></v-divider>
          <div class="w-full w-80">
            <v-card append-icon="mdi-open-in-new" class="m-2" :href="project.github" prepend-icon="mdi-github"
              rel="noopener" subtitle="Репозиторий с исходниками" target="_blank" title="GitHub"></v-card>
            <v-card append-icon="mdi-open-in-new" class="m-2" :href="project.live" prepend-icon="mdi-github"
              rel="noopener" subtitle="Прод. версия" target="_blank" title="Production"></v-card>
          </div>
        </v-card-text>


      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import data from '../assets/data.json'
const projects = data.projects
const skills = data.skills
</script>
