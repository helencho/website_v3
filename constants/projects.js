import { TECH } from 'constants/technology';

export const PROJECTS = [
  {
    title: 'Website V3',
    subTitle: 'Personal website with a bold (re)design.',
    description:
      "Change can be good. I decided to take myself from clean and simple to bold and colorful. Designed from scratch. Statically rendered via Next.js. You're looking at it right now.",
    technologies: [TECH.NEXT, TECH.REACT, TECH.CSS3, TECH.SASS],
    ctas: [
      {
        text: 'Source',
        href: 'https://github.com/helencho/website_v3',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Website V2',
    subTitle: 'Personal website with a simple (re)design.',
    description:
      'A website that encapsulates who I am - my projects, doodles and designs.',
    technologies: [TECH.REACT, TECH.CSS3],
    ctas: [
      {
        text: 'Source',
        href: 'https://github.com/helencho/website',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Smood',
    subTitle: 'Mood tracker + visualizer. Be mindful.',
    description:
      'A progressive web app for tracking daily moods and activities. Provides visual representations of moods using Recharts.js, implements secure authentication using Bcrypt, and tracks state changes through multiple components using Redux. Minimalistic animations for an intuitive user experience.',
    technologies: [TECH.NODE, TECH.REACT, TECH.REDUX, TECH.POSTGRES, TECH.CSS3],
    ctas: [
      {
        text: 'Live',
        href: 'https://smood.herokuapp.com/',
      },
      {
        text: 'Source',
        href: 'https://github.com/helencho/smood',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Elevate',
    subTitle: 'Manage your job applications and be rewarded for it.',
    description:
      'A job application management platform featuring an SMS/email reminder system using Twilio and Nodemailer. Implements an incentivized and gamified reward system with custom-designed badges. Persists user across sessions using Passport.js. Manages file upload on cloud storage on AWS S3 buckets.',
    technologies: [
      TECH.S3,
      TECH.TWILIO,
      TECH.NODE,
      TECH.REACT,
      TECH.POSTGRES,
      TECH.CSS3,
    ],
    ctas: [
      {
        text: 'Live',
        href: 'http://www.elevate.careers/',
      },
      {
        text: 'Source',
        href: 'https://github.com/davidyshin/elevate',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Leafbit',
    subTitle: 'Live healthier and greener with this Fitbit clock face.',
    description:
      'A clock face built using Fitbit SDK to motivate users to lead healthier lifestyles. We tackled the Fitbit Challenge at Angel Hack 2018 Manhattan. Leafbit pairs with a web + native app for users to buy seeds and set goals, watch seeds grow into trees as users progress towards their activity goals, and plant fully mature trees on the map.',
    technologies: [TECH.FITBIT, TECH.JS, TECH.CSS3],
    ctas: [
      {
        text: 'Live',
        href: 'https://leafbit.herokuapp.com/',
      },
      {
        text: 'Source',
        href: 'https://github.com/helencho/leafbit',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Madlify',
    subTitle: 'Mad Libs inspired phrasal template word game.',
    description:
      'A colorful Mad Libs inspired phrasal template word game that prompts users for a list of words to be substituted for blanks in a story.',
    technologies: [TECH.REACT, TECH.CSS3],
    ctas: [
      {
        text: 'Live',
        href: 'https://madlify.netlify.com/',
      },
      {
        text: 'Source',
        href: 'https://github.com/helencho/madlify',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },

  {
    title: 'Website',
    subTitle: 'The first ever personal website.',
    description: '',
    technologies: [TECH.REACT, TECH.CSS3],
    ctas: [
      {
        text: 'Source',
        href: 'https://github.com/helencho/helencho.github.io',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'TrainMe',
    subTitle: 'Find vocational courses in the NYC area.',
    description:
      'A web application that connects individuals looking to start a new career with vocational resources offered in the New York City area. Interacts with ​NYC Open Data API​ to fetch course data. Winner of best user experience at C4Q Access Code’s third annual Hackathon.',
    technologies: [TECH.REACT, TECH.CSS3],
    ctas: [
      {
        text: 'Live',
        href: 'https://trainme.netlify.com/',
      },
      {
        text: 'Source',
        href: 'https://github.com/helencho/trainme',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Connect Four',
    subTitle: 'Connect four to win.',
    description:
      "It's a game from my (and possibly your) childhood. Unlike traditional Connect Four games, the pieces are black and white. Take turns playing with a friend. I built this to prepare for interviews, practice my algorithms, and familiarize myself with matrices.",
    technologies: [TECH.REACT, TECH.CSS3],
    ctas: [
      {
        text: 'Live',
        href: 'https://cccc.netlify.com/',
      },
      {
        text: 'Source',
        href: 'https://github.com/helencho/connectFour',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Sinistagram',
    subTitle: 'Instagram inspired photo-sharing platform for the sinister.',
    description:
      "A photo-sharing platform that looks eerily similar to Instagram. Interacts with a RESTful API to fetch data that populates the feed, user profiles, and allows users to publish posts. Sign up if you're evil.",
    technologies: [TECH.NODE, TECH.REACT, TECH.POSTGRES, TECH.CSS3],
    ctas: [
      {
        text: 'Source',
        href: 'https://github.com/helencho/sinistagram',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Sh*t Peter Says',
    subTitle: 'Farewell gift to the instructor.',
    description:
      'My full stack web development instructor said the darnest things. My fellows and I built a website that randomly generates those darn things he said.',
    technologies: [TECH.JS, TECH.HTML, TECH.CSS3],
    ctas: [
      {
        text: 'Source',
        href: 'https://github.com/helencho/wisdom-generator',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Snake',
    subTitle: "Eat food. Grow. Don't crash.",
    description:
      'A classic game of snake built on Canvas by following a freeCodeCamp tutorial on Medium.',
    technologies: [TECH.JS, TECH.CANVAS, TECH.CSS3],
    ctas: [
      {
        text: 'Live',
        href: 'https://helencho.github.io/snake/',
      },
      {
        text: 'Source',
        href: 'https://github.com/helencho/snake',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Concentration',
    subTitle: 'Memory matching game.',
    description:
      'A memory matching game where a user must flip over the same cards in pairs to win.',
    technologies: [TECH.REACT, TECH.CSS3],
    ctas: [
      {
        text: 'Live',
        href: 'https://concentration.netlify.com/',
      },
      {
        text: 'Source',
        href: 'https://github.com/helencho/concentration',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
  {
    title: 'Calculator',
    subTitle: 'Google Pixel inspired calculator.',
    description: "It's a calculator but it looks like a Google calculator.",
    technologies: [TECH.REACT, TECH.CSS3],
    ctas: [
      {
        text: 'Live',
        href: 'https://react-calculator.netlify.com/',
      },
      {
        text: 'Source',
        href: 'https://github.com/helencho/react-calculator',
      },
    ],
    image: {
      alt: 'Placeholder for image description',
      src: '/images/rectangle.png',
    },
  },
];
