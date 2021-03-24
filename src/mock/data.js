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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mimic_landing.png',
    title: 'Mimic\'s Blackberry',
    info: 'Co-Developer',
    info2: 'More stuff',
    url: 'https://www.mimics-blackberry.com/',
    repo: 'https://github.com/blamb888/mimics-blackberry', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'costume_landing.png',
    title: 'Costume Rental / Airbnb Clone',
    info: 'Co-Developer',
    info2: '',
    url: 'https://rails-costume-airbnb-clone.herokuapp.com/',
    repo: 'https://github.com/blamb888/rails-costume-airbnb-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'warband_landing.png',
    title: 'Fictional Warband Creator',
    info: 'Solo Project',
    info2: '',
    url: 'http://rails-warband-creator.herokuapp.com/',
    repo: 'https://github.com/Wallace-A/rails_warband_creator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'noirflix_landing.png',
    title: 'Noirflix',
    info: 'Solo Project',
    info2: '',
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
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
