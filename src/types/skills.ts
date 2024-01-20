import { Frontend, Backend, Test, Language, Api, SoftSkill } from '@/enums'

export type AllSkills =
  | keyof typeof Frontend
  | keyof typeof Backend
  | keyof typeof Test
  | keyof typeof Language
  | keyof typeof Api
  | keyof typeof SoftSkill
