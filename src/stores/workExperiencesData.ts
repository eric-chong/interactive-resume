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
          'Spearheaded the research and implementation of micro frontend architecture for an AI chat assistant component utilizing React and web components, integrating REST API and WebSocket server communications.',
        skills: ['React', 'Redux', 'Websocket', 'Rest', 'MicroFrontend', 'Typescript']
      },
      {
        description:
          'Led the development of a Python script editor single-page application with React TypeScript, leveraging WebSocket messages for real-time communication with the backend script execution environment.',
        skills: ['React', 'Redux', 'Websocket', 'Typescript', 'Rest']
      },
      {
        description:
          'Crafted an Analytic Robot single-page application with React, incorporating various frontend libraries such as React Router, Redux Toolkits, and React Query.',
        skills: ['React', 'ReactRouter', 'Redux', 'ReactQuery', 'Javascript', 'Rest']
      },
      {
        description:
          'Ensured comprehensive coverage of features through meticulous unit testing with React Testing Library and Jest, along with end-to-end testing using Cypress.',
        skills: ['React', 'ReactTestingLibrary', 'Jest', 'Cypress', 'Javascript']
      },
      {
        description:
          'Collaborated closely with UX designers and product managers, gathering requirements and providing constructive feedback on user stories.',
        skills: ['Collaboration']
      },
      {
        description:
          'Designed and developed front-end data visualization and storyboard for an AngularJS single-page application.',
        skills: ['Angular', 'GraphQL', 'DataVisualization', 'Javascript']
      },
      {
        description:
          'Orchestrated the migration of frontend application components to React, both in custom components and within a platform-wide common component library.',
        skills: ['Angular', 'React', 'Javascript']
      },
      {
        description:
          'Implemented backend endpoints within a Ruby-on-Rails application when required.',
        skills: ['Rails']
      },
      {
        description:
          'Wrote and maintained test code to cover features, establishing a robust test pyramid to ensure product stability.',
        skills: ['Jest', 'Cypress', 'Enzyme', 'Storybook', 'Screener']
      },
      {
        description:
          'Developed a single-page application for the Audit Analytic product using AngularJS on the frontend and Jersey and Hibernate on the backend API.',
        skills: ['Angular', 'Java', 'Jersey', 'Hibernate', 'Javascript']
      },
      {
        description:
          'Offered mentorship and guidance to junior engineers, actively assisting team members in solving complex problems.',
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
          'Developed new features and improvements for online banking sites tailored for credit unions, leveraging Java and SQL Server 2005 technologies.',
        skills: ['Java', 'Sql']
      },
      {
        description:
          'Played a pivotal role in supporting and maintaining the web banking product, promptly resolving production incidents to ensure uninterrupted service.',
        skills: ['Support', 'ProblemSolving']
      },
      {
        description:
          'Collaborated closely with client support and business analysts, ensuring a thorough understanding of incidents and project requirements to facilitate effective problem resolution and project delivery.',
        skills: ['Support', 'Collaboration']
      }
    ]
  },
  {
    company: 'Li & Fung (Trading) Ltd',
    location: 'Hong Kong',
    icon: 'lifung',
    position: 'Software Developer',
    start: '2005 Nov',
    end: '2007 May',
    achievements: [
      {
        description:
          'Enhanced the functionality of a web-based application dedicated to export trading and supply chain management, developed using ASP and MS SQL Server 2000.',
        skills: ['ASP', 'Sql']
      },
      {
        description:
          'Provided robust support for and made enhancements to MS SQL Server 2000 DTS (Data Transformation Services), facilitating seamless data transfer between Oracle core database and MS SQL Server database.',
        skills: ['VB', 'Sql']
      }
    ]
  }
]

export default workExperiencesData
