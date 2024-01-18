import { type WorkExperience } from '@/types'

const workExperiencesData: WorkExperience[] = [
  {
    company: 'Galvanize, now Diligent',
    location: 'Vancouver',
    icon: 'diligent',
    position: 'Senior Software Engineer - Frontend',
    start: '2012 Nov',
    achievements: [
      {
        description:
          'Develop python script editor single page application with React typescript, and uses websocket message to have real time communication with backend script execution environment.',
        skills: ['React', 'Redux', 'Websocket', 'Typescript', 'Rest']
      },
      {
        description:
          'Develop Analytic Robot single page application with React and other frontend libraries such as react router, redux toolkits, react query etc.',
        skills: ['React', 'ReactRouter', 'Redux', 'ReactQuery', 'Javascript', 'Rest']
      },
      {
        description:
          'Make sure features are properly covered by unit tests with react testing library and jest tests, and end-to-end level tests in cypress',
        skills: ['React', 'ReactTestingLibrary', 'Jest', 'Cypress']
      },
      {
        description:
          'Collaborate with UX designer and product manager to gather requirements and provide feedback on user stories.',
        skills: ['Collaboration']
      },
      {
        description:
          'Develop and design front-end data visualization and storyboard AngularJS single page application.',
        skills: ['Angular', 'GraphQL', 'DataVisualization']
      },
      {
        description:
          'Migrate and transit front-end application component to use React, in both custom components and platform-wide common component library.',
        skills: ['Angular', 'React']
      },
      {
        description: 'Implement backend endpoints in ruby-on-rails application when needed.',
        skills: ['Rails']
      },
      {
        description:
          'Write test code to cover features, and maintain a healthy test pyramid to provide product stability.',
        skills: ['Jest', 'Cypress', 'Enzyme', 'Storybook', 'Screener']
      },
      {
        description:
          'Develop single page application for the Audit Analytic product using AngularJS on frontend, and Jersey and Hibernate on backend api.',
        skills: ['Angular', 'Java', 'Jersey', 'Hibernate']
      },
      {
        description:
          'Provide mentoring and guidance to junior engineers, and assist team members on complex problems.',
        skills: ['Mentoring']
      }
    ]
  },
  {
    company: 'Central 1 Credit Union',
    location: 'Vancouver',
    icon: 'central1',
    position: 'Application Support Analyst and Software Developer',
    start: '2007 Jul',
    end: '2012 Nov',
    achievements: [
      {
        description:
          'Develop new features and enhance existing features for credit unions’ online banking sites, which uses Java and SQL Server 2005.',
        skills: ['Java', 'Sql']
      },
      {
        description:
          'Support the web banking product, and resolve production incidents in a timely manner.',
        skills: ['Support', 'ProblemSolving']
      }
    ]
  }
]

export default workExperiencesData
