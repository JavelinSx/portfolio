<template>
  <section id="hero"
    class="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-10 pr-4 pl-4">
    <!-- Floating Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="(tech, index) in floatingTechs" :key="index"
        :class="`absolute tech-icon animate-float animate-delay-${index * 200}`" :style="tech.style">
        <component :is="tech.icon" />
      </div>
    </div>

    <div class="container-custom relative z-10">
      <a-row :gutter="[32, 32]" align="middle" class="min-h-screen">
        <!-- Left Content -->
        <a-col :xs="24" :lg="14" class="text-center lg:text-left">
          <div class="space-y-6">
            <!-- Greeting -->
            <div class="animate-fade-in text-white/90 text-lg md:text-xl">
              Привет, меня зовут
            </div>

            <!-- Name -->
            <h1
              class="animate-slide-up animate-delay-200 text-4xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-tight">
              Никита <span class="text-yellow-300">Зуев</span>
            </h1>

            <!-- Title -->
            <h2 class="animate-slide-up animate-delay-400 text-xl md:text-3xl font-semibold text-white/90">
              Frontend разработчик
            </h2>

            <!-- Description -->
            <p class="animate-slide-up animate-delay-600 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Создаю современные веб-приложения с использованием Vue(основа), React и TypeScript.
              Фокусируюсь на качественном коде и отличном пользовательском опыте.
            </p>

            <!-- Action Buttons -->
            <div
              class="animate-slide-up animate-delay-800 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a-button type="primary" size="large" @click="scrollToSection('projects')"
                class="h-12 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                <template #icon>
                  <FolderOpenOutlined />
                </template>
                Мои проекты
              </a-button>

              <a-button size="large" @click="scrollToSection('contact')"
                class="h-12 px-8 text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm">
                <template #icon>
                  <MailOutlined />
                </template>
                Связаться
              </a-button>
            </div>

            <!-- Social Links -->
            <div class="animate-slide-up animate-delay-1000 flex items-center gap-6 justify-center lg:justify-start">
              <span class="text-white/70 text-sm">Найти меня:</span>
              <div class="flex gap-3">
                <a-button v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                  type="text" shape="circle" size="large"
                  class="glass-effect text-white hover:text-yellow-300 hover:scale-110 transition-all">
                  <template #icon>
                    <component :is="social.icon" />
                  </template>
                </a-button>
              </div>
            </div>
          </div>
        </a-col>

        <!-- Right Content - Avatar -->
        <a-col :xs="24" :lg="10" class="flex justify-center">
          <div class="animate-slide-in-right animate-delay-500 relative">
            <div class="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden glass-effect p-2 animate-float">
              <img :src="avatar" alt="Никита Зуев" class="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </a-col>
      </a-row>

    </div>
  </section>
</template>

<script setup lang="ts">
import avatar from '@/assets/img/avatar.jpg'
import { ref } from 'vue'
import {
  FolderOpenOutlined,
  MailOutlined,
  DownOutlined,
  GithubOutlined,
  CodeOutlined,
  DatabaseOutlined,
  BugOutlined
} from '@ant-design/icons-vue'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/JavelinSx', icon: GithubOutlined },
  { name: 'Email', url: 'mailto:zuev499@gmail.com', icon: MailOutlined },
]

const floatingTechs = [
  {
    icon: CodeOutlined,
    style: {
      top: '20%',
      right: '10%',
      background: 'linear-gradient(45deg, #4FC08D, #42b883)',
      animationDelay: '0s'
    }
  },
  {
    icon: DatabaseOutlined,
    style: {
      top: '80%',
      right: '20%',
      background: 'linear-gradient(45deg, #61DAFB, #21D4FD)',
      animationDelay: '2s'
    }
  },
  {
    icon: BugOutlined,
    style: {
      top: '40%',
      right: '5%',
      background: 'linear-gradient(45deg, #3178C6, #235A97)',
      animationDelay: '4s'
    }
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

</script>

<style scoped>
.hero-gradient {
  background-size: 400% 400%;
}

.tech-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.glass-effect {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .tech-icon {
    display: none;
  }
}
</style>
