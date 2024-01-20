import type { Project } from '@/types/Project'

const projectData: Array<Project> = [
  {
    title: 'Dynamic Portfolio',
    icon: 'vue',
    description:
      'This dynamic portfolio not only showcases my professional journey but also leverages modern web technologies and user-friendly interfaces to captivate and inform visitors.',
    skills: ['Vue', 'Pinia', 'Vuetify'],
    year: '2023',
    highlights: [
      {
        description:
          'Leveraged the latest Vue 3 framework to build a high-performance interactive resume.'
      },
      {
        description:
          'Implemented state management with Pinia, ensuring efficient data handling and a seamless user experience.'
      },
      {
        description:
          'Utilized Vuetify for a modern design, incorporating a variety of UI components to enhance visual appeal and user interaction.'
      },
      {
        description:
          'Organized information in a clear and concise manner, making it easy for visitors to navigate through your professional journey.'
      },
      {
        description:
          'Deployed the interactive resume on Vercel, ensuring optimal performance and reliability with seamless updates.'
      }
    ],
    links: {
      github: 'https://github.com/eric-chong/interactive-resume'
    }
  },
  {
    title: 'Hymn Management with MEAN.js',
    icon: 'meanjs',
    description:
      'Hymn management system powered by the MEAN.js stack. Seamlessly blending MongoDB for flexible data storage, AngularJS for a dynamic frontend, and Node.js with Express.js for a robust backend',
    skills: ['Angular', 'Javascript', 'Express', 'Rest', 'MongoDb', 'Mongoose'],
    year: '2012',
    highlights: [
      {
        description:
          'Employed the MEAN.js stack (MongoDB, Express.js, AngularJS, Node.js) to create a robust and efficient system for managing hymns.'
      },
      {
        description:
          'Implemented a dynamic frontend using AngularJS, offering users an interactive interface for browsing and accessing hymns.'
      },
      {
        description:
          'Utilized Node.js and Express.js to build an efficient backend, ensuring seamless communication between the server and the AngularJS frontend.'
      },
      {
        description:
          'Managed hymn data effectively with MongoDB, a NoSQL database, allowing for flexible and scalable storage of hymn-related information.'
      }
    ],
    links: {
      github: 'https://github.com/eric-chong/hymn-app'
    }
  }
]

export default projectData
