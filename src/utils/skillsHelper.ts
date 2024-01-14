import type { AllSkills } from '@/types/skills'
import { Frontend, Backend, Language, Api, SoftSkill } from '@/enums'

export const getSkillDisplayName = (skill: AllSkills): string => {
  const displayNamesMap = new Map<AllSkills, string>([
    [Frontend.Angular, 'Angular'],
    [Frontend.Pinia, 'Pinia'],
    [Frontend.React, 'React'],
    [Frontend.ReactQuery, 'React Query'],
    [Frontend.ReactRouter, 'React Router'],
    [Frontend.Redux, 'Redux'],
    [Frontend.Vue, 'Vue'],
    [Frontend.Vuetify, 'Vuetify'],
    [Backend.Express, 'Express'],
    [Backend.MongoDb, 'Mongo DB'],
    [Backend.Mongoose, 'Mongoose'],
    [Backend.Rails, 'Ruby on Rails'],
    [Backend.Sql, 'SQL'],
    [Language.Java, 'Java'],
    [Language.Javascript, 'Javascript'],
    [Language.Typescript, 'Typescript'],
    [Api.Rest, 'REST'],
    [Api.Websocket, 'Websocket'],
    [SoftSkill.Collaboration, 'Collaboration'],
    [SoftSkill.ProblemSolving, 'Problem Solving'],
    [SoftSkill.Support, 'Support']
  ])
  return displayNamesMap.get(skill) || ''
}
