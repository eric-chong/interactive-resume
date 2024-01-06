export enum Frontend {
  React = 'React',
  Redux = 'Redux',
  ReactRouter = 'ReactRouter',
  ReactQuery = 'ReactQuery'
}

export enum Backend {
  Rails = 'Rails',
  Sql = 'Sql'
}

export enum Language {
  Typescript = 'Typescript',
  Java = 'Java'
}

export enum Protocol {
  Rest = 'Rest',
  Websocket = 'Websocket'
}

export enum SoftSkill {
  ProblemSolving = 'ProblemSolving',
  Collaboration = 'Collaboration',
  Support = 'Support'
}

export enum SkillCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Language = 'Language',
  Protocol = 'Protocol',
  SoftSkill = 'SoftSkill'
}

export const SkillsMap = {
  Frontend,
  Backend,
  Language,
  Protocol,
  SoftSkill
}
