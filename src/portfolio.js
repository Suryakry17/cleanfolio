const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jayasuriya',
  role: 'Front End Developer',
  description:
    'A clean and responsive personal portfolio website built using React. It showcases my skills, projects, and contact information in a simple and professional design. This project highlights my frontend development abilities and GitHub workflow.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/suryakry17',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
 {
  name: 'WeatherScope',
  description:
    'A React-based weather web app that displays real-time weather information using the OpenWeatherMap API and a clean responsive UI.',
  stack: ['React', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
  sourceCode: 'https://github.com/YourUsername/weatherscope',   // replace with actual repo
  livePreview: 'https://weatherscope.netlify.app',              // replace with actual deployed site
}
,
  {
  name: 'My Portfolio Website',
  description:
    'A fully responsive personal portfolio built with React. Includes sections like About, Skills, Projects, and Contact. Hosted online with clean design and source code available.',
  stack: ['React', 'CSS', 'JavaScript'],
  sourceCode: 'https://github.com/YourUsername/cleanfolio', // update with your repo
  livePreview: 'https://YourPortfolioLink.netlify.app', // update with your actual hosted link
}
,
  {
  name: 'E-Commerce UI',
  description:
    'Built a basic e-commerce interface using React. Features include product listing, filtering by category, product detail view, and clean UI styling.',
  stack: ['React', 'CSS', 'Fetch API'],
  sourceCode: 'https://github.com/Suryakry17/ecommerce',
  livePreview: 'https://Suryakry17.github.io/ecommerce',
}
,
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
 
  
 
  'Git'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jayasurya28064@gmail.com',
}

export { header, about, projects, skills, contact }
