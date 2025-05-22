import { ref, computed, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
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

  // Применение темы
  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Переключение темы
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  // Установка конкретной темы
  const setTheme = (theme: 'light' | 'dark') => {
    isDark.value = theme === 'dark'
    localStorage.setItem('theme', theme)
    applyTheme()
  }

  // Отслеживание изменений системной темы
  onMounted(() => {
    loadTheme()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
        applyTheme()
      }
    })
  })

  return {
    isDark: computed(() => isDark.value),
    toggleTheme,
    setTheme,
    loadTheme,
  }
}
