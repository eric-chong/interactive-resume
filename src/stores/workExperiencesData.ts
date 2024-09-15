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
          'Spearheaded the implementation of modular, scalable micro frontend architecture for an AI chat assistant using React, web components, and integrated REST API and WebSocket server communications.',
        skills: ['React', 'Redux', 'Websocket', 'Rest', 'MicroFrontend', 'Typescript']
      },
      {
        description:
          'Led the development of a real-time Python script editor SPA with React and TypeScript, utilizing WebSocket messages for live communication with backend script execution environments, improving developer productivity.',
        skills: ['React', 'Redux', 'Websocket', 'Typescript', 'Rest']
      },
      {
        description:
          'Designed and built a data-driven Analytic Robot SPA with React, utilizing React Router, Redux Toolkits, and React Query to handle large datasets and optimize performance.',
        skills: ['React', 'ReactRouter', 'Redux', 'ReactQuery', 'Javascript', 'Rest']
      },
      {
        description:
          'Ensured high-quality, stable frontend applications through comprehensive unit testing with React Testing Library and Jest, along with end-to-end testing using Cypress.',
        skills: ['React', 'ReactTestingLibrary', 'Jest', 'Cypress', 'Javascript']
      },
      {
        description:
          'Collaborated closely with UX designers, QA, product managers and backend developers, providing feedback on user stories and aligning technical solutions with product vision.',
        skills: ['Collaboration']
      },
      {
        description:
          'Designed and implemented front-end data visualization and dashboards for analytical applications using AngularJS.',
        skills: ['Angular', 'GraphQL', 'DataVisualization', 'Javascript']
      },
      {
        description:
          'Orchestrated the migration of legacy AngularJS components to React, improving application maintainability and performance across multiple projects.',
        skills: ['Angular', 'React', 'Javascript']
      },
      {
        description:
          'Contributed to backend development by creating and maintaining API endpoints within a Ruby-on-Rails application when required.',
        skills: ['Rails']
      },
      {
        description:
          'Wrote and maintained test code to cover features, establishing a robust test pyramid to ensure product stability.',
        skills: ['Jest', 'Cypress', 'Enzyme', 'Storybook', 'Screener']
      },
      {
        description:
          'Led the development of a SPA for the Audit Analytic product, utilizing AngularJS for frontend and Jersey and Hibernate on the backend.',
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
  },
  {
    company: 'IBM Hong Kong Ltd',
    location: 'Hong Kong',
    icon: 'ibm',
    position: 'IT Specialist',
    start: '2004 Oct',
    end: '2005 Oct',
    achievements: [
      {
        description:
          'Enhanced the capabilities of the teller system at DBS Bank, utilizing CT (Consumer Transaction) and OS2 as the development language and platform.',
        skills: ['CT', 'Java']
      },
      {
        description:
          "Held the responsibility for daily support and proactive investigation into production problems, ensuring the system's smooth operation and addressing any issues promptly.",
        skills: ['Support', 'ProblemSolving']
      }
    ]
  },
  {
    company: 'Innovision Technologies',
    location: 'Hong Kong',
    position: 'System Programmer',
    start: '2003 Jul',
    end: '2004 Oct',
    achievements: [
      {
        description:
          'Developed and designed a robust web-based Warehouse Management System using ASP and SQL Server 2000, ensuring efficient and streamlined warehouse operations.',
        skills: ['ASP', 'Sql']
      },
      {
        description:
          "Conducted a comprehensive analysis of an existing accounting system developed by a third party, meticulously crafting detailed database documentation and specifications in alignment with the system's requirements.",
        skills: ['Sql']
      }
    ]
  }
]

export default workExperiencesData
