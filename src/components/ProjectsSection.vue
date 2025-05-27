<template>
  <section id="projects" class="section-padding " :class="isDark ? 'bg-slate-600' : 'bg-gray-50'">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <a-typography-title :level="2" class="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-slide-up">
          <FolderOpenOutlined class="mr-4" />
          Мои проекты
        </a-typography-title>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
          Портфолио выполненных работ и интересных проектов
        </p>
      </div>

      <!-- Project Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up animate-delay-400">
        <a-button v-for="filter in filters" :key="filter" :type="activeFilter === filter ? 'primary' : 'default'"
          size="large" @click="setFilter(filter)" class="px-6 py-2 h-auto hover:scale-105 transition-all">
          {{ filter }}
        </a-button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="(project, index) in filteredProjects" :key="project.id"
          :class="`animate-slide-up animate-delay-${(index + 1) * 100}`">
          <a-card class="h-full border-0 shadow-lg overflow-hidden hover:shadow-cyan-500"
            :body-style="{ padding: '0' }">
            <!-- Project Image -->
            <div class="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
              <img v-if="project.image" :src="project.image" :alt="project.name"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                @error="handleImageError" />
              <div v-else class="w-full h-full flex items-center justify-center text-white">
                <FileImageOutlined class="text-6xl opacity-50" />
              </div>

              <!-- Status Badge -->
              <div class="absolute top-3 right-3">
                <a-tag :color="getStatusColor(project.status)" class="font-semibold">
                  {{ getStatusText(project.status) }}
                </a-tag>
              </div>

              <!-- Featured Badge -->
              <div v-if="project.featured" class="absolute top-3 left-3">
                <a-tag color="gold" class="font-semibold">
                  <StarOutlined class="mr-1" />
                  Рекомендуемый
                </a-tag>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <!-- Title and Description -->
              <h3 class="text-xl font-bold  mb-2" :class="isDark ? 'text-gray-200' : 'text-gray-800'">{{ project.name }}
              </h3>
              <p class=" mb-4 line-clamp-3 text-sm leading-relaxed" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
                {{ project.shortDescription }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-1 mb-4">
                <a-tag v-for="tech in project.technologies.slice(0, 3)" :key="tech.name" size="small"
                  :color="getTechColor(tech.name)" class="text-xs">
                  {{ tech.name }}
                </a-tag>
                <a-tag v-if="project.technologies.length > 3" size="small" class="text-xs">
                  +{{ project.technologies.length - 3 }}
                </a-tag>
              </div>

              <!-- Project Links -->
              <div class="flex gap-2">
                <a-button v-if="project.demoUrl" :href="project.demoUrl" target="_blank" type="primary" size="small"
                  class="flex-1">
                  <template #icon>
                    <EyeOutlined />
                  </template>
                  Demo
                </a-button>

                <a-button v-if="project.githubUrl" :href="project.githubUrl" target="_blank" size="small"
                  class="flex-1">
                  <template #icon>
                    <GithubOutlined />
                  </template>
                  Code
                </a-button>

                <!-- Project Details Modal Trigger -->
                <a-button size="small" @click="showProjectDetails(project)" class="flex-1">
                  <template #icon>
                    <InfoCircleOutlined />
                  </template>
                  Детали
                </a-button>
              </div>
            </div>
          </a-card>
        </div>
      </div>

      <!-- More Projects CTA -->
      <div class="text-center animate-slide-up animate-delay-1000">
        <p class="mb-4 text-lg" :class="isDark ? 'text-gray-50' : 'text-gray-700'">
          Хотите увидеть больше проектов?
        </p>
        <a-button href="https://github.com/JavelinSx" target="_blank" type="primary" size="large"
          class="px-8 py-3 h-auto text-lg font-semibold hover:scale-105 transition-all">
          <template #icon>
            <GithubOutlined />
          </template>
          Посетить GitHub
        </a-button>
      </div>
    </div>

    <!-- Project Details Modal -->
    <a-modal v-model:open="modalVisible" :title="selectedProject?.name" width="800px" :footer="null"
      class="project-modal">
      <div v-if="selectedProject" class="space-y-6">
        <!-- Project Image -->
        <div v-if="selectedProject.image" class="w-full h-64 rounded-lg overflow-hidden">
          <img :src="selectedProject.image" :alt="selectedProject.name" class="w-full h-full object-cover" />
        </div>

        <!-- Description -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Описание проекта</h4>
          <p class="text-gray-600 leading-relaxed">{{ selectedProject.description }}</p>
        </div>

        <!-- Technologies -->
        <div>
          <h4 class="text-lg font-semibold mb-3">Технологии</h4>
          <div class="flex flex-wrap gap-2">
            <a-tag v-for="tech in selectedProject.technologies" :key="tech.name" :color="getTechColor(tech.name)"
              class="px-3 py-1">
              {{ tech.name }}
            </a-tag>
          </div>
        </div>

        <!-- Project Info -->
        <div>
          <h4 class="text-lg font-semibold mb-3">Информация о проекте</h4>
          <a-row :gutter="[16, 8]">
            <a-col :span="12">
              <div class="flex items-center">
                <CalendarOutlined class="mr-2 text-gray-400" />
                <span class="text-sm">
                  {{ selectedProject.startDate }} - {{ selectedProject.endDate || 'настоящее время' }}
                </span>
              </div>
            </a-col>
            <a-col :span="12">
              <div class="flex items-center">
                <TagOutlined class="mr-2 text-gray-400" />
                <span class="text-sm">{{ selectedProject.type }}</span>
              </div>
            </a-col>
          </a-row>
        </div>

        <!-- Links -->
        <div class="flex gap-3 pt-4 border-t">
          <a-button v-if="selectedProject.demoUrl" :href="selectedProject.demoUrl" target="_blank" type="primary"
            size="large">
            <template #icon>
              <EyeOutlined />
            </template>
            Посмотреть Demo
          </a-button>

          <a-button v-if="selectedProject.githubUrl" :href="selectedProject.githubUrl" target="_blank" size="large">
            <template #icon>
              <GithubOutlined />
            </template>
            Исходный код
          </a-button>
        </div>
      </div>
    </a-modal>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import {
  FolderOpenOutlined,
  EyeOutlined,
  GithubOutlined,
  InfoCircleOutlined,
  StarOutlined,
  FileImageOutlined,
  CalendarOutlined,
  TagOutlined
} from '@ant-design/icons-vue'
// Импорт данных из JSON
import projectsData from '@/assets/data/projects.json'

// Используем данные из JSON вместо hardcoded
const projects = ref(projectsData.projects)

const activeFilter = ref('Все')
const modalVisible = ref(false)
const selectedProject = ref<Project | null>(null)
const isDark = inject('isDark', ref(false))
const filters = ['Все', 'Коммерческий проект', 'Личный проект', 'Тестовый проект']

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Все') {
    return projects.value
  }
  return projects.value.filter(project => project.type === activeFilter.value)
})

const setFilter = (filter: string) => {
  activeFilter.value = filter
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'green'
    case 'in_progress': return 'blue'
    case 'maintenance': return 'orange'
    case 'archived': return 'red'
    default: return 'default'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed': return 'Завершен'
    case 'in_progress': return 'В разработке'
    case 'maintenance': return 'Поддержка'
    case 'archived': return 'Архив'
    default: return status
  }
}

const getTechColor = (techName: string) => {
  const colorMap: Record<string, string> = {
    'Vue 3': 'green',
    'React': 'cyan',
    'TypeScript': 'blue',
    'JavaScript': 'gold',
    'Nuxt 3': 'green',
    'Next.js': 'default',
    'Three.js': 'purple',
    'GraphQL': 'magenta',
    'MongoDB': 'green',
    'CSS3': 'blue',
    'Vuetify': 'blue',
    'Pinia': 'orange',
    'jQuery': 'blue',
    'Webpack': 'cyan'
  }
  return colorMap[techName] || 'default'
}

const showProjectDetails = (project: Project) => {
  selectedProject.value = project
  modalVisible.value = true
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ant-card {
  border-radius: 12px;
}

.project-modal :deep(.ant-modal-content) {
  border-radius: 12px;
}

.project-modal :deep(.ant-modal-header) {
  border-radius: 12px 12px 0 0;
}
</style>
