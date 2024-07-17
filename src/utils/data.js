const data = [
  {
    title: 'Women in Tech Meetup',
    date: 'Present',
    description:
      'I designed and engineered a website for the Women in Tech community, creating a safe and supportive environment for networking, sharing success stories and failures, and mutual support.',
    type: 'Webpage',
    tech: ['JavaScript', 'HTML/CSS', 'Figma'],
    github: null,
    deploy: null,
    figma:
      'https://www.figma.com/design/LDxQFxckymwEPwPx6ZjUiU/Untitled?node-id=0-1&t=i4bQFrbK0qMGQ2o8-1',
    id: 'wit',
    imgUrl: '../assets/images/wit.png',
    component: 'Wit',
    role: 'Web Designer',
    category: 'Design'
  },
  {
    title: 'Busy Day',
    date: 'Feb 2024',
    description:
      '🥇 1st place in Code Jam! Cozy to-do list inspired by Notion design. Cooked in a few days by the team of aspiring engineers',
    type: 'Web Application',
    tech: ['JavaScript', 'HTML/CSS', 'Figma'],
    github: 'https://github.com/skovakina/spring-to-do',
    deploy: 'https://skovakina.github.io/spring-to-do/',
    figma:
      'https://www.figma.com/design/snKqGDLVf5l6BLb7EPI1m4/Busy-Day-To-Do?node-id=0-1&t=RH4glBJ2akB7osTE-1',
    id: 'busy-day',
    imgUrl: '../assets/images/busy-day.jpg',
    component: 'BusyDay',
    role: 'Lead Engineer / Product designer',
    category: 'Development'
  },
  {
    title: 'News Explorer',
    date: 'Feb 2024',
    description:
      'A service where users can search for news articles and save them to their profiles. When the user enters a keyword in the search bar, the website sends a request to the News API service, finds all the relevant articles over the last week, and displays a list of cards for each of them.',
    type: 'Web Application',
    tech: ['React', 'API', 'Authentication'],
    github: 'https://github.com/skovakina/news-explorer',
    deploy: 'https://svko-news-explorer.netlify.app/',
    figma: null,
    id: 'news-explorer',
    imgUrl: '../assets/images/news-explorer.jpg',
    component: 'NewsExplore',
    role: 'Fullstack Engineer',
    category: 'Development'
  },
  {
    title: 'Merry Mailers',
    date: 'December 2023',
    description:
      '🥇 1st place in Code Jam! In just one week, our team of 2 software engineers and a data scientist created a landing page to showcase responsive web design and Leaflet library integration.',
    type: 'Web Application',
    tech: ['JavaScript', 'HTML/CSS', 'BEM'],
    github: 'https://github.com/skovakina/jingle-bells-jam',
    deploy: 'https://skovakina.github.io/jingle-bells-jam/',
    figma:
      'https://www.figma.com/file/SpY6DFB6h4iw6Zu3EgVn7Z/Merry-Codemas?type=design&node-id=0%3A1&mode=design&t=GhuLCnpvvt5qYUBL-1',
    id: 'busy-day',
    imgUrl: '../assets/images/merry-mailers.jpg',
    component: 'Merry Mailers',
    role: 'Frontend Engineer',
    category: 'Development'
  },
  {
    title: 'Around the US',
    date: 'Nov 2023',
    description:
      'A dynamic web project designed to showcase responsive web design principles and interactive web functionalities. This project allows users to edit their profiles and upload new images, providing a personalized experience across various devices.',
    type: 'Web Application',
    tech: ['JavaScript', 'HTML/CSS', 'BEM'],
    github: 'https://github.com/skovakina/aroundtheus',
    deploy: 'https://skovakina.github.io/aroundtheus/',
    figma: null,
    id: 'busy-day',
    imgUrl: '../assets/images/around-the-us.jpg',
    component: 'AroundTheUS',
    role: 'Fullstack Engineer',
    category: 'Development'
  },
  {
    title: 'Music App',
    date: 'May 2022',
    description:
      'Project based on the latest features of Vue 3 including Composition API, Vue Router, authentication and more.',
    type: 'Web Application',
    tech: ['Vue.js', 'Tailwind', 'Composition API', 'Vite'],
    github: 'https://github.com/skovakina/Vue-music-app',
    deploy: 'https://music-seven-orpin.vercel.app/',
    figma: null,
    id: 'music-app',
    imgUrl: '../assets/images/music-app.jpg',
    component: 'AroundTheUS',
    role: 'Fullstack Engineer',
    category: 'Development'
  },
  {
    title: 'Forkify',
    date: 'Dec 2021',
    description:
      'Modern application for searching for a recipe or an ingredient. Explore plenty of recipes of pizza!',
    type: 'Web Application',
    tech: ['JavaScript', 'Parcel', 'Babel'],
    github: 'https://github.com/skovakina/JS-forkify',
    deploy: 'https://forkify-app-glance.netlify.app/',
    figma: null,
    id: 'forkify',
    imgUrl: '../assets/images/forkify.jpg',
    component: 'Forkify',
    role: 'Frontend Engineer',
    category: 'Development'
  },
  {
    title: 'Mupty',
    date: 'Dec 2021',
    description:
      'Simple workout tracker for fans of running and cycling with geolocation API, maps and markers and saving data.',
    type: 'Web Application',
    tech: ['JavaScript', 'API', 'Leaflet Library'],
    github: 'https://github.com/skovakina/JS-mapty',
    deploy: 'https://mapty-sk.netlify.app/',
    figma: null,
    id: 'mapty',
    imgUrl: '../assets/images/mapty.jpg',
    component: 'Mupty',
    role: 'Frontend Engineer',
    category: 'Development'
  },
  {
    title: 'Trello',
    date: 'April 2022',
    description:
      'Inspired by an all-in-one booking app, featuring the full power of flexbox layout',
    type: 'Web Application',
    tech: ['SASS', 'Flexbox'],
    github: 'https://github.com/skovakina/trello',
    deploy: 'https://skovakina.github.io/trello',
    figma: null,
    id: 'trillo',
    imgUrl: '../assets/images/trello.jpg',
    component: 'Trello',
    role: 'Frontend Engineer',
    category: 'Development'
  },
  {
    title: 'Career Aid',
    date: 'September 2023',
    description: 'I designed a platform to help mentors and their mentees find each other.',
    type: 'Product Design',
    tech: ['Use Research', 'UX Design', 'Persona'],
    github: null,
    deploy: null,
    id: 'trillo',
    imgUrl: '../assets/images/career-aid.jpg',
    component: 'CareeAid',
    role: 'UX Designer',
    category: 'Design'
  }
]

export default data