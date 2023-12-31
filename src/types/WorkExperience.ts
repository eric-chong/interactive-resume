import { type WorkAchievement } from './WorkAchievement'

export type WorkExperience = {
  company: string
  location: string
  icon?: string
  position: string
  start: string
  end?: string
  achievements: Array<WorkAchievement>
}
