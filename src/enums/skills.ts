export enum Frontend {
  React = 'React',
  ReactQuery = 'ReactQuery',
  ReactRouter = 'ReactRouter',
  Redux = 'Redux'
}

export enum Backend {
  Rails = 'Rails',
  Sql = 'Sql'
}

export enum Language {
  Javascript = 'Javascript',
  Typescript = 'Typescript',
  Java = 'Java'
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
