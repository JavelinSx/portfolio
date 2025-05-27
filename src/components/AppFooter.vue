<template>
  <a-layout-footer class="bg-gray-900 text-white">
    <div class="container-custom py-16 pb-6">
      <a-row :gutter="[32, 32]">
        <!-- Brand Section -->
        <a-col :xs="24" :md="12" :lg="8">
          <div class="space-y-6">
            <!-- Logo -->
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <CodeOutlined class="text-white text-xl" />
              </div>
              <span class="text-2xl font-bold font-display">Никита Зуев</span>
            </div>

            <!-- Description -->
            <p class="text-dark-700 leading-relaxed max-w-md">
              Frontend разработчик, создающий современные веб-приложения с фокусом на качество и пользовательский опыт.
            </p>

            <!-- Social Links -->
            <div class="flex gap-3">
              <a-button v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" type="text"
                shape="circle"
                class="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-blue-600 text-cyan-400 hover:text-white transition-all hover:scale-110">
                <component :is="social.icon" />
              </a-button>
            </div>
          </div>
        </a-col>

        <!-- Navigation -->
        <a-col :xs="24" :md="12" :lg="4">
          <div>
            <h4 class="text-lg font-semibold mb-6">Навигация</h4>
            <ul class="space-y-3">
              <li v-for="item in navigationItems" :key="item.key">
                <a @click="scrollToSection(item.key)"
                  class="text-cyan-400 hover:text-cyan-600 transition-colors cursor-pointer flex items-center group">
                  <component :is="item.icon" class="mr-2 text-sm group-hover:scale-110 transition-transform" />
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>
        </a-col>

        <!-- Contact Info -->
        <a-col :xs="24" :md="12" :lg="8">
          <div>
            <h4 class="text-lg font-semibold mb-6">Контакты</h4>
            <div class="space-y-4">
              <div class="flex items-center text-emerald-400">
                <MailOutlined class="mr-3 text-blue-400" />
                <a href="mailto:zuev499@gmail.com" class="hover:text-blue-400 transition-colors">
                  zuev499@gmail.com
                </a>
              </div>
              <div class="flex items-center text-emerald-400">
                <PhoneOutlined class="mr-3 text-green-400" />
                <a href="tel:+79216734503" class="hover:text-green-400 transition-colors">
                  +7 (921) 673-45-03
                </a>
              </div>
              <div class="flex items-center text-emerald-400">
                <EnvironmentOutlined class="mr-3 text-purple-400" />
                <span>Плесецк, Россия</span>
              </div>


            </div>
          </div>
        </a-col>
      </a-row>

      <!-- Bottom Section -->
      <a-divider class="border-gray-700 my-8" />

      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <!-- Copyright -->
        <div class="text-gray-400 text-sm text-center md:text-left">
          <p>© {{ currentYear }} Зуев Никита. Все права защищены.</p>
        </div>

        <!-- Made with -->
        <div class="flex items-center text-gray-400 text-sm">
          <span>Создано с</span>
          <HeartFilled class="text-red-500 mx-2 animate-pulse" />
          <span>на</span>
          <a-tag color="green" class="ml-2 border-0">Vue.js</a-tag>
          <span class="mx-1">+</span>
          <a-tag color="blue" class="border-0">Ant Design</a-tag>
        </div>

        <!-- Version -->
        <div class="text-gray-500 text-xs">
          v1.0.0
        </div>
      </div>

    </div>
  </a-layout-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  CodeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  SendOutlined,
  ExportOutlined,
  HeartFilled,
  UpOutlined,
  HomeOutlined,
  UserOutlined,
  ToolOutlined,
  FolderOpenOutlined,
  FileTextOutlined,
  BookOutlined
} from '@ant-design/icons-vue'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/JavelinSx', icon: GithubOutlined },
  { name: 'Telegram', url: 'https://t.me/JavelinMynd', icon: SendOutlined },
  { name: 'Email', url: 'mailto:zuev499@gmail.com', icon: MailOutlined }
]

const navigationItems = [
  { key: 'hero', label: 'Главная', icon: HomeOutlined },
  { key: 'about', label: 'Обо мне', icon: UserOutlined },
  { key: 'skills', label: 'Навыки', icon: ToolOutlined },
  { key: 'projects', label: 'Проекты', icon: FolderOpenOutlined },
  { key: 'contact', label: 'Контакты', icon: MailOutlined }
]

const quickLinks = [
  {
    label: 'Резюме',
    url: '/resume.pdf',
    icon: FileTextOutlined,
    external: false
  },
  {
    label: 'Блог',
    url: 'https://blog.example.com',
    icon: BookOutlined,
    external: true
  },
  {
    label: 'GitHub',
    url: 'https://github.com/JavelinSx',
    icon: GithubOutlined,
    external: true
  }
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.ant-layout-footer {
  padding: 0;
}

.ant-divider {
  margin: 32px 0;
}

.ant-tag {
  font-size: 11px;
  padding: 2px 6px;
  line-height: 1.2;
}

/* Анимация для статуса доступности */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
