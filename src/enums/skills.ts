export enum Frontend {
  Angular = 'Angular',
  Pinia = 'Pinia',
  React = 'React',
  ReactQuery = 'ReactQuery',
  ReactRouter = 'ReactRouter',
  Redux = 'Redux',
  Vue = 'Vue',
  Vuetify = 'Vuetify'
}

export enum Backend {
  Express = 'Express',
  MongoDb = 'MongoDb',
  Mongoose = 'Mongoose',
  Rails = 'Rails',
  Sql = 'Sql'
}

export enum Language {
  Java = 'Java',
  Javascript = 'Javascript',
  Typescript = 'Typescript'
}

export enum Api {
  Rest = 'Rest',
  Websocket = 'Websocket'
}

export enum SoftSkill {
  Collaboration = 'Collaboration',
  ProblemSolving = 'ProblemSolving',
  Support = 'Support'
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
