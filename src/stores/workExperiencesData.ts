import { type WorkExperience } from '@/types'

const workExperiencesData: WorkExperience[] = [
  {
    company: 'Galvanize, now Diligent',
    location: 'Vancouver',
    icon: 'diligent',
    position: 'Senior Frontend Engineer - Frontend',
    start: '2012 Nov',
    achievements: [
      {
        description:
          'Develop python script editor single page application with React typescript, and uses websocket message to have real time communication with backend script execution environment.',
        skills: ['react', 'redux', 'websocket', 'typescript']
      },
      {
        description:
          'Develop Analytic Robot single page application with React and other frontend libraries such as react router, redux toolkits, react query etc.',
        skills: ['react', 'react router', 'redux', 'react query']
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
        skills: ['java', 'sql']
      },
      {
        description:
          'Support the web banking product, and resolve production incidents in a timely manner.',
        skills: ['support', 'problem solving']
      }
    ]
  }
]

export default workExperiencesData
