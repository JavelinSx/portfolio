import { ref } from 'vue'
import projectsData from '@/assets/data/project.json'

interface Project {
  id: string
  name: string
  description: string
  shortDescription: string
  type: string
  status: string
  featured: boolean
  technologies: { name: string; icon: string; color: string }[]
  images: { url: string; alt: string; type: string; primary?: boolean }[]
  links: { type: string; url: string; title: string }[]
  startDate: string
  endDate?: string
}

export function useProjects() {
  const projects = ref<Project[]>(projectsData.projects)

  // Фильтры для проектов
  const getProjectsByType = (type: string) => {
    if (type === 'Все') return projects.value
    return projects.value.filter((project) => project.type === type)
  }

  const getFeaturedProjects = () => {
    return projects.value.filter((project) => project.featured)
  }

  const getProjectById = (id: string) => {
    return projects.value.find((project) => project.id === id)
  }

  // Получить основное изображение проекта
  const getProjectImage = (project: Project) => {
    const primaryImage = project.images.find((img) => img.primary)
    return primaryImage?.url || project.images[0]?.url || null
  }

  // Получить ссылки проекта
  const getProjectDemo = (project: Project) => {
    const demoLink = project.links.find((link) => link.type === 'demo' || link.type === 'website')
    return demoLink?.url || null
  }

  const getProjectGithub = (project: Project) => {
    const githubLink = project.links.find((link) => link.type === 'github')
    return githubLink?.url || null
  }

  // Получить цвет статуса
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success'
      case 'in_progress':
        return 'warning'
      case 'maintenance':
        return 'info'
      case 'archived':
        return 'error'
      default:
        return 'default'
    }
  }

  // Перевод статуса
  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Завершен'
      case 'in_progress':
        return 'В разработке'
      case 'maintenance':
        return 'Поддержка'
      case 'archived':
        return 'Архив'
      default:
        return status
    }
  }

  return {
    projects,
    getProjectsByType,
    getFeaturedProjects,
    getProjectById,
    getProjectImage,
    getProjectDemo,
    getProjectGithub,
    getStatusColor,
    getStatusText,
  }
}
