<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors-200">
    <v-container>
      <!-- Заголовок секции -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
          <v-icon icon="mdi-email" class="mr-3" />
          Связаться со мной
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Готов обсудить ваш проект или ответить на вопросы
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
        <!-- Контактная информация -->
        <div class="space-y-8 animate-fade-in-left">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Давайте работать вместе!
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Ищете frontend разработчика для вашего проекта? Или просто хотите обсудить
              интересные идеи? Буду рад услышать от вас!
            </p>
          </div>

          <!-- Способы связи -->
          <div class="space-y-6">
            <a href="mailto:zuev499@gmail.com"
              class="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg hover-lift transition-all-300 group">
              <div
                class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors-200">
                <v-icon icon="mdi-email" color="primary" size="24" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Email</h4>
                <p class="text-gray-600 dark:text-gray-400">zuev499@gmail.com</p>
              </div>
            </a>

            <a href="tel:+79216734503"
              class="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg hover-lift transition-all-300 group">
              <div
                class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors-200">
                <v-icon icon="mdi-phone" color="success" size="24" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Телефон</h4>
                <p class="text-gray-600 dark:text-gray-400">+7 (921) 673-45-03</p>
              </div>
            </a>

            <a href="https://t.me/JavelinMynd" target="_blank"
              class="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg hover-lift transition-all-300 group">
              <div
                class="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50 transition-colors-200">
                <v-icon icon="mdi-telegram" color="info" size="24" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Telegram</h4>
                <p class="text-gray-600 dark:text-gray-400">@JavelinMynd</p>
              </div>
            </a>

            <div class="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg">
              <div
                class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                <v-icon icon="mdi-map-marker" color="secondary" size="24" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Местоположение</h4>
                <p class="text-gray-600 dark:text-gray-400">Плесецк, Россия</p>
              </div>
            </div>
          </div>

          <!-- Социальные сети -->
          <div>
            <h4 class="font-medium text-gray-900 dark:text-white mb-4">Социальные сети</h4>
            <div class="flex gap-3">
              <v-btn v-for="social in socialLinks" :key="social.name" :href="social.url" :icon="social.icon"
                :title="social.name" color="primary" variant="outlined" size="large" target="_blank"
                class="hover-scale transition-all-300" />
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">


const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/JavelinSx', icon: 'mdi-github' },
  { name: 'Telegram', url: 'https://t.me/JavelinMynd', icon: 'mdi-telegram' },
  { name: 'VK', url: 'https://vk.com/javelinsx', icon: 'mdi-vk' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/nikita-zuev', icon: 'mdi-linkedin' }
]

</script>
