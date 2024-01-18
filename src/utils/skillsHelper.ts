import type { AllSkills } from '@/types/skills'
import { Frontend, Backend, Language, Api, SoftSkill } from '@/enums'

export const getSkillDisplayName = (skill: AllSkills): string => {
  const displayNamesMap = new Map<AllSkills, string>([
    [Frontend.Angular, 'Angular'],
    [Frontend.Cypress, 'Cypress'],
    [Frontend.Enzyme, 'Enzyme'],
    [Frontend.Jest, 'Jest'],
    [Frontend.Pinia, 'Pinia'],
    [Frontend.React, 'React'],
    [Frontend.ReactQuery, 'React Query'],
    [Frontend.ReactRouter, 'React Router'],
    [Frontend.ReactTestingLibrary, 'React Testing Library'],
    [Frontend.Redux, 'Redux'],
    [Frontend.Screener, 'Screener'],
    [Frontend.Storybook, 'Storybook'],
    [Frontend.Vue, 'Vue'],
    [Frontend.Vuetify, 'Vuetify'],
    [Frontend.DataVisualization, 'Data Visualization'],

    [Backend.Express, 'Express'],
    [Backend.Hibernate, 'Hibernate'],
    [Backend.Jersey, 'Jersey'],
    [Backend.MongoDb, 'Mongo DB'],
    [Backend.Mongoose, 'Mongoose'],
    [Backend.Rails, 'Ruby on Rails'],
    [Backend.Sql, 'SQL'],

    [Language.Java, 'Java'],
    [Language.Javascript, 'Javascript'],
    [Language.Typescript, 'Typescript'],

    [Api.Rest, 'REST'],
    [Api.Websocket, 'Websocket'],
    [Api.GraphQL, 'GraphQL'],

    [SoftSkill.Collaboration, 'Collaboration'],
    [SoftSkill.ProblemSolving, 'Problem Solving'],
    [SoftSkill.Support, 'Support'],
    [SoftSkill.Mentoring, 'Mentoring']
  ])
  return displayNamesMap.get(skill) || ''
}
