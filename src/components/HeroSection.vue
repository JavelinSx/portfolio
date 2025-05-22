<template>
  <section id="hero"
    class="min-h-screen bg-hero animate-gradient flex items-center text-white relative overflow-hidden">
    <v-container class="h-full flex items-center">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <!-- Текстовая часть -->
        <div class="text-center lg:text-left space-y-6">
          <div class="text-lg md:text-xl opacity-90 animate-fade-in-up">
            Привет, меня зовут
          </div>

          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-['Poppins'] animate-fade-in-up delay-200">
            Никита <span class="gradient-text">Зуев</span>
          </h1>

          <h2 class="text-xl md:text-2xl font-medium opacity-90 animate-fade-in-up delay-300">
            Frontend разработчик
          </h2>

          <p class="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl lg:max-w-none animate-fade-in-up delay-500">
            Создаю современные веб-приложения с использованием Vue.js, React и TypeScript.
            Фокусируюсь на качественном коде и отличном пользовательском опыте.
          </p>

          <!-- Кнопки -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-700">
            <v-btn color="primary" size="large" prepend-icon="mdi-folder-multiple" class="hover-lift transition-all-300"
              @click="scrollToProjects">
              Мои проекты
            </v-btn>

            <v-btn variant="outlined" size="large" prepend-icon="mdi-email"
              class="border-white text-white hover:bg-white hover:text-gray-900 transition-all-300"
              @click="scrollToContact">
              Связаться
            </v-btn>
          </div>

          <!-- Социальные ссылки -->
          <div
            class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up delay-1000">
            <span class="text-sm opacity-80">Найти меня:</span>
            <div class="flex gap-3">
              <v-btn v-for="social in socialLinks" :key="social.name" :href="social.url" :icon="social.icon"
                variant="text" target="_blank" size="small"
                class="w-10 h-10 rounded-full glass hover-scale transition-all-300" />
            </div>
          </div>
        </div>

        <!-- Аватар -->
        <div class="flex justify-center lg:justify-end animate-fade-in-left delay-500">
          <div class="relative">
            <div
              class="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl animate-float">
              <img src="@/assets/img/avatar.jpg" alt="Никита Зуев" class="w-full h-full object-cover"
                @error="handleImageError" />
            </div>

            <!-- Плавающие иконки технологий -->
            <div class="absolute inset-0 pointer-events-none">
              <div v-for="(tech, index) in techs" :key="tech.name"
                :class="`absolute w-12 h-12 rounded-full glass flex items-center justify-center animate-float-tech tech-${index + 1} delay-${(index + 1) * 200}`"
                :style="{ color: tech.color }">
                <v-icon :icon="tech.icon" size="24" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Стрелка вниз -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce-soft opacity-80"
        @click="scrollToAbout">
        <v-icon icon="mdi-chevron-down" size="30" />
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/JavelinSx', icon: 'mdi-github' },
  { name: 'Telegram', url: 'https://t.me/JavelinMynd', icon: 'mdi-telegram' },
  { name: 'VK', url: 'https://vk.com/javelinsx', icon: 'mdi-vk' },
  { name: 'Email', url: 'mailto:zuev499@gmail.com', icon: 'mdi-email' }
]

const techs = [
  { name: 'Vue.js', icon: 'mdi-vuejs', color: '#4FC08D' },
  { name: 'React', icon: 'mdi-react', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'mdi-language-typescript', color: '#3178C6' },
  { name: 'Node.js', icon: 'mdi-nodejs', color: '#339933' }
]

const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '@/assets/img/avatar-placeholder.jpg'
}
</script>
