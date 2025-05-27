<template>
  <a-layout-header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/90  border-b border-gray-700/30',

  ]">
    <div class="container-custom md:justify-center flex items-center justify-end h-16 pl-4 pr-4">
      <!-- Desktop Navigation -->
      <div class="hidden md:block min-w-[460px]">
        <a-menu mode="horizontal" :selected-keys="[activeSection]" :class="[
          'border-0',
          isDark ? 'bg-transparent' : 'bg-transparent'
        ]" :theme="isDark ? 'dark' : 'light'">
          <a-menu-item v-for="item in menuItems" :key="item.key" @click="scrollToSection(item.key)"
            class="text-gray-100 hover:text-blue-500">
            {{ item.label }}
          </a-menu-item>
        </a-menu>
      </div>

      <!-- Actions -->
      <div class="flex items-center space-x-3 ">
        <!-- Theme Toggle -->
        <a-button type="text" shape="circle" @click="toggleTheme" :class="[
          'transition-all duration-300 group',
          isDark
            ? 'text-gray-300 hover:!text-yellow-400'
            : 'text-gray-300 hover:!text-yellow-400'
        ]">
          <template #icon>
            <BulbOutlined v-if="isDark" class="group-hover:!text-inherit" />
            <BulbFilled v-else class="group-hover:!text-inherit" />
          </template>
        </a-button>

        <!-- Mobile Menu -->
        <a-button type="text" shape="circle" @click="showMobileMenu = !showMobileMenu" :class="[
          'md:hidden transition-colors',
          isDark
            ? 'text-gray-300 hover:text-white hover:bg-gray-800'
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
        ]">
          <template #icon>
            <MenuOutlined />
          </template>
        </a-button>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->

    <transition name="mobile-menu">
      <div v-if="showMobileMenu" :class="[
        'overflow-hidden md:hidden mt-[-1px]',
        isDark ? 'bg-gray-800 shadow-lg shadow-slate-50' : 'bg-gray-100 shadow-lg shadow-slate-500'
      ]">
        <a-menu mode="inline" :selected-keys="[activeSection]" :theme="isDark ? 'dark' : 'light'"
          class="pt-4  mobile-menu-content">
          <a-menu-item v-for="item in menuItems" :key="item.key" @click="scrollToSection(item.key)">
            {{ item.label }}
          </a-menu-item>
        </a-menu>

        <a-divider :class="isDark ? 'border-gray-600' : 'border-gray-300'" />

        <div class="p-4 space-y-4">
          <div class="flex items-center space-x-3">
            <MailOutlined :class="isDark ? 'text-gray-500' : 'text-gray-400'" />
            <span :class="[
              'text-sm',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">zuev499@gmail.com</span>
          </div>
          <div class="flex items-center space-x-3">
            <PhoneOutlined :class="isDark ? 'text-gray-500' : 'text-gray-400'" />
            <span :class="[
              'text-sm',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">+7 (921) 673-45-03</span>
          </div>
        </div>
      </div>
    </transition>



  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, reactive } from 'vue'
import {

  CodeOutlined,
  MenuOutlined,
  BulbOutlined,
  BulbFilled,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons-vue'

const showMobileMenu = ref(false)
const activeSection = ref('hero')

// Получаем состояние темы из провайдера
const isDark = inject('isDark', ref(false))
const toggleTheme = inject('toggleTheme', () => { })

const menuItems = [
  { key: 'hero', label: 'Главная' },
  { key: 'about', label: 'Обо мне' },
  { key: 'skills', label: 'Навыки' },
  { key: 'projects', label: 'Проекты' },
  { key: 'contact', label: 'Контакты' }
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
  showMobileMenu.value = false
}

// Определение активной секции при скролле
const updateActiveSection = () => {
  const sections = menuItems.map(item => item.key)
  const scrollPosition = window.scrollY + 100

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.ant-layout-header {
  padding: 0;
  height: 64px;
  line-height: 64px;
}

.ant-menu-light {
  background: none;
}

.ant-menu-dark {
  background: none;
}

/* Анимация для мобильного меню */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
  max-height: 400px;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  max-height: 400px;
  opacity: 1;
}
</style>
