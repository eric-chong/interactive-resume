import type { AllSkills } from '@/types/skills'
import { Frontend, Backend, Test, Language, Api, SoftSkill } from '@/enums'

export const getSkillDisplayName = (skill: AllSkills): string => {
  const displayNamesMap = new Map<AllSkills, string>([
    [Frontend.Angular, 'Angular'],
    [Frontend.DataVisualization, 'Data Visualization'],
    [Frontend.MicroFrontend, 'Micro Frontend'],
    [Frontend.Pinia, 'Pinia'],
    [Frontend.React, 'React'],
    [Frontend.ReactQuery, 'React Query'],
    [Frontend.ReactRouter, 'React Router'],
    [Frontend.Redux, 'Redux'],
    [Frontend.Vue, 'Vue'],
    [Frontend.Vuetify, 'Vuetify'],

    [Backend.ASP, 'ASP'],
    [Backend.Express, 'Express'],
    [Backend.Hibernate, 'Hibernate'],
    [Backend.Jersey, 'Jersey'],
    [Backend.MongoDb, 'Mongo DB'],
    [Backend.Mongoose, 'Mongoose'],
    [Backend.Rails, 'Ruby on Rails'],
    [Backend.Sql, 'SQL'],

    [Test.Cypress, 'Cypress'],
    [Test.Enzyme, 'Enzyme'],
    [Test.Jest, 'Jest'],
    [Test.ReactTestingLibrary, 'React Testing Library'],
    [Test.Screener, 'Screener'],
    [Test.Storybook, 'Storybook'],

    [Language.CT, 'Consumer Transaction'],
    [Language.Java, 'Java'],
    [Language.Javascript, 'Javascript'],
    [Language.Typescript, 'Typescript'],
    [Language.VB, 'Visual Basic'],

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
