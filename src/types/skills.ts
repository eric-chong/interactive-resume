import { Frontend, Backend, Language, Protocol, SoftSkill } from '@/enums'

export type AllSkills =
  | keyof typeof Frontend
  | keyof typeof Backend
  | keyof typeof Language
  | keyof typeof Protocol
  | keyof typeof SoftSkill
