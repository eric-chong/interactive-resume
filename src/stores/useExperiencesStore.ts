import { ref } from 'vue'
import { defineStore } from 'pinia'
import workExperiencesData from './workExperiencesData'

export const useExperiencesStore = defineStore('workExperiences', () => {
  const workExperiences = ref(workExperiencesData)

  return { workExperiences }
})
