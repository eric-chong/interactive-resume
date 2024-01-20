export enum Frontend {
  Angular = 'Angular',
  DataVisualization = 'DataVisualization',
  MicroFrontend = 'MicroFrontend',
  Pinia = 'Pinia',
  React = 'React',
  ReactQuery = 'ReactQuery',
  ReactRouter = 'ReactRouter',
  Redux = 'Redux',
  Vue = 'Vue',
  Vuetify = 'Vuetify'
}

export enum Backend {
  ASP = 'ASP',
  Express = 'Express',
  Hibernate = 'Hibernate',
  Jersey = 'Jersey',
  MongoDb = 'MongoDb',
  Mongoose = 'Mongoose',
  Rails = 'Rails',
  Sql = 'Sql'
}

export enum Language {
  CT = 'CT',
  Java = 'Java',
  Javascript = 'Javascript',
  Typescript = 'Typescript',
  VB = 'VB'
}

export enum Test {
  Cypress = 'Cypress',
  Enzyme = 'Enzyme',
  Jest = 'Jest',
  ReactTestingLibrary = 'ReactTestingLibrary',
  Screener = 'Screener',
  Storybook = 'Storybook'
}

export enum Api {
  GraphQL = 'GraphQL',
  Rest = 'Rest',
  Websocket = 'Websocket'
}

export enum SoftSkill {
  Collaboration = 'Collaboration',
  Mentoring = 'Mentoring',
  ProblemSolving = 'ProblemSolving',
  Support = 'Support'
}

export enum SkillCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Test = 'Test',
  Api = 'Api',
  Language = 'Language',
  SoftSkill = 'SoftSkill'
}

export const SkillsMap = {
  Frontend,
  Backend,
  Test,
  Language,
  Api,
  SoftSkill
}
