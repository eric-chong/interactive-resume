export enum Frontend {
  Angular = 'Angular',
  Cypress = 'Cypress',
  Jest = 'Jest',
  Enzyme = 'Enzyme',
  Pinia = 'Pinia',
  React = 'React',
  ReactQuery = 'ReactQuery',
  ReactRouter = 'ReactRouter',
  MicroFrontend = 'MicroFrontend',
  ReactTestingLibrary = 'ReactTestingLibrary',
  Redux = 'Redux',
  Storybook = 'Storybook',
  Screener = 'Screener',
  Vue = 'Vue',
  Vuetify = 'Vuetify',
  DataVisualization = 'DataVisualization'
}

export enum Backend {
  Express = 'Express',
  MongoDb = 'MongoDb',
  Mongoose = 'Mongoose',
  Rails = 'Rails',
  Sql = 'Sql',
  Jersey = 'Jersey',
  Hibernate = 'Hibernate'
}

export enum Language {
  Java = 'Java',
  Javascript = 'Javascript',
  Typescript = 'Typescript'
}

export enum Api {
  Rest = 'Rest',
  Websocket = 'Websocket',
  GraphQL = 'GraphQL'
}

export enum SoftSkill {
  Collaboration = 'Collaboration',
  ProblemSolving = 'ProblemSolving',
  Support = 'Support',
  Mentoring = 'Mentoring'
}

export enum SkillCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Language = 'Language',
  Api = 'Api',
  SoftSkill = 'SoftSkill'
}

export const SkillsMap = {
  Frontend,
  Backend,
  Language,
  Api,
  SoftSkill
}
