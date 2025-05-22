import { ref, computed } from 'vue'
import skillsData from '@/assets/data/skills.json'

interface Skill {
  id: string
  name: string
  level: number
  category: string
  icon: string
  color: string
  description: string
  yearsOfExperience: number
  projects: string[]
}

interface SkillCategory {
  name: string
  icon: string
  color: string
  description: string
}

export function useSkills() {
  const skills = ref<Skill[]>(skillsData.skills)
  const skillCategories = ref<Record<string, SkillCategory>>(skillsData.skillCategories)

  // Получить все навыки
  const getAllSkills = () => {
    return skills.value.sort((a, b) => b.level - a.level)
  }

  // Получить навыки по категории
  const getSkillsByCategory = (category: string) => {
    return skills.value
      .filter((skill) => skill.category === category)
      .sort((a, b) => b.level - a.level)
  }

  // Получить топ навыки
  const getTopSkills = (limit: number = 6) => {
    return skills.value.sort((a, b) => b.level - a.level).slice(0, limit)
  }

  // Получить навыки по уровню
  const getSkillsByLevel = (minLevel: number = 80) => {
    return skills.value.filter((skill) => skill.level >= minLevel)
  }

  // Получить навык по ID
  const getSkillById = (id: string) => {
    return skills.value.find((skill) => skill.id === id)
  }

  // Получить категории с навыками
  const getCategoriesWithSkills = computed(() => {
    const categoriesWithSkills: Record<string, SkillCategory & { skills: Skill[]; count: number }> =
      {}

    Object.entries(skillCategories.value).forEach(([key, category]) => {
      const categorySkills = getSkillsByCategory(key)
      categoriesWithSkills[key] = {
        ...category,
        skills: categorySkills,
        count: categorySkills.length,
      }
    })

    return categoriesWithSkills
  })

  // Статистика навыков
  const skillsStats = computed(() => {
    const totalSkills = skills.value.length
    const averageLevel = Math.round(
      skills.value.reduce((sum, skill) => sum + skill.level, 0) / totalSkills,
    )
    const expertSkills = skills.value.filter((skill) => skill.level >= 90).length
    const advancedSkills = skills.value.filter(
      (skill) => skill.level >= 80 && skill.level < 90,
    ).length

    return {
      total: totalSkills,
      averageLevel,
      expert: expertSkills,
      advanced: advancedSkills,
      categories: Object.keys(skillCategories.value).length,
    }
  })

  return {
    skills,
    skillCategories,
    getAllSkills,
    getSkillsByCategory,
    getTopSkills,
    getSkillsByLevel,
    getSkillById,
    getCategoriesWithSkills,
    skillsStats,
  }
}
