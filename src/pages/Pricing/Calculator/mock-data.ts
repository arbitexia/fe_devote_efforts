import designIcon from '@/assets/images/design_icon.svg';
import devIcon from '@/assets/images/development_icon.svg';
import seoIcon from '@/assets/images/seo_icon.svg';

export const totalData = [
  {
    type: 'What',
    title: 'Mobile App',
    price: '$0 - $0',
    time: '0 - 0hrs',
  },
  {
    type: 'Platform',
    title: 'Mobile App',
    price: '$0 - $0',
    time: '0 - 0hrs',
  },
  {
    type: 'Design',
    title: '13-20',
    price: '$600 - $1200',
    time: '56 - 160hrs',
  },
  {
    type: 'Security',
    title: 'No Sign up required',
    price: '$600 - $1200',
    time: '5 - 24hrs',
  },
  {
    type: 'Security',
    title:
      'Complete Protection (Protection against XSS & SQL Injection) 10 % of Market - payments, sensetive info apps',
    price: '$600 - $1200',
    time: '16 - 50hrs',
  },
  {
    type: 'Dates & Locations',
    title:
      'Custom drawings on the Map (lines / routes / markers / tiles / objects)',
    price: '$600 - $1200',
    time: '8 - 24hrs',
  },
  {
    type: 'Data',
    title: 'Cloud database None',
    price: '$600 - $1200',
    time: '16 - 40hrs',
  },
];

export const mobileData = [
  {
    page: 1,
    data: [
      {
        title: 'What do you need?',
        width: 'w-50',
        description:
          'Easily calculate the costs of your project with just a few clicks. For a preise calculation, only include necessary features.',
        datas: [
          {
            type: 'card',
            text: 'Mobile Application',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'Web Service',
            icon: devIcon,
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 2,
    data: [
      {
        title: 'What services are you interested in?',
        width: 'w-30',
        description:
          'Please select what best describes your needs for the project so that we can estimate the cost of your project.',
        datas: [
          {
            type: 'card',
            text: 'Design',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'Development',
            icon: devIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'SEO',
            icon: seoIcon,
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 3,
    data: [
      {
        title: 'Your Industry',
        width: 'w-25',
        description:
          'Please, select one option what best describes your needs for the project',
        datas: [
          {
            type: 'card',
            text: 'Education',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'Healthcare',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'Social Networking',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'FinTech',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'Travel',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'E-commerce',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'Technology & Communication',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'Other',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 4,
    data: [
      {
        title: 'Choose appropriate mobile platform?',
        width: 'w-30',
        description:
          'Please select what best describes your needs for the project so that we can estimate the cost of your project.',
        datas: [
          {
            type: 'card',
            text: 'Android',
            icon: designIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'IOS',
            icon: devIcon,
            price: 1000,
            selected: false,
          },
          {
            type: 'card',
            text: 'Hybrid',
            icon: seoIcon,
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 5,
    data: [
      {
        title: 'How many approximate number of screens will your app have?',
        description: '',
        width: 'w-50',
        datas: [
          {
            type: 'check',
            text: '1-6',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: '13-20',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: '7-12',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: '21-40',
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 6,
    data: [
      {
        title: 'How will your users sign up and login into the app?',
        description:
          'Do your users need to sign-up before they begin to use your service? If your application deals with financial data, you may need a two-step authorization.',
        width: 'w-50',
        datas: [
          {
            type: 'check',
            text: 'No Sign up required',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'User Invitation Emails (deep link)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Social media login',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Email/password login',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Role based access',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Using 2 step authorization',
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 7,
    data: [
      {
        title: 'How do you wish to secure your app?',
        description:
          'Please select what best describes your needs for the project so that we can estimate the cost of your project.',
        width: 'w-100',
        datas: [
          {
            type: 'check',
            text: 'Out of the box Security (HTTPS communication) - For initial MVP versions',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Following basic OS Security Guidelines (basic security policies)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Complete Protection (Protection against XSS & SQL Injection) 10 % of Market - payments, sensetive info apps',
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 8,
    data: [
      {
        title: 'Dates & Locations',
        description: '',
        width: 'w-100',
        datas: [
          {
            type: 'check',
            text: 'Calendaring (synchronization with Calendar app)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Display of Standard Map (google / MapKit) / GEO Location Markers',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Custom drawings on the Map (lines / routes / markers / tiles / objects)',
            price: 1000,
            selected: false,
          },
        ],
      },
      {
        title: 'Where do you want to save your application data?',
        description: '',
        width: 'w-50',
        datas: [
          {
            type: 'check',
            text: 'Data Cache (LRU, RAM)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Cloud database',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Offline (persistent storage)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'None',
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 9,
    data: [
      {
        title: 'Which administration features do you need?',
        description:
          'Please select what best describes your needs for the project so that we can estimate the cost of your project.',
        width: 'w-50',
        datas: [
          {
            type: 'check',
            text: 'Performance Monitoring',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Usage Analytics',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Crash reporting ',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'User settings (on / off /enable / disable)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `User Management (Manage user's roles & access management)`,
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 10,
    data: [
      {
        title: 'Which other features will you have in your app?',
        description: '',
        width: 'w-50',
        datas: [
          {
            type: 'check',
            text: 'Push Notification',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Activity feeds or user walls (like Facebook)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Search (like Amazon)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'In-app purchases (Economist, Angry Birds)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Chatting (like Whatsapp)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Video Manipulation (crops, merge, etc)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `HashTags (#superbowl)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `People Tags (@TommyLeeJones)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Referral system (like Uber)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Audio Manipulation (crops, merge, etc)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Rating & reviews (like Yelp)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Favorites feature (like / dislike)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Media Uploading`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Tutorial (app features demostration)`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Shopping Cart`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `Images Manipulation (Picture parameters / Picture filters / Advanced (collagues, separate picture elements editing))`,
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: `User profiles`,
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    page: 11,
    data: [
      {
        title: 'Mobile specific features?',
        description: '',
        width: 'w-50',
        datas: [
          {
            type: 'check',
            text: 'Health data',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Camera/Barcodes/QR Code',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Bluetooth',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Manipulation with Device sensor data (accelerometer, gyroscope, compass, etc)',
            price: 1000,
            selected: false,
          },
        ],
      },
      {
        title: 'Social & Engagement',
        description: '',
        width: 'w-50',
        datas: [
          {
            type: 'check',
            text: 'Messaging',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Social API (manipulation with Social accounts data)',
            price: 1000,
            selected: false,
          },
          {
            type: 'check',
            text: 'Social sharing',
            price: 1000,
            selected: false,
          },
        ],
      },
      {
        title: 'Social & Engagement',
        description: '',
        width: 'w-50',
        datas: [
          {
            type: 'check',
            text: 'Connect to one or more third party services (Enter amount of services)',
            price: 1000,
            selected: false,
          },
        ],
      },
    ],
  },
];

export const webData = [
  {
    title: 'What do you need?',
    description:
      'Easily calculate the costs of your project with just a few clicks. For a preise calculation, only include necessary features.',
  },
];
