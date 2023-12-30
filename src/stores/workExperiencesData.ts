import { type WorkExperience } from '@/types'

const workExperiencesData: WorkExperience[] = [
  {
    company: 'Diligent Corporation, formerly Galvanize',
    icon: 'diligent',
    position: 'Senior Frontend Engineer - Frontend',
    start: '2012 Nov',
    achievements: [
      {
        description:
          'Develop python script editor single page application with React typescript, and uses websocket message to have real time communication with backend script execution environment.',
        skills: ['react', 'redux', 'websocket', 'typescript']
      }
    ]
  }
]

export default workExperiencesData
