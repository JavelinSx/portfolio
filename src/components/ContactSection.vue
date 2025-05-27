<template>
  <section id="contact" class="section-padding section-bg-primary">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <a-typography-title :level="2" class="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-slide-up">
          <MailOutlined class="mr-4" />
          Связаться со мной
        </a-typography-title>
        <p class="text-lg text-adaptive-secondary max-w-2xl mx-auto animate-slide-up animate-delay-200">
          Готов обсудить ваш проект или ответить на вопросы
        </p>
      </div>

      <a-row :gutter="[32, 32]" justify="center">
        <!-- Contact Info -->
        <a-col :xs="24" :lg="16">
          <div class="space-y-8 animate-slide-in-left">
            <div class="text-center">
              <h3 class="text-3xl font-bold text-adaptive mb-6">
                Давайте работать вместе!
              </h3>
              <p class="text-adaptive-secondary text-lg leading-relaxed mb-12">
                Ищете frontend разработчика для вашего проекта? Или просто хотите обсудить
                интересные идеи? Буду рад услышать от вас!
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <a href="mailto:zuev499@gmail.com" :class="[
                'flex items-center p-6 rounded-xl transition-all duration-300 group',
                isDark
                  ? 'bg-gray-800 hover:bg-blue-900/30 hover:shadow-lg'
                  : 'bg-gray-50 hover:bg-blue-50 hover:shadow-lg'
              ]">
                <div :class="[
                  'w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-colors',
                  isDark
                    ? 'bg-blue-900/50 group-hover:bg-blue-800'
                    : 'bg-blue-100 group-hover:bg-blue-200'
                ]">
                  <MailOutlined class="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 class="font-bold text-adaptive text-lg">Email</h4>
                  <p class="text-adaptive-secondary">zuev499@gmail.com</p>
                </div>
                <ExportOutlined :class="[
                  'ml-auto transition-colors',
                  isDark
                    ? 'text-gray-500 group-hover:text-blue-400'
                    : 'text-gray-400 group-hover:text-blue-600'
                ]" />
              </a>

              <a href="tel:+79216734503" :class="[
                'flex items-center p-6 rounded-xl transition-all duration-300 group',
                isDark
                  ? 'bg-gray-800 hover:bg-green-900/30 hover:shadow-lg'
                  : 'bg-gray-50 hover:bg-green-50 hover:shadow-lg'
              ]">
                <div :class="[
                  'w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-colors',
                  isDark
                    ? 'bg-green-900/50 group-hover:bg-green-800'
                    : 'bg-green-100 group-hover:bg-green-200'
                ]">
                  <PhoneOutlined class="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <div>
                  <h4 class="font-bold text-adaptive text-lg">Телефон</h4>
                  <p class="text-adaptive-secondary">+7 (921) 673-45-03</p>
                </div>
                <ExportOutlined :class="[
                  'ml-auto transition-colors',
                  isDark
                    ? 'text-gray-500 group-hover:text-green-400'
                    : 'text-gray-400 group-hover:text-green-600'
                ]" />
              </a>

              <a href="https://t.me/JavelinMynd" target="_blank" :class="[
                'flex items-center p-6 rounded-xl transition-all duration-300 group',
                isDark
                  ? 'bg-gray-800 hover:bg-cyan-900/30 hover:shadow-lg'
                  : 'bg-gray-50 hover:bg-cyan-50 hover:shadow-lg'
              ]">
                <div :class="[
                  'w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-colors',
                  isDark
                    ? 'bg-cyan-900/50 group-hover:bg-cyan-800'
                    : 'bg-cyan-100 group-hover:bg-cyan-200'
                ]">
                  <SendOutlined class="text-cyan-600 dark:text-cyan-400 text-xl" />
                </div>
                <div>
                  <h4 class="font-bold text-adaptive text-lg">Telegram</h4>
                  <p class="text-adaptive-secondary">@JavelinMynd</p>
                </div>
                <ExportOutlined :class="[
                  'ml-auto transition-colors',
                  isDark
                    ? 'text-gray-500 group-hover:text-cyan-400'
                    : 'text-gray-400 group-hover:text-cyan-600'
                ]" />
              </a>

              <div :class="[
                'flex items-center p-6 rounded-xl',
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              ]">
                <div :class="[
                  'w-14 h-14 rounded-xl flex items-center justify-center mr-4',
                  isDark ? 'bg-purple-900/50' : 'bg-purple-100'
                ]">
                  <EnvironmentOutlined class="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 class="font-bold text-adaptive text-lg">Местоположение</h4>
                  <p class="text-adaptive-secondary">Плесецк, Россия</p>
                </div>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import {
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  EnvironmentOutlined,
  ExportOutlined,

} from '@ant-design/icons-vue'

const isDark = inject('isDark', ref(false))

</script>

<style scoped>
.ant-card {
  border-radius: 16px;
}
</style>
