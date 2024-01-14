import { type Achievement } from './Achievement'

export type WorkExperience = {
  company: string
  location: string
  icon?: string
  position: string
  start: string
  end?: string
  achievements: Array<Achievement>
}
