<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <v-container>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Брендинг -->
        <div class="lg:col-span-2">
          <div class="flex items-center mb-4">
            <v-icon icon="mdi-code-tags" color="primary" size="28" class="mr-3" />
            <span class="text-xl font-bold text-white font-['Poppins']">Никита Зуев</span>
          </div>
          <p class="text-gray-400 mb-4 max-w-md leading-relaxed">
            Frontend разработчик, создающий современные веб-приложения с фокусом на качество и пользовательский опыт.
          </p>
          <div class="flex gap-3">
            <v-btn v-for="social in socialLinks" :key="social.name" :href="social.url" :icon="social.icon"
              variant="text" target="_blank" size="small"
              class="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary text-gray-400 hover:text-white transition-all-300 hover-scale" />
          </div>
        </div>

        <!-- Навигация -->
        <div>
          <h4 class="text-white font-semibold mb-4">Навигация</h4>
          <ul class="space-y-2">
            <li>
              <a href="#about" @click="scrollTo('about')"
                class="hover:text-primary transition-colors-200 cursor-pointer">
                Обо мне
              </a>
            </li>
            <li>
              <a href="#skills" @click="scrollTo('skills')"
                class="hover:text-primary transition-colors-200 cursor-pointer">
                Навыки
              </a>
            </li>
            <li>
              <a href="#projects" @click="scrollTo('projects')"
                class="hover:text-primary transition-colors-200 cursor-pointer">
                Проекты
              </a>
            </li>
            <li>
              <a href="#contact" @click="scrollTo('contact')"
                class="hover:text-primary transition-colors-200 cursor-pointer">
                Контакты
              </a>
            </li>
          </ul>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="text-white font-semibold mb-4">Контакты</h4>
          <div class="space-y-2 text-sm">
            <a href="mailto:zuev499@gmail.com" class="flex items-center hover:text-primary transition-colors-200">
              <v-icon icon="mdi-email" size="16" class="mr-2" />
              zuev499@gmail.com
            </a>
            <a href="tel:+79216734503" class="flex items-center hover:text-primary transition-colors-200">
              <v-icon icon="mdi-phone" size="16" class="mr-2" />
              +7 (921) 673-45-03
            </a>
            <div class="flex items-center">
              <v-icon icon="mdi-map-marker" size="16" class="mr-2" />
              Плесецк, Россия
            </div>
          </div>
        </div>
      </div>

      <!-- Нижняя часть футера -->
      <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-gray-400 mb-4 sm:mb-0">
          © {{ currentYear }} Зуев Никита. Все права защищены.
        </p>
        <div class="flex items-center text-sm text-gray-400">
          <span>Создано с</span>
          <v-icon icon="mdi-heart" size="14" class="text-red-500 mx-1" />
          <span>на Vue.js</span>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/JavelinSx', icon: 'mdi-github' },
  { name: 'Telegram', url: 'https://t.me/JavelinMynd', icon: 'mdi-telegram' },
  { name: 'VK', url: 'https://vk.com/javelinsx', icon: 'mdi-vk' },
  { name: 'Email', url: 'mailto:zuev499@gmail.com', icon: 'mdi-email' }
]

const scrollTo = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
