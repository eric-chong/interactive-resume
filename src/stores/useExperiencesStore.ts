import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import workExperiencesData from './workExperiencesData'
import type { AllSkills } from '@/types/skills'
import type { WorkExperience } from '@/types'

export const useExperiencesStore = defineStore('workExperiences', () => {
  const workExperiences: Ref<Array<WorkExperience>> = ref(workExperiencesData)
  const highlightSkills: Ref<Array<AllSkills>> = ref([])

  function toggleHighlightSkills(skill: AllSkills) {
    if (highlightSkills.value.includes(skill)) {
      const index = highlightSkills.value.indexOf(skill)
      highlightSkills.value.splice(index, 1)
    } else {
      highlightSkills.value.push(skill)
    }
  }

  return { highlightSkills, toggleHighlightSkills, workExperiences }
})
