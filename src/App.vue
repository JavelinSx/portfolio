<template>
  <div id="app" :class="isDark ? 'dark' : ''">
    <a-config-provider :theme="themeConfig">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, provide, watch } from 'vue'
import { theme } from 'ant-design-vue'

const isDark = ref(false)

// Конфигурация темы
const themeConfig = computed(() => ({
  token: {
    colorPrimary: '#3b82f6',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#3b82f6',
    borderRadius: 8,
    fontFamily: 'Inter, system-ui, sans-serif',
    // Настройки для темной темы
    ...(isDark.value && {
      colorBgContainer: '#1f2937',
      colorBgElevated: '#374151',
      colorBgLayout: '#111827',
      colorText: '#f9fafb',
      colorTextSecondary: '#d1d5db',
      colorBorder: '#4b5563',
      colorSplit: '#374151'
    })
  },
  algorithm: isDark.value ? theme.darkAlgorithm : theme.defaultAlgorithm
}))

// Проверка системной темы
const checkSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Загрузка сохраненной темы
const loadTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = checkSystemTheme()
  }
  applyTheme()
}

// Применение темы к документу
const applyTheme = () => {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
  } else {
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
  }
}

// Переключение темы
const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

// Отслеживание изменений темы
watch(isDark, applyTheme)

onMounted(() => {
  loadTheme()

  // Отслеживание изменений системной темы
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
    }
  })
})

// Предоставляем состояние темы дочерним компонентам
provide('isDark', isDark)
provide('toggleTheme', toggleTheme)
</script>

<style>
#app {
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Темная тема для корневого элемента */
#app.dark {
  background-color: #111827;
  color: #f9fafb;
}

/* Переопределения для Ant Design в темной теме */
.dark .ant-layout {
  background: #111827;
}

.dark .ant-layout-content {
  background: #111827;
}

.dark .ant-card {
  background: #1f2937;
  border-color: #374151;
}

.dark .ant-card-body {
  color: #f9fafb;
}

.dark .ant-typography {
  color: #f9fafb;
}

.dark .ant-drawer-content {
  background: #1f2937;
}

.dark .ant-drawer-header {
  background: #1f2937;
  border-bottom-color: #374151;
}

.dark .ant-drawer-title {
  color: #f9fafb;
}

.dark .ant-divider {
  border-color: #374151;
}

/* Кастомные CSS переменные для темы */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
}

.dark {
  --bg-primary: #1f2937;
  --bg-secondary: #111827;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --border-color: #374151;
}
</style>
