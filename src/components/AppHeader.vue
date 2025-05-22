<template>
  <v-app-bar :class="{ 'shadow-lg': isScrolled }"
    class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg transition-all-300" fixed app>
    <v-container>
      <div class="flex items-center justify-between w-full">
        <!-- Лого -->
        <div class="flex items-center cursor-pointer hover-scale transition-all-300" @click="scrollTo('hero')">
          <v-icon icon="mdi-code-tags" color="primary" class="mr-2" />
          <span class="text-xl font-semibold text-gray-900 dark:text-white font-['Poppins']">Портфолио</span>
        </div>

        <!-- Навигация на десктопе -->
        <div class="hidden md:flex items-center space-x-2">
          <v-btn v-for="item in navItems" :key="item.id"
            :class="{ 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400': activeSection === item.id }"
            variant="text" class="transition-colors-200" @click="scrollTo(item.id)">
            {{ item.label }}
          </v-btn>
        </div>

        <!-- Переключатель темы и мобильное меню -->
        <div class="flex items-center space-x-2">
          <v-btn icon variant="text" class="transition-all-300 hover-scale" @click="toggleTheme">
            <v-icon :icon="themeIcon" />
          </v-btn>

          <!-- Мобильное меню -->
          <v-menu v-model="mobileMenu" location="bottom">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="mdi-menu" variant="text" class="md:hidden transition-all-300 hover-scale" />
            </template>

            <v-list class="bg-white dark:bg-gray-800 shadow-xl rounded-lg">
              <v-list-item v-for="item in navItems" :key="item.id" class="transition-colors-200"
                @click="scrollTo(item.id)">
                <v-list-item-title>{{ item.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const isScrolled = ref(false)
const activeSection = ref('hero')
const mobileMenu = ref(false)
const isDark = ref(false)

const navItems = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'Обо мне' },
  { id: 'projects', label: 'Проекты' },
  { id: 'contact', label: 'Контакты' }
]

const themeIcon = computed(() =>
  isDark.value ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'
)

onMounted(() => {
  // Отслеживание скролла
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
    updateActiveSection()
  })

  // Проверяем тему
  isDark.value = document.documentElement.classList.contains('dark')
})

const scrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenu.value = false
}

const updateActiveSection = () => {
  for (const item of navItems) {
    const element = document.getElementById(item.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = item.id
        break
      }
    }
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.header-scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.2rem;
}

.nav-links {
  gap: 8px;
}

.nav-active {
  background-color: rgba(var(--v-theme-primary), 0.1) !important;
  color: rgb(var(--v-theme-primary)) !important;
}

.logo-text {
  font-family: 'Poppins', sans-serif;
}
</style>
