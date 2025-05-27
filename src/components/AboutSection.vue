<template>
  <section id="about" class="section-padding section-bg-secondary">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <a-typography-title :level="2" class="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-slide-up">
          <UserOutlined class="mr-4" />
          Обо мне
        </a-typography-title>
        <p class="text-lg text-adaptive-secondary max-w-2xl mx-auto animate-slide-up animate-delay-200">
          Узнайте больше о моем пути в разработке и опыте
        </p>
      </div>

      <a-row :gutter="[32, 32]">
        <!-- Personal Info -->
        <a-col :xs="24" :lg="12">
          <a-card class="h-full card-hover animate-slide-in-left shadow-lg border-0" :body-style="{ padding: '32px' }">
            <!-- Avatar and Name -->
            <div class="flex items-center mb-6">
              <a-avatar :size="80" class="mr-4 border-4 border-blue-100 dark:border-blue-900" :src="avatar"
                alt="Никита Зуев">

              </a-avatar>
              <div>
                <h3 class="text-2xl font-bold text-adaptive mb-1">Никита Зуев</h3>
                <p class="text-blue-600 dark:text-blue-400 font-semibold text-lg">Frontend Developer</p>
                <div class="flex items-center mt-1">
                  <EnvironmentOutlined class="text-gray-400 dark:text-gray-500 mr-1" />
                  <span class="text-gray-500 dark:text-gray-400 text-sm">Плесецк, Россия</span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-adaptive-secondary mb-6 leading-relaxed text-base">
              Frontend разработчик с {{ experienceYears }}+ годами опыта.
              Специализируюсь на создании современных веб-приложений с использованием
              Vue.js, React и TypeScript. Люблю изучать новые технологии и применять
              лучшие практики разработки.
            </p>

            <!-- Contact Info -->
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-adaptive-secondary">
                <MailOutlined class="text-blue-500 dark:text-blue-400 mr-3 text-lg" />
                <a href="mailto:zuev499@gmail.com"
                  class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  zuev499@gmail.com
                </a>
              </div>
              <div class="flex items-center text-adaptive-secondary">
                <PhoneOutlined class="text-blue-500 dark:text-blue-400 mr-3 text-lg" />
                <a href="tel:+79216734503" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +7 (921) 673-45-03
                </a>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3">
              <a-button type="primary" @click="scrollToSection('contact')" class="flex-1">
                <template #icon>
                  <MailOutlined />
                </template>
                Связаться
              </a-button>
              <a-button href="https://github.com/JavelinSx" target="_blank" class="flex-1">
                <template #icon>
                  <GithubOutlined />
                </template>
                GitHub
              </a-button>
            </div>
          </a-card>
        </a-col>

        <!-- Statistics -->
        <a-col :xs="24" :lg="12">
          <a-card class="h-full card-hover animate-slide-in-right shadow-lg border-0" :body-style="{ padding: '32px' }">
            <h3 class="text-2xl font-bold text-adaptive mb-6">Статистика</h3>

            <a-row :gutter="[16, 24]">
              <a-col v-for="(stat, index) in stats" :key="stat.label" :xs="12" :sm="12" class="text-center">
                <div :class="`animate-bounce-in animate-delay-${(index + 1) * 200}`">
                  <div class="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-white text-2xl"
                    :style="{ background: stat.color }">
                    <component :is="stat.icon" />
                  </div>
                  <div class="text-3xl font-bold text-adaptive mb-1">{{ stat.value }}</div>
                  <div class="text-sm text-adaptive-secondary">{{ stat.label }}</div>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>

      <!-- Timeline -->
      <div class="mt-16 pl-2 pr-2">
        <h3 class="text-3xl font-bold text-adaptive mb-12 text-center animate-slide-up">
          Образование и опыт
        </h3>

        <div class="max-w-4xl mx-auto">
          <a-timeline :mode="isMobile ? 'left' : 'alternate'">
            <a-timeline-item v-for="(item, index) in timeline" :key="item.id"
              :class="`animate-slide-up animate-delay-${(index + 1) * 200}`">
              <template #dot>
                <div class="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl "
                  :class="item.color">
                  <component :is="item.icon" />
                </div>
              </template>

              <a-card class="ml-4 md:m-4 card-hover border-0 shadow-md">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 class="text-xl font-bold text-adaptive">{{ item.title }}</h4>
                    <p class="text-blue-600 dark:text-blue-400 font-semibold">{{ item.organization }}</p>
                  </div>
                  <a-tag color="blue" class="mt-2 md:mt-0">{{ item.period }}</a-tag>
                </div>

                <p class="text-adaptive-secondary mb-4">{{ item.description }}</p>

                <div v-if="item.achievements?.length" class="space-y-2">
                  <h5 class="font-semibold text-adaptive">Достижения:</h5>
                  <ul class="space-y-1">
                    <li v-for="achievement in item.achievements" :key="achievement"
                      class="flex items-start text-adaptive-secondary">
                      <CheckCircleOutlined class="text-green-500 dark:text-green-400 mr-2 mt-0.5 text-sm" />
                      <span class="text-sm">{{ achievement }}</span>
                    </li>
                  </ul>
                </div>
              </a-card>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>

      <!-- Interests and Languages -->
      <a-row :gutter="[32, 32]" class="mt-16">
        <!-- Interests -->
        <a-col :xs="24" :md="12">
          <a-card class="card-hover animate-slide-in-left animate-delay-1000 border-0 shadow-lg"
            :body-style="{ padding: '24px' }">
            <h4 class="text-xl font-bold text-adaptive mb-4 flex items-center">
              <HeartOutlined class="mr-2 text-red-500 dark:text-red-400" />
              Интересы
            </h4>
            <div class="flex flex-wrap gap-2">
              <a-tag v-for="interest in interests" :key="interest" color="blue"
                class="px-3 py-1 cursor-default hover:scale-105 transition-transform">
                {{ interest }}
              </a-tag>
            </div>
          </a-card>
        </a-col>

        <!-- Languages -->
        <a-col :xs="24" :md="12">
          <a-card class="card-hover animate-slide-in-right animate-delay-1000 border-0 shadow-lg"
            :body-style="{ padding: '24px' }">
            <h4 class="text-xl font-bold text-adaptive mb-4 flex items-center">
              <GlobalOutlined class="mr-2 text-blue-500 dark:text-blue-400" />
              Языки
            </h4>
            <div class="space-y-3">
              <div v-for="language in languages" :key="language.code" class="flex justify-between items-center">
                <span class="font-semibold text-adaptive">{{ language.name }}</span>
                <a-tag color="green">{{ language.level }}</a-tag>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import avatar from '@/assets/img/avatar.jpg'
import { ref } from 'vue'
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
  HeartOutlined,
  GlobalOutlined,
  CalendarOutlined,
  FolderOutlined,
  CodeOutlined,
  CoffeeOutlined,
  TrophyOutlined,
  BankOutlined,
  BookOutlined,
  GithubOutlined
} from '@ant-design/icons-vue'
import { useWindowSize, useBreakpoints, breakpointsTailwind } from '@vueuse/core'

// Breakpoints с Tailwind CSS
const breakpoints = useBreakpoints(breakpointsTailwind)

const isMobile = breakpoints.smaller('md') // < 768px

const experienceYears = ref(2)

const stats = [
  {
    label: 'Лет опыта',
    value: '2+',
    icon: CalendarOutlined,
    color: 'linear-gradient(45deg, #1890ff, #36cfc9)'
  },
  {
    label: 'Проектов',
    value: '12+',
    icon: FolderOutlined,
    color: 'linear-gradient(45deg, #52c41a, #73d13d)'
  },
  {
    label: 'Технологий',
    value: '20+',
    icon: CodeOutlined,
    color: 'linear-gradient(45deg, #faad14, #ffc53d)'
  },
  {
    label: 'Кофе выпито',
    value: '∞',
    icon: CoffeeOutlined,
    color: 'linear-gradient(45deg, #f5222d, #ff4d4f)'
  }
]

const timeline = [
  {
    id: 'freelance',
    title: 'Web-разработчик',
    organization: 'Фриланс',
    period: '2022 - настоящее время',
    description: 'Разработка Landing pages, SPA и Fullstack приложений для различных клиентов',
    icon: TrophyOutlined,
    color: 'bg-blue-600',
    achievements: [
      'Создал более 12 проектов различной сложности',
      'Освоил современные фреймворки и библиотеки',
      'Работал с различными технологическими стеками'
    ]
  },
  {
    id: 'yandex',
    title: 'Web-разработчик',
    organization: 'Яндекс Практикум',
    period: '2022 - 2023',
    description: 'Интенсивный курс по современной веб-разработке',
    icon: BookOutlined,
    color: 'bg-primary-600',
    achievements: [
      'Изучил современные подходы к разработке',
      'Работал над реальными проектами',
      'Получил практический опыт командной разработки'
    ]
  },
  {
    id: 'university',
    title: 'Прикладная информатика',
    organization: 'ВолГТУ',
    period: '2020 - 2021',
    description: 'Бакалавр по специальности "Прикладная информатика"',
    icon: BankOutlined,
    color: 'bg-amber-600'
  }
]

const interests = [
  'Веб-разработка', 'Open Source', 'Новые технологии',
  'Алгоритмы', 'UI/UX дизайн', 'Техническая литература'
]

const languages = [
  { name: 'Русский', level: 'Родной', code: 'ru' },
  { name: 'English', level: 'B1 — Средний', code: 'en' }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 64
    const targetPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = avatar
}
</script>

<style scoped>
.ant-timeline-item-content {
  min-height: auto;
}

.ant-timeline-head {
  background: none !important;
}

.ant-card {
  border-radius: 12px;
}

.ant-avatar img {
  object-fit: cover;
}
</style>
