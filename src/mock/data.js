import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Wallace | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Andrew',
  name: 'Wallace',
  subtitle: 'Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Full stack web developer based in Yokohama.',
  paragraphTwo: 'Passionate about problem solving and building applications to improve people\'s lives. Can usually be found coding, painting miniatures, or exploring the streets of Japan.',
  paragraphThree: 'HTML / CSS / Javascript / PostgreSQL / React / Github',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mimic_landing.png',
    title: 'Mimic\'s Blackberry (Co-Developer)',
    info: 'An in-game calendar app for dungeon and dragons players to track events and take notes on their adventures. Two week prototype built for the final project for Le Wagon Tokyo bootcamp.',
    info2: 'HTML / CSS / Javascript / Ruby on Rails',
    url: 'https://www.mimics-blackberry.com/',
    repo: 'https://github.com/blamb888/mimics-blackberry', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'costume_landing.png',
    title: 'Costume Rental / Airbnb Clone (Backend Developer)',
    info: 'Costume rental site built as part of a one-week prototype sprint to build an airbnb style marketplace.',
    info2: 'HTML / CSS / Javascript / Ruby on rails / Mapbox',
    url: 'https://rails-costume-airbnb-clone.herokuapp.com/',
    repo: 'https://github.com/blamb888/rails-costume-airbnb-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'warband_landing.png',
    title: 'Fictional Warband Creator (Solo Project)',
    info: 'Warband creator for a fictional miniatures game. Built over two days to improve my knowledge of css.',
    info2: 'HTML / CSS / Javascript / Ruby on Rails',
    url: 'http://rails-warband-creator.herokuapp.com/',
    repo: 'https://github.com/Wallace-A/rails_warband_creator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'noirflix_landing.png',
    title: 'Noirflix (Solo Project)',
    info: 'Do you like detective movies? A netflix clone built over a weekend to learn React.',
    info2: 'HTML / CSS / Javascript / React',
    url: 'https://noirflix.web.app/',
    repo: 'https://github.com/Wallace-A/noirflix-react-netflix-clone-', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wallace-a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Wallace-A',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/strange_generator/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
