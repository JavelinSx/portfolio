<template>
  <a-layout class="min-h-screen overflow-hidden">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <a-layout-content>
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Skills Section -->
      <SkillsSection />

      <!-- Projects Section -->
      <ProjectsSection />

      <!-- Contact Section -->
      <ContactSection />
    </a-layout-content>

    <!-- Footer -->
    <AppFooter />
  </a-layout>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
