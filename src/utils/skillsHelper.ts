import type { AllSkills } from '@/types/skills'
import { Frontend, Backend, Language, Protocol, SoftSkill } from '@/enums'

export const getSkillDisplayName = (skill: AllSkills): string => {
  const displayNamesMap = new Map<AllSkills, string>([
    [Frontend.React, 'React'],
    [Frontend.Redux, 'Redux'],
    [Frontend.ReactRouter, 'React Router'],
    [Frontend.ReactQuery, 'React Query'],
    [Backend.Rails, 'Ruby on Rails'],
    [Backend.Sql, 'SQL'],
    [Language.Typescript, 'Typescript'],
    [Language.Java, 'Java'],
    [Protocol.Rest, 'REST'],
    [Protocol.Websocket, 'Websocket'],
    [SoftSkill.ProblemSolving, 'Problem Solving'],
    [SoftSkill.Collaboration, 'Collaboration'],
    [SoftSkill.Support, 'Support']
  ])
  return displayNamesMap.get(skill) || ''
}
