<template>
  <section id="skills" class="section-padding section-bg-primary">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <a-typography-title :level="2" class="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-slide-up">
          <CodeOutlined class="mr-4" />
          Мои навыки
        </a-typography-title>
        <p class="text-lg text-adaptive-secondary max-w-2xl mx-auto animate-slide-up animate-delay-200">
          Технологии и инструменты, которыми я владею
        </p>
      </div>

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up animate-delay-400">
        <a-button v-for="(category, key) in skillCategories" :key="key"
          :type="activeCategory === key ? 'primary' : 'default'" size="large" @click="setActiveCategory(key)"
          class="flex items-center space-x-2 px-6 py-2 h-auto hover:scale-105 transition-all">
          <component :is="category.icon" />
          <span>{{ category.name }}</span>
        </a-button>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-6 mb-16">
        <div v-for="(skill, index) in filteredSkills" :key="skill.id"
          :class="`animate-slide-up animate-delay-${(index + 1) * 100}`">
          <a-card class="h-full card-hover border-0 shadow-lg" :body-style="{ padding: '14px' }">
            <!-- Skill Header -->
            <div class="flex flex-col items-center mb-4">
              <div class="flex justify-between w-full items-center mb-2">
                <div class="w-8 h-8 md:h-14 md:w-14 rounded-xl flex items-center justify-center mr-4 text-white text-xl"
                  :style="{ background: `linear-gradient(45deg, ${skill.color}, ${lightenColor(skill.color)})` }">
                  <component :is="getSkillIcon(skill.category)" />
                </div>
                <div class="flex-1">
                  <h3 class="text-base md:text-lg font-bold text-adaptive mb-1">{{ skill.name }}</h3>

                </div>
              </div>

              <p class="text-sm text-adaptive-secondary h-[40px]">{{ skill.description }}</p>
            </div>

            <!-- Progress Bar -->
            <div class="self-end">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-adaptive-secondary">Уровень</span>
                <span class="text-sm font-bold text-adaptive">{{ skill.level }}%</span>
              </div>
              <a-progress :percent="showProgress ? skill.level : 0" :stroke-color="skill.color"
                :trail-color="isDark ? '#374151' : '#f0f0f0'" :show-info="false" :stroke-width="8"
                class="skill-progress" />
            </div>

            <!-- Skill Details
            <div class="flex items-center justify-between text-sm text-adaptive-secondary mb-4">
              <div class="flex items-center">
                <CalendarOutlined class="mr-1" />
                <span>{{ skill.yearsOfExperience }}+ {{ getYearText(skill.yearsOfExperience) }}</span>
              </div>
              <div class="flex items-center">
                <FolderOutlined class="mr-1" />
                <span>{{ getProjectCount(skill) }} проектов</span>
              </div>
            </div>

            Project Tags
             <div v-if="getSkillProjects(skill).length > 0" class="flex flex-wrap gap-1">
              <a-tag v-for="project in getSkillProjects(skill).slice(0, 2)" :key="project" size="small" color="blue"
                class="text-xs">
                {{ getProjectName(project) }}
              </a-tag>
              <a-tag v-if="getSkillProjects(skill).length > 2" size="small" class="text-xs">
                +{{ getSkillProjects(skill).length - 2 }}
              </a-tag>
            </div> -->
          </a-card>
        </div>
      </div>

      <!-- Skills Statistics -->
      <div class="animate-slide-up animate-delay-1000">
        <h3 class="text-2xl font-bold text-adaptive mb-8 text-center">Статистика навыков</h3>

        <a-row :gutter="[24, 24]">
          <a-col v-for="(stat, index) in skillStats" :key="stat.label" :xs="12" :sm="6" class="text-center">
            <div :class="`animate-bounce-in animate-delay-${(index + 1) * 200 + 1000}`">
              <div
                class="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg"
                :style="{ background: stat.color }">
                <component :is="stat.icon" />
              </div>
              <div class="text-3xl font-bold text-adaptive mb-2">{{ stat.value }}</div>
              <div class="text-sm text-adaptive-secondary">{{ stat.label }}</div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, inject } from 'vue'
import {
  CodeOutlined,
  CalendarOutlined,
  FolderOutlined,
  MonitorOutlined,
  ApiOutlined,
  DatabaseOutlined,
  ToolOutlined,
  BgColorsOutlined
} from '@ant-design/icons-vue'
// Импорт данных из JSON файлов
import skillsData from '@/assets/data/skills.json'

const skills = ref(skillsData.skills)
const skillCategories = ref({
  all: { name: 'Все', icon: CodeOutlined },
  ...skillsData.skillCategories
})

const activeCategory = ref('all')
const showProgress = ref(false)
const isDark = inject('isDark', ref(false))

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') {
    return skills.value.sort((a, b) => b.level - a.level)
  }
  return skills.value
    .filter(skill => skill.category === activeCategory.value)
    .sort((a, b) => b.level - a.level)
})

const skillStats = computed(() => [
  {
    label: 'Технологий',
    value: skills.value.length,
    icon: CodeOutlined,
    color: 'linear-gradient(45deg, #1890ff, #36cfc9)'
  },
  {
    label: 'Категорий',
    value: Object.keys(skillCategories.value).length - 1,
    icon: ApiOutlined,
    color: 'linear-gradient(45deg, #52c41a, #73d13d)'
  },
  {
    label: 'Лет опыта',
    value: '3+',
    icon: CalendarOutlined,
    color: 'linear-gradient(45deg, #faad14, #ffc53d)'
  },
  {
    label: 'Проектов',
    value: '12+',
    icon: FolderOutlined,
    color: 'linear-gradient(45deg, #f5222d, #ff4d4f)'
  }
])

onMounted(() => {
  setTimeout(() => {
    showProgress.value = true
  }, 500)
})

const setActiveCategory = (category: string) => {
  activeCategory.value = category
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
  return skill.projects.length || 5
}

const getSkillProjects = (skill: any): string[] => {
  return skill.projects || []
}

const getProjectName = (projectId: string): string => {
  const projectNames: Record<string, string> = {
    'chess-nexus': 'Chess Nexus',
    'svk-hair': 'SVK Hair',
    'morty': 'Morty App',
    'gorodook': 'Gorodook',
    'sirius': 'Sirius',
    'medicine-system': 'Medicine System',
    'pizza-website': 'Pizza Website'
  }
  return projectNames[projectId] || projectId
}

const getSkillIcon = (category: string) => {
  const iconMap: Record<string, any> = {
    frontend: MonitorOutlined,
    frameworks: ApiOutlined,
    languages: CodeOutlined,
    backend: DatabaseOutlined,
    database: DatabaseOutlined,
    tools: ToolOutlined,
    design: BgColorsOutlined
  }
  return iconMap[category] || CodeOutlined
}

const lightenColor = (color: string): string => {
  const hex = color.replace('#', '')
  const num = parseInt(hex, 16)
  const amt = 44
  const R = (num >> 16) + amt
  const G = (num >> 8 & 0x00FF) + amt
  const B = (num & 0x0000FF) + amt
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)
}
</script>

<style scoped>
.skill-progress :deep(.ant-progress-bg) {
  border-radius: 4px;
  transition: width 1s ease-out;
}

.skill-progress :deep(.ant-progress-outer) {
  border-radius: 4px;
}

.ant-card {
  border-radius: 12px;
  transition: all 0.3s ease;
}

.ant-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.dark .ant-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.ant-progress {
  line-height: 1;
}
</style>
