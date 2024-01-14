import type { Achievement } from './Achievement'
import type { AllSkills } from './skills'

export type Project = {
  title: string
  description: string
  icon: string
  year: string
  skills: Array<AllSkills>
  highlights: Array<Achievement>
  links: any
}
