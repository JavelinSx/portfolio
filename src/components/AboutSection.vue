<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900 transition-colors-200">
    <v-container>
      <!-- Заголовок секции -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
          <v-icon icon="mdi-account" class="mr-3" />
          Обо мне
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Узнайте больше о моем пути в разработке
        </p>
      </div>

      <!-- Основной контент -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Личная информация -->
        <v-card class="p-6 h-full hover-lift transition-all-300 animate-fade-in-left">
          <div class="flex items-center mb-6">
            <v-avatar size="64" class="mr-4">
              <img src="@/assets/img/avatar.jpg" alt="Никита Зуев" @error="handleImageError" />
            </v-avatar>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-1">Никита Зуев</h3>
              <p class="text-blue-500 font-medium">Frontend Developer</p>
            </div>
          </div>

          <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Frontend разработчик с {{ experienceYears }}+ годами опыта.
            Специализируюсь на создании современных веб-приложений с использованием
            Vue.js, React и TypeScript. Люблю изучать новые технологии и применять
            лучшие практики разработки.
          </p>

          <!-- Контактная информация -->
          <div class="space-y-3 mb-6">
            <div class="flex items-center text-gray-600 dark:text-gray-400">
              <v-icon icon="mdi-map-marker" color="primary" class="mr-3" />
              <span>Плесецк, Россия</span>
            </div>
            <div class="flex items-center text-gray-600 dark:text-gray-400">
              <v-icon icon="mdi-email" color="primary" class="mr-3" />
              <a href="mailto:zuev499@gmail.com" class="hover:text-blue-500 transition-colors-200">zuev499@gmail.com</a>
            </div>
            <div class="flex items-center text-gray-600 dark:text-gray-400">
              <v-icon icon="mdi-phone" color="primary" class="mr-3" />
              <a href="tel:+79216734503" class="hover:text-blue-500 transition-colors-200">+7 (921) 673-45-03</a>
            </div>
          </div>

          <!-- Кнопки действий -->
          <div class="flex flex-col sm:flex-row gap-3">
            <v-btn variant="outlined" prepend-icon="mdi-email" class="hover-lift transition-all-300"
              @click="scrollToContact">
              Связаться
            </v-btn>
          </div>
        </v-card>

        <!-- Статистика -->
        <v-card class="p-6 h-full hover-lift transition-all-300 animate-fade-in-right">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Статистика</h3>

          <div class="grid grid-cols-2 gap-6">
            <div v-for="(stat, index) in stats" :key="stat.label" class="text-center animate-scale-in"
              :class="`delay-${(index + 1) * 200}`">
              <v-icon :icon="stat.icon" :color="stat.color" size="40" class="mb-3" />
              <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1">{{ stat.value }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </v-card>
      </div>

      <!-- Образование и опыт -->
      <div class="animate-fade-in-up delay-500">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Образование и опыт</h3>

        <div class="max-w-4xl mx-auto space-y-6">
          <div v-for="(item, index) in timeline" :key="item.id"
            class="flex flex-col md:flex-row gap-6 animate-fade-in-up" :class="`delay-${(index + 2) * 200}`">
            <!-- Иконка -->
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <v-icon :icon="item.icon" size="24" />
              </div>
            </div>

            <!-- Контент -->
            <v-card class="flex-1 p-6 hover-lift transition-all-300">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ item.title }}</h4>
                  <p class="text-blue-500 font-medium">{{ item.organization }}</p>
                </div>
                <span class="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1 md:mt-0">{{ item.period }}</span>
              </div>

              <p class="text-gray-700 dark:text-gray-300 mb-4">{{ item.description }}</p>

              <div v-if="item.achievements?.length" class="space-y-2">
                <h5 class="text-sm font-medium text-gray-900 dark:text-white">Достижения:</h5>
                <ul class="space-y-1">
                  <li v-for="achievement in item.achievements" :key="achievement"
                    class="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <v-icon icon="mdi-check-circle" size="16" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </v-card>
          </div>
        </div>
      </div>

      <!-- Интересы и языки -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <!-- Интересы -->
        <v-card class="p-6 hover-lift transition-all-300 animate-fade-in-left delay-1000">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <v-icon icon="mdi-heart" class="mr-2 text-red-500" />
            Интересы
          </h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="interest in interests" :key="interest"
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover-scale transition-all-300 cursor-default">
              {{ interest }}
            </span>
          </div>
        </v-card>

        <!-- Языки -->
        <v-card class="p-6 hover-lift transition-all-300 animate-fade-in-right delay-1000">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <v-icon icon="mdi-translate" class="mr-2 text-blue-500" />
            Языки
          </h4>
          <div class="space-y-3">
            <div v-for="language in languages" :key="language.code" class="flex justify-between items-center">
              <span class="font-medium text-gray-900 dark:text-white">{{ language.name }}</span>
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ language.level }}</span>
            </div>
          </div>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const experienceYears = 2

const stats = [
  { label: 'Лет опыта', value: '2+', icon: 'mdi-calendar-clock', color: 'primary' },
  { label: 'Проектов', value: '12+', icon: 'mdi-folder-multiple', color: 'success' },
  { label: 'Технологий', value: '20+', icon: 'mdi-code-tags', color: 'warning' },
  { label: 'Кофе выпито', value: '∞', icon: 'mdi-coffee', color: 'error' }
]

const timeline = [
  {
    id: 'freelance',
    title: 'Web-разработчик',
    organization: 'Фриланс',
    period: '2022 - настоящее время',
    description: 'Разработка Landing pages, SPA и Fullstack приложений для различных клиентов',
    icon: 'mdi-briefcase',
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
    icon: 'mdi-school',
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
    icon: 'mdi-school'
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

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '@/assets/img/avatar.jpg'
}
</script>
