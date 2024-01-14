import type { Project } from '@/types/Project'

const projectData: Array<Project> = [
  {
    title: 'Interactive resume',
    icon: 'vue',
    description: 'Resume that you can filter on the skills to highlight',
    skills: ['Vue', 'Pinia', 'Vuetify'],
    year: '2023',
    highlights: [{ description: 'Use some description here' }],
    links: {
      github: 'https://github.com'
    }
  },
  {
    title: 'Hymn App',
    icon: 'meanjs',
    description: 'Hymn management app',
    skills: ['Angular', 'Javascript', 'Express', 'Rest', 'MongoDb', 'Mongoose'],
    year: '2012',
    highlights: [{ description: 'Use some description here' }],
    links: {
      github: 'https://github.com'
    }
  }
]

export default projectData
