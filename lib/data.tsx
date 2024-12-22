import { platformsAndServicesType, QuestionItemProps, TestimonialType, UpworkClientsType, WorkExType } from './types';

import { AWSIcon } from '@/components/icons/aws-icon';

import ConstructionStoreLogo from '@/public/Construction-Materials-Chain-Store.jpeg';
import MetalFacilityLogo from '@/public/Metalworking-cutting-Facility.jpg';
import NourStore from '@/public/al-nour-retail-store-and-library.jpg';
import BaskHealthLogo from '@/public/bask_health_logo.jpg';
import BriocheDoreeLogo from '@/public/brioche-doree-restaurant-france.jpeg';
import ColayoLogo from '@/public/colayo.webp';
import CraveRestaurantLogo from '@/public/crave-restaurant.jpg';
import IsearchArchivesLogo from '@/public/isearch-archive-london.png';
import ThedogsmomLogo from '@/public/thedogsmom.jpg';

import AbdullahMagdyImg from '@/public/abdullah-magdy-professional-b2b-ecom-psychology.jpeg';
import HafsaAhmedImg from '@/public/hafsa-mubarak-professional-software-developer.jpeg';
import IsraaAlaaImg from '@/public/israa-alaa-senior-business-developer-at-cura-b2b-sales.jpeg';
import MahmoudSolimanImg from '@/public/mahmoud-soliman-isearch-archives-british-unpublished-documents-london.jpg';
import OsamaMahmoudImg from '@/public/osama-mahmoud-upwork-top-rated-developer.jpeg';
import ShaimaaMahmoudImg from '@/public/shimaa-fathy-zaki-professional-flutter-developer.jpg';
import UpworkJob from '@/public/upwork.png';
import VerinoicaImg from '@/public/veronica-stoddart-thedogsmom-com-writer-dog-coach.jpg';
import YTIcon from '@/public/youtube.webp';
import { StaticImageData } from 'next/image';

const platformsAndServices: platformsAndServicesType[] = [
  {
    title: 'AWS',
    startDate: '2020',
    icon: <AWSIcon />,
    tooltip: 'Amazon Web Services - Cloud computing platform offering computing power, storage, and more.',
    span: 12,
    colSpan: 2,
    services: [
      { name: 'EC2', tooltip: 'Virtual servers in the cloud' },
      { name: 'S3', tooltip: 'Scalable storage service' },
      { name: 'Lambda', tooltip: 'Serverless compute' },
      { name: 'IAM', tooltip: 'Manage user access and permissions' },
      { name: 'Amplify', tooltip: 'Build and deploy modern web and mobile apps' },
      { name: 'CloudWatch', tooltip: 'Monitoring and logging for AWS resources' },
      { name: 'Lightsail', tooltip: 'Simple VPS for small apps and websites' },
      { name: 'EBS', tooltip: 'Block storage for EC2 instances' },
      { name: 'Security Groups', tooltip: 'Virtual firewalls for controlling traffic to your resources' },
      { name: 'Trusted Advisor', tooltip: 'Best practices for AWS optimization and security' }
      // { name: 'Marketplace', tooltip: 'Preconfigured software and OS images for AWS resources' }
    ]
  },
  {
    title: 'Cloudflare',
    startDate: '2020',
    icon: <AWSIcon />,
    span: 12,
    tooltip: 'Cloudflare - Provides DDoS protection, security, and CDN services.',
    services: [
      { name: 'Workers', tooltip: 'Serverless compute platform to run custom code' },
      { name: 'Pages', tooltip: 'Deploy static sites and web applications easily' },
      { name: 'CDN', tooltip: 'Content Delivery Network' },
      { name: 'Analytics', tooltip: 'Privacy-first website performance and security insights' },
      { name: 'DDoS Protection', tooltip: 'Cloud-based security for websites' },
      { name: 'Firewall Rules', tooltip: 'Custom rules to filter and control incoming traffic' },
      { name: 'Caching Rules', tooltip: 'Advanced caching configuration for better performance' },
      { name: 'DNS', tooltip: 'Fast and secure domain name system management' },
      // { name: 'WAF', tooltip: 'Web Application Firewall to block malicious traffic' },
      { name: 'Email Routing', tooltip: 'Forward emails from your custom domain to Gmail' }
    ]
  },
  {
    title: 'Vercel',
    startDate: '2020',
    icon: <AWSIcon />,
    span: 6,
    tooltip: 'Vercel - Platform for deploying frontend and full-stack applications with serverless architecture.',
    services: [
      { name: 'Hosting', tooltip: 'Deploy static sites, Next.js apps, and more' },
      { name: 'Serverless Functions', tooltip: 'Run serverless functions with ease' },
      { name: 'Edge Functions', tooltip: 'Run functions closer to users for low latency' },
      { name: 'CI/CD', tooltip: 'Automatic deployment on each commit with preview deployments & Auto rollbacks' }
    ]
  },
  {
    title: 'GitHub',
    startDate: '2018',
    icon: <AWSIcon />,
    span: 6,
    tooltip: 'GitHub - Version control, code hosting, and collaboration platform.',
    services: [
      { name: 'Version Control', icon: <AWSIcon />, tooltip: 'Version Control stuff' },
      { name: 'GitHub Actions', icon: <AWSIcon />, tooltip: 'CI/CD automation' },
      // { name: 'Repositories', icon: <AWSIcon />, tooltip: 'Version control for code' },
      { name: 'Codespaces', icon: <AWSIcon />, tooltip: 'Cloud development environments' }
    ]
  },
  {
    title: 'PlanetScale',
    startDate: '2021',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'PlanetScale - A scalable and highly available MySQL database as a service.',
    services: [
      {
        name: 'Managed MySQL Databases',
        tooltip: 'Fully managed MySQL databases with branching & scaling capabilities'
      }
    ]
  },
  {
    title: 'WordPress',
    startDate: '2021',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'WordPress - Top CMS',
    services: []
  },
  {
    title: 'Neon',
    startDate: '2021',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'Neon - A scalable and highly available Postgres database as a service.',
    services: [
      { name: 'Managed Postgres Databases', tooltip: 'Fully managed Postgres databases with scaling capabilities' }
    ]
  },
  {
    title: 'Aiven.io',
    startDate: '2022',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'Aiven - Provides managed cloud services for various open-source technologies.',
    services: [
      { name: 'Managed Databases', tooltip: 'Fully managed cloud databases for PostgreSQL, MySQL, Kafka, and more' }
      // { name: 'Kafka', tooltip: 'Managed Kafka for stream processing' },
      // { name: 'Redis', tooltip: 'Managed Redis database for caching' },
      // { name: 'Elasticsearch', tooltip: 'Managed Elasticsearch service for searching and analyzing data' }
    ]
  },
  {
    title: 'Firebase',
    startDate: '2019',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'Firebase - Mobile and web application development platform from Google.',
    services: [
      { name: 'Firestore', tooltip: 'NoSQL database for building real-time apps' },
      { name: 'Authentication', tooltip: 'User authentication service' }
      // { name: 'Hosting', tooltip: 'Deploy web apps and static websites easily' },
      // { name: 'Cloud Functions', tooltip: 'Serverless functions triggered by events' }
    ]
  },
  {
    title: 'PostHog',
    startDate: '2023',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'PostHog - Product analytics platform for event tracking and analysis.',
    services: [
      { name: 'Event Tracking', tooltip: 'Track user events and behavior in real-time' },
      // { name: 'Feature Flags', tooltip: 'Control feature rollouts and experiments' },
      { name: 'Session Replay', tooltip: 'Record and replay user sessions for insights' }
    ]
  },
  {
    title: 'Resend',
    startDate: '2023',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'Resend - Email API and service provider for sending transactional emails.',
    services: [
      { name: 'Transactional Emails', tooltip: 'Send confirmation, notifications, and other emails' },
      { name: 'Templates', tooltip: 'Create and send email templates for personalized messages' }
    ]
  },
  {
    title: 'React.email',
    startDate: '2023',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'React.email - A library to build email templates using React components.',
    services: [{ name: 'Email Templates', tooltip: 'Build responsive email templates using React components' }]
  },
  {
    title: 'Render.com',
    startDate: '2021',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'Render - A platform that allows developers to deploy full-stack apps and static sites.',
    services: [
      { name: 'Web Services', tooltip: 'Deploy full-stack web services and apps' },
      { name: 'Databases', tooltip: 'Managed PostgreSQL and Redis databases' }
      // { name: 'Cron Jobs', tooltip: 'Run scheduled tasks in the cloud' }
    ]
  },
  // {
  //   title: 'Railway.app',
  //   startDate: '2021',
  //   icon: <AWSIcon />,
  //   span: 4,
  //   tooltip: 'Railway - Developer platform for building and deploying apps.',
  //   services: [
  //     { name: 'Deployments', tooltip: 'Instantly deploy your web apps and services' },
  //     { name: 'Databases', tooltip: 'Fully managed databases for PostgreSQL and MySQL' }
  //   ]
  // },
  {
    title: 'Supabase',
    startDate: '2020',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'Supabase - Open-source Firebase alternative with real-time capabilities.',
    services: [
      { name: 'PostgreSQL', tooltip: 'Fully managed PostgreSQL database' },
      { name: 'Auth', tooltip: 'User authentication service' },
      { name: 'Storage', tooltip: 'Managed storage service for files and assets' }
    ]
  },
  {
    title: 'Namecheap',
    startDate: '2020',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'Namecheap - Domain name registration and web hosting provider.',
    services: [
      { name: 'Domain Registration', tooltip: 'Register domains for websites' }
      // { name: 'Web Hosting', tooltip: 'Shared and VPS hosting plans' }
      // { name: 'SSL Certificates', tooltip: 'Secure your site with SSL encryption' }
    ]
  },
  {
    title: 'UploadThing',
    startDate: '2023',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'UploadThing - File upload API service for handling uploads in modern web apps.',
    services: [{ name: 'File Uploads', tooltip: 'Easily handle file uploads in your applications' }]
  },
  {
    title: 'Upstash',
    startDate: '2022',
    icon: <AWSIcon />,
    span: 4,
    tooltip: 'Upstash - Serverless Redis and Kafka service for developers.',
    services: [
      { name: 'Redis', tooltip: 'Serverless Redis for caching and data storage' }
      // { name: 'Kafka', tooltip: 'Serverless Kafka for real-time stream processing' }
    ]
  },
  {
    title: 'Appwrite',
    startDate: '2020',
    icon: <AWSIcon />,
    span: 3,
    tooltip: 'Appwrite - Domain name registration and web hosting provider.',
    services: [
      // { name: 'Domain Registration', tooltip: 'Register domains for websites' },
      // { name: 'Web Hosting', tooltip: 'Shared and VPS hosting plans' }
      // { name: 'SSL Certificates', tooltip: 'Secure your site with SSL encryption' }
    ]
  },
  {
    title: 'Xata',
    startDate: '2020',
    icon: <AWSIcon />,
    span: 3,
    tooltip: 'Xata - Domain name registration and web hosting provider.',
    services: [
      // { name: 'Domain Registration', tooltip: 'Register domains for websites' },
      // { name: 'Web Hosting', tooltip: 'Shared and VPS hosting plans' }
      // { name: 'SSL Certificates', tooltip: 'Secure your site with SSL encryption' }
    ]
  },
  {
    title: 'Sentry',
    startDate: '2020',
    icon: <AWSIcon />,
    span: 3,
    tooltip: 'Sentry - Domain name registration and web hosting provider.',
    services: [
      // { name: 'Domain Registration', tooltip: 'Register domains for websites' },
      // { name: 'Web Hosting', tooltip: 'Shared and VPS hosting plans' }
      // { name: 'SSL Certificates', tooltip: 'Secure your site with SSL encryption' }
    ]
  },
  {
    title: 'IFTTT',
    startDate: '2024',
    icon: <AWSIcon />,
    tooltip: 'Automation tool to connect and trigger actions across different web services.',
    span: 3,
    colSpan: 2,
    services: [
      { name: 'Applets', tooltip: 'Automate workflows by creating applets' }
      // { name: 'Webhooks', tooltip: 'Trigger actions via webhooks' },
      // { name: 'Integrations', tooltip: 'Connect various services and devices' },
      // { name: 'Custom Triggers', tooltip: 'Create custom triggers to automate actions' }
    ]
  },
  {
    title: 'Netlify',
    startDate: '2024',
    icon: <AWSIcon />,
    tooltip: 'Platform for deploying and hosting static websites and serverless functions.',
    span: 12,
    colSpan: 2,
    services: [
      { name: 'Hosting', tooltip: 'Deploy and host static websites' },
      { name: 'Functions', tooltip: 'Serverless functions for backend logic' },
      { name: 'Edge Functions', tooltip: 'Run functions at the edge for faster responses' },
      { name: 'CI/CD', tooltip: 'Continuous deployment for automatic builds and deployments' },
      { name: 'Forms', tooltip: 'Form handling with built-in data collection' }
      // { name: 'DNS', tooltip: 'Managed DNS service for custom domain hosting' }
    ]
  },
  {
    title: 'Clerk',
    startDate: '2024',
    icon: <AWSIcon />,
    tooltip: 'Authentication and user management service for web and mobile apps.',
    span: 12,
    colSpan: 2,
    services: [
      { name: 'Authentication', tooltip: 'Login, signup, and multi-factor authentication' },
      { name: 'User Management', tooltip: 'Manage user data, profiles, and roles' }
      // { name: 'SSO', tooltip: 'Single sign-on integration for multiple apps' },
      // { name: 'OAuth', tooltip: 'OAuth 2.0 support for secure access' }
    ]
  },
  {
    title: 'LogRocket',
    startDate: '2024',
    icon: <AWSIcon />,
    tooltip: 'Session replay and performance monitoring for web apps.',
    span: 16,
    colSpan: 2,
    services: [
      { name: 'Session Replay', tooltip: 'Record user sessions to understand behavior' },
      { name: 'Error Tracking', tooltip: 'Track JavaScript errors and performance issues' },
      // { name: 'Performance Monitoring', tooltip: 'Monitor and optimize app performance' },
      { name: 'User Journey Mapping', tooltip: 'Track and visualize user journey for insights' }
    ]
  },
  {
    title: 'Sanity.io',
    startDate: '2024',
    icon: <AWSIcon />,
    tooltip: 'Headless CMS for structured content management and API-driven websites.',
    span: 8,
    colSpan: 2,
    services: [
      { name: 'Content Management', tooltip: 'Manage structured content for websites and apps' }
      // { name: 'Real-time Collaboration', tooltip: 'Collaborative editing of content in real-time' },
      // { name: 'Custom Workflows', tooltip: 'Create custom content workflows and permissions' },
      // { name: 'API Access', tooltip: 'API-driven approach for content delivery' }
    ]
  }
  // {
  //   title: 'Notion',
  //   startDate: '2019',
  //   icon: <AWSIcon />,
  //   tooltip: 'Notion - All-in-one workspace for notes, tasks, and wikis.',
  //   services: []
  // },
  // {
  //   title: 'Prisma',
  //   startDate: '2021',
  //   icon: <AWSIcon />,
  //   tooltip: 'Prisma - Modern ORM for Node.js and TypeScript.',
  //   services: []
  // },
  // {
  //   title: 'Slack',
  //   startDate: '2019',
  //   icon: <AWSIcon />,
  //   tooltip: 'Slack - Messaging platform for teams.',
  //   services: []
  // },
  // {
  //   title: 'Zoom',
  //   startDate: '2020',
  //   icon: <AWSIcon />,
  //   tooltip: 'Zoom - Video conferencing software for remote collaboration.',
  //   services: []
  // }
];

const UpworkClients: UpworkClientsType[] = [
  {
    title: 'Integration of Three JS trading chart into Next JS front end',
    img: UpworkJob,
    rating: 5
  },
  {
    title: 'NodeJS AWS Cloudflare and & Time Series APIs',
    img: UpworkJob,
    rating: 5
  },
  {
    title: 'A professional lead developer',
    img: UpworkJob,
    rating: 5
  },
  {
    title: 'Senior Full Stack Developers (JavaScript (React) | Python (Flask | Django))',
    img: UpworkJob,
    rating: 5
  },
  {
    title: 'Frontend / Devops developers',
    img: UpworkJob,
    rating: 5
  },
  {
    title: 'Senior React Developer',
    img: UpworkJob,
    rating: 5
  }
];

const Testimonials: TestimonialType[] = [
  // add tabbed filters for clients, colleagues,
  {
    name: 'Israa Alaa',
    img: IsraaAlaaImg,
    position: 'Senior Business Developer @Cura Business Development, B2B Sales',
    testimonial: `Thank you so much Mohamed! I quickly went through your analysis, it’s really helpful! \n
Thanks for sharing these guidelines! I cannot thank you enough! I really appreciate your support!`
  },
  {
    name: 'Veronica Stoddart',
    img: VerinoicaImg,
    position: 'Dog Training | founder @thedogsmom',
    testimonial: `Wow that’s amazing results. Thank you so much for doing all that! I didn’t realize page builders and themes slowed it down so much. 
    \nI didn’t really know any other options for designing a website. I’d love to discuss page building and a theme with you!`
  },
  {
    name: 'Gabriel L.',
    img: UpworkJob,
    position: 'Upwork Client (Canada)',
    testimonial: `I gave this project to three people, and Mohamed was the first to get it working live! 
      \nHis efficiency in connecting our API and loading historical data for a critical project was impressive. 
      \nEven with challenges from our API downtime, he proactively laid the groundwork for future developments, showcasing his exceptional problem-solving skills and dedication to excellence.
      \nThroughout the process, his communication was clear and consistent, keeping me informed every step of the way. 
      \nI wholeheartedly appreciate his commitment to delivering high-quality work and look forward to our continued collaboration!`
  },
  {
    name: 'Hafsa Ahmed',
    img: HafsaAhmedImg,
    position: 'Frontend Developer @MICEtribe',
    testimonial: `I had worked with Mohamed on several projects, and He is one of the most talented Front-End developers I've ever had the opportunity to work with.
    \nHe has an incredible ability to quickly understand complex problems and develop efficient solutions that exceed expectations.
    \nHis experience and expertise in software development is evident in the quality of his work, and he always makes sure that projects are completed on time and to the highest standard.
    \nWhat sets Mohamed apart is his willingness to collaborate and share knowledge. 
    \nHe is always happy to help out and regularly offers guidance and support to team members. 
    \nI have personally benefited from his expertise on several occasions.
    \nI absolutely recommend Mohamed for any suitable full stack development position. He is a smart developer with a proven track record of delivering high-quality work and is a pleasure to work with.`
  },
  {
    name: 'Mahmoud Soliman',
    img: MahmoudSolimanImg,
    position: 'Founder @IsearchArchives | London | Research | Imaging Unpublished British Documents',
    testimonial: `Thank you Mohamed! You provided really professional work. I've noticed great changes in performance with WooCommerce, and the 'Add to Cart' feature has improved significantly. 
    \nYou did everything I asked for and more! I really appreciate your support and the explanations you provided.
    \nI’ll be happy to recommend you and will even pay you extra for your efforts! helpful!`
  },
  {
    name: 'Abdullah Magdy',
    img: AbdullahMagdyImg,
    position: 'B2B | Business Development | E-commerce @Slasel',
    testimonial: `I had the pleasure of working with Mohamed on several projects, and his expertise truly stands out. 
    \nHe consistently solves complex problems with efficient, scalable solutions and delivers clean, reliable code.
    \nMohamed has a monster-level ability when it comes to solving bugs, tackling even the toughest issues with ease. 
    \nUnder pressure, he remains calm and focused, always anticipating challenges and addressing them proactively.
    \nBeyond his technical skills, he’s a great collaborator, always willing to share knowledge and help the team grow.
    \nI highly recommend Mohamed for any team in need of a skilled and dependable software engineer`
  },
  {
    name: 'Shaimaa Fathy Zaki',
    img: ShaimaaMahmoudImg,
    position: 'Flutter Developer @ARGgroup',
    testimonial: `I had the pleasure of working with Mohamed Hakem for several years, and I can confidently say he is an exceptional software developer. 
    \nWe started our careers together, and Mohamed has always been a reliable and supportive teammate.
    \nWhat impresses me most about Mohamed is his genuine willingness to help others. He goes above and beyond to assist his colleagues and ensure that everything runs smoothly. 
    \nWhenever someone needs guidance or support, he is always there, giving his all to make sure things work as expected.
    \nAnother standout quality is Mohamed's ability to quickly pick up new tools and technologies. It's remarkable how he learns and adapts to the latest trends while explaining concepts to others. 
    \nWhether it's React, Next.js, or even AWS, he jumps into Frontend and Backend, quickly learning and applying new skills. His thirst for knowledge and dedication to staying up-to-date is inspiring.
    \nI must mention that Mohamed has an incredible talent for fixing bugs. He has an eye for detail and a knack for resolving issues efficiently. Whenever there's a problem, he's the person we turn to because he tackles it with precision and creativity.
    \nMore than just being a highly skilled professional, Mohamed is a joy to work with. His positive attitude and friendly nature create a supportive and enjoyable work environment. We've grown not only as colleagues but as friends over the years.
    \nIt is with great enthusiasm that I recommend Mohamed Hakem to any organization seeking a talented and dedicated software developer. His technical expertise, willingness to help, and strong work ethic make him an invaluable asset to any team.`
  },
  {
    name: 'Osama Mahmoud',
    img: OsamaMahmoudImg,
    position: 'Backend Engineer | Upwork Top Rated @upwork',
    testimonial: `محمد من الناس الشاطرة جدا ، في مجالها ، مُلم بمعظم المشاكل اللي ممكن تقابلك لو انت بتطور اي ويبسايت، محمد سريع جدا في حل المشاكل
    \nEnglish Translation: Mohamed is one of the most talented people in his field, knowledgeable about most of the problems you might encounter when developing any website, and very quick at solving problems.`
  },
  {
    name: 'Upwork client',
    img: UpworkJob,
    position: '(US)',
    testimonial: `Excellent work! Mohamed Hakem has great development, leadership, and communication skills. He handles the load, meets deadlines, and I enjoyed working with him. Highly recommended!`
  },
  {
    name: 'Upwork client',
    img: UpworkJob,
    position: '',
    testimonial: `Mohamed Hakem was diligent and worked very hard during his time with us. He's a hugely successful contributor to my team, submitted his work on time and with a high level of quality. Great communicator. Would definitely work with him again if the opportunity came available.`
  },
  {
    name: 'Upwork client',
    img: UpworkJob,
    position: '',
    testimonial: `Hakem did a Great Job, and will hire him again soon`
  },
  {
    name: 'Veronica Stoddart',
    img: VerinoicaImg,
    position: 'Dog Training | founder @thedogsmom',
    testimonial: `Thank you! The small changes you made, without changing the big things like page builders and themes already made a huge difference. thank you so so so much!`
  }
];

const WorkEx: WorkExType[] = [
  {
    position: 'Software Engineer',
    company: 'BaskHealth',
    location: 'USA',
    workType: 'Remote',
    employmentType: 'Full-time',
    startDate: '2022',
    endDate: '',
    img: BaskHealthLogo,
    desc: [
      {
        bold: 'Led a team of 5 developers',
        text: 'to scale the BaskHealth Telehealth platform, contributing to $2M in funding.'
      },
      {
        bold: 'Coordinated team efforts',
        text: 'conducted code reviews, resolved merge conflicts, and managed Git workflows for quality delivery.'
      },
      {
        bold: 'Implemented core features',
        text: 'including multi-tenant architecture, dashboards, client portals, visual builder, and onboarding flows.'
      },
      {
        bold: 'Used industry-standard tools',
        text: 'for efficient communication and project management.'
      }
    ]
  },
  {
    position: 'Software Developer',
    company: 'Upwork',
    employmentType: 'Freelance',
    startDate: '2022',
    endDate: '',
    img: UpworkJob,
    descIntro: `100% Job Success Score & 5-star positive feedback on all contracts. \n\nDelivered quality results across diverse high-impact projects across multiple domains, in full-stack development, AWS, and frontend frameworks, known for meeting deadlines and maintaining strong client communication.\n\nKey Projects:`,
    desc: [
      {
        bold: 'Three.js Trading Chart Integration (Nov 2023):',
        text: 'Integrated a Three.js trading chart into a Next.js frontend, enabling seamless visualization of real-time trading data.'
      },
      {
        bold: 'Lead Developer for US Startup Platform (Aug – Oct 2022):',
        text: 'Led the development of a real estate platform, overseeing a team, managing client communication, and ensuring on-time delivery.'
      },
      {
        bold: 'Senior Full Stack Development (React & Flask) (Jul – Aug 2022):',
        text: 'Delivered a comprehensive full-stack solution using React and Flask, praised for quality and reliability.'
      },
      {
        bold: 'Frontend & DevOps Developer (Jun – Jul 2022):',
        text: 'Contributed to the frontend and DevOps pipelines, enhancing efficiency and user experience across the platform.'
      },
      {
        bold: 'Senior React Developer for E-commerce Platform (Jun 2022):',
        text: 'Developed core components for an e-commerce platform using React, focusing on best practices and tight deadlines.'
      },
      {
        bold: 'NodeJS & AWS Cloudflare Integration (Nov 2023):',
        text: 'Designed and deployed a scalable backend with time-series APIs, leveraging AWS for enhanced performance.'
      }
    ]
  },
  {
    position: 'Software Developer | AWS',
    company: 'Colayo',
    employmentType: 'Freelance',
    startDate: '2021',
    endDate: '',
    img: ColayoLogo,
    desc: [
      {
        bold: 'Deployed AWS EC2 with LiteSpeed Web Server:',
        text: 'Optimized a WordPress theme, achieving a 99% Google Core Web Vitals score.'
      },
      {
        bold: 'Built a fast, SEO-optimized website:',
        text: 'Improved page speed and performance for better user experience.'
      },
      {
        bold: 'Leveraged AWS, LiteSpeed, WordPress, QUIC CDN, and SEO best practices:',
        text: 'Ensured scalability and fast loading times.'
      }
    ]
  },
  {
    position: 'Wordpress Developer',
    company: 'London Isearch Archives',
    employmentType: 'Freelance',
    startDate: '2021',
    endDate: '',
    img: IsearchArchivesLogo,
    desc: [
      {
        bold: 'Achieved a 98% Google Core Web Vitals score:',
        text: 'Improved from 37% and boosted page load speed by 264%.'
      },
      {
        bold: 'Reduced add-to-cart/checkout processing time:',
        text: 'Improved from 16 seconds to just 1 second (1600% improvement).'
      },
      {
        bold: 'Developed dynamic search functionality:',
        text: 'Integrated it into a custom WordPress CMS.'
      }
    ]
  },
  {
    position: 'Web Developer',
    company: 'TheDogsMom ',
    employmentType: 'Freelance',
    startDate: '2021',
    endDate: '',
    img: ThedogsmomLogo,
    desc: [
      {
        bold: 'Optimized website performance:',
        text: 'Reduced page size from 4.6MB to 1.1MB and increased load speed by 900%.'
      },
      {
        bold: 'Improved SEO:',
        text: 'Followed best practices to boost site visibility and overall performance.'
      },
      {
        bold: 'Delivered custom, responsive WordPress solutions:',
        text: 'Tailored to client needs and project specifications.'
      }
    ]
  },
  {
    position: 'Restaurant Supervisor',
    company: 'Brioche Dorée ',
    employmentType: 'Full-time',
    workType: 'On-site',
    startDate: '2016',
    endDate: '',
    img: BriocheDoreeLogo,
    desc: [
      {
        bold: 'Delivered exceptional service in three languages:',
        text: 'Ensured consistent customer satisfaction in a fast-paced, high-volume environment.'
      },
      {
        bold: 'Fostered a positive team culture:',
        text: 'Encouraged collaboration and communication to streamline operations and meet customer demands.'
      },
      {
        bold: 'Managed food and beverage operations:',
        text: 'Handled inventory control, quality assurance, and upheld high standards of hygiene and customer service.'
      },
      {
        bold: 'Built lasting relationships with regular customers:',
        text: 'Contributed to repeat business and maintained a welcoming atmosphere.'
      }
    ]
  },
  {
    position: 'Catering Coordinator',
    company: 'TICO Investment - Crave Restaurant',
    employmentType: 'Full-time',
    workType: 'On-site',
    startDate: '2013',
    endDate: '',
    img: CraveRestaurantLogo,
    desc: [
      {
        bold: 'Managed and led teams in delivering high-quality catering services:',
        text: 'Handled events ranging from small gatherings to large-scale functions (up to 1200+ guests).'
      },
      {
        bold: 'Oversaw all aspects of event setup:',
        text: 'Managed food preparation, serving, and teardown, ensuring smooth operations and excellent customer satisfaction.'
      },
      {
        bold: 'Progressively took on leadership roles:',
        text: 'Started as a Catering Assistant, then Captain (leading a 4-member team), and eventually Coordinator, managing larger teams and complex events.'
      },
      {
        bold: 'Worked closely with managers to organize and execute successful events:',
        text: 'Contributed to corporate meetings, product launches, social dinners, and weddings, receiving positive client feedback.'
      },
      {
        bold: 'Developed strong team leadership, time management, and communication skills:',
        text: 'Thrived in fast-paced, high-pressure dynamic environments.'
      }
    ]
  },
  {
    position: 'Heavy Equipment Warehouse Operator',
    company: 'Large Construction Materials Chain Store',
    employmentType: 'Full-time',
    workType: 'On-site',
    startDate: '2012',
    endDate: '',
    img: ConstructionStoreLogo,
    desc: []
  },
  {
    position: 'Metal Cutting worker',
    company: 'Metalworking Facility',
    employmentType: 'Full-time',
    workType: 'On-site',
    startDate: '2012',
    endDate: '',
    img: MetalFacilityLogo,
    desc: []
  },
  {
    position: 'Operations, Sales, Store Manager',
    company: 'Al Nour - large Retail Store & Library',
    employmentType: 'Full-time',
    workType: 'On-site',
    startDate: '2012',
    endDate: '',
    img: NourStore,
    desc: []
  }
];

const YTVideos: { title: string; img: StaticImageData; url: string }[] = [
  {
    title: 'AWS #05 What is On-Demand Computing?',
    img: YTIcon,
    url: 'https://www.youtube.com/watch?v=AW2geo9Uzug&list=PLEog8Jh9IdNtdMtZ4vZME4NPAuBgZOA4r&index=1&pp=gAQBiAQB'
  },
  {
    title: 'AWS #04 Why Cloud Computing & Why not Traditional IT?',
    img: YTIcon,
    url: 'https://www.youtube.com/watch?v=9MDeafPar5A&list=PLEog8Jh9IdNtdMtZ4vZME4NPAuBgZOA4r&index=2&t=8s&pp=gAQBiAQB'
  },
  {
    title: 'AWS #03 AWS Origin Story',
    img: YTIcon,
    url: 'https://www.youtube.com/watch?v=5Tox7WqP3QQ&list=PLEog8Jh9IdNtdMtZ4vZME4NPAuBgZOA4r&index=3&pp=gAQBiAQB'
  },
  {
    title: 'AWS #02 Overview and Structure',
    img: YTIcon,
    url: 'https://www.youtube.com/watch?v=jtrOafdhhKQ&list=PLEog8Jh9IdNtdMtZ4vZME4NPAuBgZOA4r&index=4&pp=gAQBiAQB'
  },
  {
    title: 'AWS #01 Intro To Cloud Fundamentals Intro',
    img: YTIcon,
    url: 'https://www.youtube.com/watch?v=jtrOafdhhKQ&list=PLEog8Jh9IdNtdMtZ4vZME4NPAuBgZOA4r&index=4&pp=gAQBiAQB'
  }
];

const klistQuestions: QuestionItemProps[] = [
  {
    id: 4,
    title: 'Two Sum',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Array', 'Hash Table'],
    leetCodeUrl: 'https://leetcode.com/problems/two-sum/',
    videoUrl: 'https://youtube.com/watch?v=example1',
    completed: false
  },
  {
    id: 5,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Stack', 'String'],
    leetCodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
    videoUrl: 'https://youtube.com/watch?v=example2',
    completed: false
  },
  {
    id: 6,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List', 'Recursion'],
    leetCodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/',
    videoUrl: 'https://youtube.com/watch?v=example3',
    completed: false
  },
  {
    id: 7,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    timeEstimate: 25,
    topics: ['Array', 'Dynamic Programming'],
    leetCodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    videoUrl: 'https://youtube.com/watch?v=example4',
    completed: false
  },
  {
    id: 8,
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Two Pointers', 'String'],
    leetCodeUrl: 'https://leetcode.com/problems/valid-palindrome/',
    videoUrl: 'https://youtube.com/watch?v=example5',
    completed: false
  }
];

const klistQuestionsTopics = [
  'Array',
  'String',
  'Hash Table',
  'Dynamic Programming',
  'Math',
  'Sorting',
  'Greedy',
  'Depth-First Search',
  'Binary Search',
  'Database',
  'Breadth-First Search',
  'Tree',
  'Matrix',
  'Two Pointers',
  'Binary Tree',
  'Bit Manipulation',
  'Heap (Priority Queue)',
  'Stack',
  'Graph',
  'Prefix Sum',
  'Simulation',
  'Design',
  'Counting',
  'Backtracking',
  'Sliding Window',
  'Union Find',
  'Linked List',
  'Ordered Set',
  'Monotonic Stack',
  'Enumeration',
  'Trie',
  'Recursion',
  'Divide and Conquer',
  'Bitmask',
  'Queue',
  'Binary Search Tree',
  'Segment Tree',
  'Memoization',
  'Geometry',
  'Topological Sort',
  'Binary Indexed Tree',
  'Hash Function',
  'Game Theory',
  'Shortest Path',
  'Combinatorics',
  'Interactive',
  'String Matching',
  'Data Stream',
  'Rolling Hash',
  'Brainteaser',
  'Randomized',
  'Monotonic Queue',
  'Merge Sort',
  'Iterator',
  'Concurrency',
  'Doubly-Linked List',
  'Probability and Statistics',
  'Quickselect',
  'Bucket Sort',
  'Suffix Array',
  'Minimum Spanning Tree',
  'Counting Sort',
  'Shell',
  'Line Sweep',
  'Reservoir Sampling',
  'Strongly Connected Component',
  'Eulerian Circuit',
  'Radix Sort',
  'Rejection Sampling',
  'Biconnected Component'
];

export { platformsAndServices, Testimonials, UpworkClients, WorkEx, YTVideos, klistQuestions, klistQuestionsTopics };
