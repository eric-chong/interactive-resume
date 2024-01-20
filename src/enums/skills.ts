export enum Frontend {
  Angular = 'Angular',
  ASP = 'ASP',
  Cypress = 'Cypress',
  DataVisualization = 'DataVisualization',
  Enzyme = 'Enzyme',
  Jest = 'Jest',
  MicroFrontend = 'MicroFrontend',
  Pinia = 'Pinia',
  React = 'React',
  ReactQuery = 'ReactQuery',
  ReactRouter = 'ReactRouter',
  ReactTestingLibrary = 'ReactTestingLibrary',
  Redux = 'Redux',
  Screener = 'Screener',
  Storybook = 'Storybook',
  Vue = 'Vue',
  Vuetify = 'Vuetify'
}

export enum Backend {
  Express = 'Express',
  Hibernate = 'Hibernate',
  Jersey = 'Jersey',
  MongoDb = 'MongoDb',
  Mongoose = 'Mongoose',
  Rails = 'Rails',
  Sql = 'Sql'
}

export enum Language {
  Java = 'Java',
  Javascript = 'Javascript',
  Typescript = 'Typescript',
  VB = 'VB'
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
  Api = 'Api',
  Backend = 'Backend',
  Frontend = 'Frontend',
  Language = 'Language',
  SoftSkill = 'SoftSkill'
}

export const SkillsMap = {
  Frontend,
  Backend,
  Language,
  Api,
  SoftSkill
}
