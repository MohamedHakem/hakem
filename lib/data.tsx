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
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Array'],
    patterns: ['HashMap', 'Two Pointer'],
    companies: ['Facebook', 'Amazon', 'Microsoft', 'Google', 'Apple'], // Very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/two-sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 2,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Stack'],
    patterns: ['Stack'],
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft', 'Apple'], // Also very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/valid-parentheses',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 3,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Linked List', 'Two Pointer'],
    companies: ['Microsoft', 'Amazon', 'Facebook', 'Google'],
    leetCodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 4,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Sliding Window'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
    leetCodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 5,
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['String'],
    patterns: ['Two Pointer'],
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/valid-palindrome',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 6,
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary Tree'],
    patterns: ['DFS', 'BFS'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/invert-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 7,
    title: 'Valid Anagram',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['String'],
    patterns: ['HashMap'],
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/valid-anagram',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 8,
    title: 'Binary Search',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary Search'],
    patterns: ['Binary Search'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'], // Very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/binary-search',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 9,
    title: 'Flood Fill',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Graph'],
    patterns: ['DFS', 'BFS'],
    companies: ['Amazon', 'Facebook', 'Microsoft'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/flood-fill',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 10,
    title: 'Lowest Common Ancestor of a BST',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['BST'],
    patterns: ['BST Traversal'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 11,
    title: 'Balanced Binary Tree',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary Tree'],
    patterns: ['DFS', 'Post Order'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/balanced-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 12,
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Cycle Detection'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/linked-list-cycle',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 13,
    title: 'Implement Queue using Stacks',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Stack'],
    patterns: ['Stack Simulation'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 14,
    title: 'First Bad Version',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Binary Search'],
    patterns: ['Binary Search'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'], // Very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/first-bad-version',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 15,
    title: 'Ransom Note',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Hash Table'],
    patterns: ['Hash Map'],
    companies: ['Amazon', 'Facebook', 'Microsoft'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/ransom-note',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 16,
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming', 'Fibonacci'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/climbing-stairs',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 17,
    title: 'Longest Palindrome',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['String'],
    patterns: ['Hash Map', 'Frequency Count'],
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/longest-palindrome',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 18,
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Linked List', 'Iteration', 'Recursion'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/reverse-linked-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 19,
    title: 'Majority Element',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Hash Map', 'Boyer-Moore'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/majority-element',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 20,
    title: 'Add Binary',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Bit Manipulation', 'String Manipulation'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/add-binary',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 21,
    title: 'Diameter of Binary Tree',
    difficulty: 'Easy',
    timeEstimate: 30,
    topics: ['Binary Tree'],
    patterns: ['Tree Depth First Search (DFS)'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/diameter-of-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 22,
    title: 'Middle of the Linked List',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Fast & Slow Pointers'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/middle-of-the-linked-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 23,
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary Tree'],
    patterns: ['Tree Depth First Search (DFS)'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree',
    videoUrl: 'https://youtube.com/watch?v/something',
    completed: false
  },
  {
    id: 24,
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Array'],
    patterns: ['Hash Table'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/contains-duplicate',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 25,
    title: 'Meeting Rooms',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Sorting'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/meeting-rooms',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 26,
    title: 'Roman to Integer',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Math', 'String'],
    patterns: ['Hash Table'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/roman-to-integer',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 27,
    title: 'Backspace String Compare',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Stack'],
    patterns: ['Stack'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Google'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/backspace-string-compare',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 28,
    title: 'Counting Bits',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Bit Manipulation'], // Patterns now below topics
    companies: ['Facebook', 'Microsoft'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/counting-bits',
    videoUrl: 'https://youtube.com/watch?v/something',
    completed: false
  },
  {
    id: 29,
    title: 'Same Tree',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Tree Depth First Search (DFS)'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/same-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 30,
    title: 'Number of 1 Bits',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Bit Manipulation'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/number-of-1-bits',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 31,
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['String'],
    patterns: ['Horizontal Scanning'], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/longest-common-prefix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 32,
    title: 'Single Number',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Hash Table'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/single-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 33,
    title: 'Palindrome Linked List',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/palindrome-linked-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 34,
    title: 'Move Zeroes',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Two Pointers'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/move-zeroes',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 35,
    title: 'Symmetric Tree',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Recursion'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/symmetric-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 36,
    title: 'Missing Number',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Array', 'Math'], // Added Math as a topic
    patterns: ['Arithmetic Progression'], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/missing-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 37,
    title: 'Palindrome Number',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Math'],
    patterns: ['Reversal'], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/palindrome-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 38,
    title: 'Convert Sorted Array to BST',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['BST'],
    patterns: ['Recursion'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 39,
    title: 'Reverse Bits',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Bit Manipulation'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/reverse-bits',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 40,
    title: 'Subtree of Another Tree',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Recursive Traversal'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/subtree-of-another-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 41,
    title: 'Squares of a Sorted Array',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Two Pointers'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/squares-of-a-sorted-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 42,
    title: 'Maximum Subarray',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 20,
    topics: ['Dynamic Programming'],
    patterns: ["Kadane's Algorithm"], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/maximum-subarray',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 43,
    title: 'Insert Interval',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 25,
    topics: ['Array'],
    patterns: ['Merging'], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/insert-interval',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 44,
    title: '01 Matrix',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Breadth-First Search (BFS)'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/01-matrix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 45,
    title: 'K Closest Points to Origin',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Min Heap'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 46,
    title: 'Longest Substring (no Repeat)',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 30,
    topics: ['String'],
    patterns: ['Sliding Window'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 47,
    title: '3Sum',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Two Pointers'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/3sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 48,
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium', // Corrected difficulty
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Tree Breadth First Search (BFS)'], // FINALLY added the patterns property!
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 49,
    title: 'Clone Graph',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Graph'],
    patterns: ['Breadth-First Search (BFS)', 'Depth-First Search (DFS)'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/clone-graph',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 50,
    title: 'Evaluate Reverse Polish Notation',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Stack'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 51,
    title: 'Course Schedule',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Topological Sort (Graph)'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/course-schedule',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 52,
    title: 'Implement Trie (Prefix Tree)',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Trie'],
    patterns: ['Trie'], // Or "Prefix Tree"
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/implement-trie-prefix-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 53,
    title: 'Coin Change',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/coin-change',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 54,
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Prefix and Suffix Products'], // Or Array Manipulation
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/product-of-array-except-self',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 55,
    title: 'Min Stack',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Stack'],
    patterns: ['Stack'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/min-stack',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 56,
    title: 'Validate Binary Search Tree',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['BST'],
    patterns: ['Tree Depth First Search (DFS)'], // Or Recursion
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 57,
    title: 'Number of Islands',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Graph'],
    patterns: ['Island Traversal', 'Depth-First Search (DFS)', 'Breadth-First Search (BFS)'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/number-of-islands',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 58,
    title: 'Rotting Oranges',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Breadth-First Search (BFS)'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/rotting-oranges',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 59,
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Binary Search', 'Array'],
    patterns: ['Modified Binary Search'],
    companies: ['Google', 'Facebook', 'Amazon', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 60,
    title: 'Combination Sum',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Backtracking', 'Array'],
    patterns: ['Backtracking'],
    companies: ['Google', 'Amazon', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/combination-sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 61,
    title: 'Permutations',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Recursion', 'Backtracking'],
    patterns: ['Backtracking'],
    companies: ['Amazon', 'Facebook', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/permutations',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 62,
    title: 'Merge Intervals',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array', 'Sorting'],
    patterns: ['Sorting and Merging'],
    companies: ['Google', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/merge-intervals',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 63,
    title: 'Lowest Common Ancestor of a Binary Tree',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree', 'Recursion'],
    patterns: ['Tree Traversal'],
    companies: ['Facebook', 'Amazon', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 64,
    title: 'Time Based Key-Value Store',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Binary Search', 'HashMap'],
    patterns: ['Binary Search with Dictionary'],
    companies: ['Google', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/time-based-key-value-store',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 65,
    title: 'Accounts Merge',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph', 'Union Find'],
    patterns: ['Union Find'],
    companies: ['Google', 'Amazon', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/accounts-merge',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 66,
    title: 'Sort Colors',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Array', 'Two Pointers'],
    patterns: ['Dutch National Flag'],
    companies: ['Google', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/sort-colors',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 67,
    title: 'Word Break',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming', 'Trie'],
    patterns: ['Dynamic Programming'],
    companies: ['Facebook', 'Google', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/word-break',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 68,
    title: 'Partition Equal Subset Sum',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming', 'Array'],
    patterns: ['Knapsack Problem'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/partition-equal-subset-sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 69,
    title: 'String to Integer (atoi)',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['String', 'Parsing'],
    patterns: ['Character Parsing', 'Edge Case Handling'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    leetCodeUrl: 'https://leetcode.com/problems/string-to-integer-atoi',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 70,
    title: 'Spiral Matrix',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Matrix', 'Simulation'],
    patterns: ['Layer Traversal', 'Simulation of Movement'],
    companies: ['Google', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/spiral-matrix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 71,
    title: 'Subsets',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Recursion', 'Backtracking'],
    patterns: ['Power Set', 'Recursive Subset Building'],
    companies: ['Facebook', 'Amazon', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/subsets',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 72,
    title: 'Binary Tree Right Side View',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Binary Tree', 'Breadth-First Search'],
    patterns: ['BFS', 'Rightmost Nodes'],
    companies: ['Microsoft', 'Google', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/binary-tree-right-side-view',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 73,
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['String', 'Dynamic Programming'],
    patterns: ['Expand Around Center', 'DP Table'],
    companies: ['Amazon', 'Microsoft', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 74,
    title: 'Unique Paths',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Dynamic Programming', 'Combinatorics'],
    patterns: ['Grid Traversal', 'DP Array'],
    companies: ['Google', 'Microsoft', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/unique-paths',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 75,
    title: 'Construct Binary Tree from Preorder and Inorder Traversal',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree', 'Recursion'],
    patterns: ['Tree Construction', 'Divide and Conquer'],
    companies: ['Facebook', 'Amazon', 'Google'],
    leetCodeUrl: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 76,
    title: 'Container With Most Water',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Array'],
    patterns: ['Two Pointers', 'Greedy'],
    companies: ['Amazon', 'Google', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/container-with-most-water',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 77,
    title: 'Letter Combinations of a Phone Number',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Recursion'],
    patterns: ['Backtracking'],
    companies: ['Microsoft', 'Google', 'Apple'],
    leetCodeUrl: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 78,
    title: 'Word Search',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['DFS', 'Backtracking'],
    companies: ['Amazon', 'Microsoft', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/word-search',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 79,
    title: 'Find All Anagrams in a String',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['String'],
    patterns: ['Hash Table', 'Sliding Window'], // Uses both Hash Table and Sliding Window techniques
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 80,
    title: 'Minimum Height Trees',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['BFS', 'Topological Sort'], // Uses BFS and potentially Topological Sort
    companies: ['Uber', 'Airbnb', 'Lyft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/minimum-height-trees',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 81,
    title: 'Task Scheduler',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Heap'],
    patterns: ['Min Heap'], // Uses a Min Heap for efficient scheduling
    companies: ['Google', 'Microsoft', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/task-scheduler',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 82,
    title: 'LRU Cache',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Linked List'],
    patterns: ['Hash Table', 'Doubly Linked List'], // Uses Hash Table for fast lookups and Doubly Linked List for efficient insertion/deletion
    companies: ['Facebook', 'Amazon', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/lru-cache',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 83,
    title: 'Kth Smallest Element in a BST',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Search Tree'],
    patterns: ['In-order Traversal'], // Can be solved using In-order Traversal property of BST
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst',
    videoUrl: 'https://youtube.com/watch?v=memoization',
    completed: false
  },
  {
    id: 84,
    title: 'Daily Temperatures',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Monotonic Stack'], // Uses a Monotonic Stack for efficient processing
    companies: ['Google', 'Facebook', 'Twitter'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/daily-temperatures',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 85,
    title: 'House Robber',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Dynamic Programming'],
    patterns: ['Bottom-up DP'], // Uses a bottom-up approach to Dynamic Programming
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/house-robber',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 86,
    title: 'Gas Station',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Two Pointers'], // Uses Two Pointers to efficiently find a starting point
    companies: ['Apple', 'Uber', 'Lyft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/gas-station',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 87,
    title: 'Next Permutation',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Recursion'],
    patterns: ['Backtracking'], // Can be solved using a Backtracking approach
    companies: ['Google', 'Facebook', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/next-permutation',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 88,
    title: 'Valid Sudoku',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Matrix'],
    patterns: ['Hash Table'], // Uses Hash Table for efficient checking of rows, columns, and sub-boxes
    companies: ['Microsoft', 'Amazon', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/valid-sudoku',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 89,
    title: 'Group Anagrams',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['String'],
    patterns: ['Hash Table'], // Uses Hash Table to efficiently group anagrams
    companies: ['Google', 'Facebook', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/group-anagrams',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 90,
    title: 'Maximum Product Subarray',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming'],
    patterns: ["Kadane's Algorithm"], // Uses a variation of Kadane's Algorithm for Dynamic Programming
    companies: ['Microsoft', 'Facebook', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximum-product-subarray',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 91,
    title: 'Design Add and Search Words Data Structure',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Trie'],
    patterns: ['Trie'], // Uses a Trie data structure for efficient word storage and search
    companies: ['Amazon', 'Netflix', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/design-add-and-search-words-data-structure',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 92,
    title: 'Pacific Atlantic Water Flow',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Depth-First Search (DFS)'], // Uses Depth-First Search to explore reachable cells
    companies: ['Google', 'Facebook', 'Twitter'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 93,
    title: 'Remove Nth Node From End of List',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to efficiently find the node to remove
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 94,
    title: 'Shortest Path to Get Food',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Breadth-First Search (BFS)'], // Uses Breadth-First Search for shortest path finding
    companies: ['Amazon', 'Lyft', 'Uber'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/shortest-path-to-get-food',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 95,
    title: 'Find the Duplicate Number',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Binary Search', 'Array'], // Can be solved with either Binary Search or Floyd's Cycle Finding Algorithm
    patterns: ["Floyd's Cycle Finding Algorithm"], // A specific technique for finding duplicates in a limited range array
    companies: ['Facebook', 'Google', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 96,
    title: 'Top K Frequent Words',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Min Heap'], // Uses a Min Heap to efficiently find the top K frequent words
    companies: ['Google', 'Facebook', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/top-k-frequent-words',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 97,
    title: 'Longest Increasing Subsequence',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'], // Uses Dynamic Programming to find the longest increasing subsequence
    companies: ['Microsoft', 'Amazon', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 98,
    title: 'Graph Valid Tree',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Union Find', 'Depth-First Search (DFS)'], // Can be solved using Union Find or DFS with cycle detection
    companies: ['Facebook', 'Amazon', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/graph-valid-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 99,
    title: 'Course Schedule II',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Graph'],
    patterns: ['Topological Sort'], // Uses Topological Sort to determine if a valid course schedule exists
    companies: ['Amazon', 'Microsoft', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/course-schedule-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 100,
    title: 'Swap Nodes in Pairs',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to efficiently swap nodes in pairs
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/swap-nodes-in-pairs',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 101,
    title: 'Path Sum II',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree'],
    patterns: ['Depth-First Search (DFS)'], // Uses DFS to traverse the tree and find all paths with the target sum
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/path-sum-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 102,
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Hash Table'], // Uses a Hash Table to efficiently find the longest consecutive sequence
    companies: ['Google', 'Facebook', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 103,
    title: 'Rotate Array',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Array'],
    patterns: ['Two Pointers', 'Extra Space (Optional)'], // Can be solved with Two Pointers or using extra space for a more readable solution
    companies: ['Microsoft', 'Amazon', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/rotate-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 104,
    title: 'Odd Even Linked List',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to separate odd and even nodes
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/odd-even-linked-list',
    completed: false
  },
  {
    id: 105,
    title: 'Decode String',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Stack'], // Uses a Stack to process encoded characters and build the decoded string
    companies: ['Amazon', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/decode-string',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 106,
    title: 'Contiguous Array',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Hash Table'], // Uses a Hash Table to efficiently track prefix sum and find the longest subarray with zero net sum
    companies: ['Facebook', 'Amazon', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/contiguous-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 107,
    title: 'Maximum Width of Binary Tree',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Breadth-First Search (BFS)'], // Uses BFS to find the maximum width of the binary tree
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximum-width-of-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 108,
    title: 'Find K Closest Elements',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Heap (Min Heap)'],
    patterns: ['Min Heap'], // Uses a Min Heap to efficiently find the K closest elements
    companies: ['Amazon', 'Google', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-k-closest-elements',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 109,
    title: 'Longest Repeating Character Replacement',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['String'],
    patterns: ['Sliding Window'], // Uses a Sliding Window approach to find the longest substring with at most K character replacements
    companies: ['Facebook', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 110,
    title: 'Inorder Successor in BST',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Binary Search Tree'],
    patterns: ['In-order Traversal'], // Can be solved efficiently using in-order traversal properties of a BST
    companies: ['Amazon', 'Google', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/inorder-successor-in-bst',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 111,
    title: 'Jump Game',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'], // Uses Dynamic Programming for efficient solution
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/jump-game',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 112,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to iterate through the linked lists and add digits
    companies: ['Google', 'Amazon', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/add-two-numbers',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 113,
    title: 'Generate Parentheses',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Recursion', 'Backtracking'],
    patterns: ['Backtracking'], // Uses Backtracking to explore all valid combinations of parentheses
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/generate-parentheses',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 114,
    title: 'Sort List',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List', 'Merge Sort'],
    patterns: ['Merge Sort'], // Often solved using Merge Sort for efficient linked list sorting
    companies: ['Facebook', 'Netflix', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/sort-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 115,
    title: 'Number of Connected Components in an Undirected Graph',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Depth-First Search (DFS)', 'Union Find (Optional)'], // Can be solved with DFS or Union Find for connected components
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 116,
    title: 'Minimum Knight Moves',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Graph', 'Breadth-First Search (BFS)'],
    patterns: ['Breadth-First Search (BFS)'], // Corrected: Added patterns
    companies: ['Facebook', 'Google', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/minimum-knight-moves',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 117,
    title: 'Subarray Sum Equals K',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Array'],
    patterns: ['Hash Table'],
    companies: ['Amazon', 'Apple', 'Netflix'],
    leetCodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 118,
    title: 'Asteroid Collision',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Stack'],
    companies: ['Microsoft', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/asteroid-collision',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 119,
    title: 'Random Pick with Weight',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Math', 'Prefix Sum'], // Added Prefix Sum as a relevant topic
    patterns: ['Binary Search', 'Prefix Sum'], // Corrected: Added patterns, Binary search is used after prefix sum
    companies: ['Google', 'Netflix', 'Apple'],
    leetCodeUrl: 'https://leetcode.com/problems/random-pick-with-weight',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 120,
    title: 'Kth Largest Element in an Array',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Heap (Min Heap)', 'Quick Select'], // Added Quick Select as an alternative efficient approach
    companies: ['Amazon', 'Microsoft', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 121,
    title: 'Maximal Square',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'], // Uses Dynamic Programming for efficient solution
    companies: ['Amazon', 'Facebook', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximal-square',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 122,
    title: 'Rotate Image',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Matrix'],
    patterns: ['In-place Modification'], // Often solved with in-place modification to avoid extra space
    companies: ['Google', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/rotate-image',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 123,
    title: 'Binary Tree Zigzag Level Order Traversal',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree'],
    patterns: ['Breadth-First Search (BFS)'], // Uses BFS with a level marker for zigzag traversal
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 124,
    title: 'Design Hit Counter',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Queue'],
    patterns: ['Queue'], // Uses a Queue with a fixed size to keep track of recent hits
    companies: ['Amazon', 'Google', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/design-hit-counter',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 125,
    title: 'Path Sum III',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Binary Tree'],
    patterns: ['Depth-First Search (DFS)'], // Uses DFS to traverse the tree and find paths with the target sum
    companies: ['Microsoft', 'Facebook', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/path-sum-iii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 126,
    title: 'Pow(x, n)',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Math'],
    patterns: ['Fast Exponentiation'], // Uses Fast Exponentiation for efficient power calculation (avoiding repeated multiplication)
    companies: ['Google', 'Amazon', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/powx-n',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 127,
    title: 'Search a 2D Matrix',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Binary Search'],
    patterns: ['Binary Search'], // Uses Binary Search to efficiently search the sorted 2D matrix
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 128,
    title: 'Largest Number',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['String'],
    patterns: ['Custom Sorting'], // Uses custom sorting based on string concatenation logic
    companies: ['Facebook', 'Amazon', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/largest-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 129,
    title: 'Decode Ways',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'], // Uses Dynamic Programming for efficient solution
    companies: ['Microsoft', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/decode-ways',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 130,
    title: 'Meeting Rooms II',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array', 'Sorting'], // Uses Sorting and a sweep-line approach to find the minimum number of meeting rooms
    patterns: ['Sorting'], // Sorting is a crucial step for the sweep-line approach
    companies: ['Amazon', 'Google', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 131,
    title: 'Reverse Integer',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Math'],
    patterns: ['Handling Overflow'], // Important to consider overflow conditions when reversing integers
    companies: ['Microsoft', 'Facebook', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/reverse-integer',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 132,
    title: 'Set Matrix Zeroes',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Matrix'],
    patterns: ['In-place Modification'], // Often solved with in-place modification to avoid extra space
    companies: ['Amazon', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/set-matrix-zeroes',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 133,
    title: 'Reorder List',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List', 'Two Pointers'], // Uses Two Pointers to find the middle and reverse the second half
    patterns: ['Two Pointers'], // Two Pointers technique is crucial for this solution
    companies: ['Facebook', 'Microsoft', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/reorder-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 134,
    title: 'Encode and Decode Strings',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['String'],
    patterns: ['Hash Table'], // Uses a Hash Table for efficient encoding and decoding
    companies: ['Amazon', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/encode-and-decode-strings',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 135,
    title: 'Cheapest Flights Within K Stops',
    difficulty: 'Medium',
    timeEstimate: 45,
    topics: ['Graph', 'Dynamic Programming'], // Uses Dynamic Programming with Bellman-Ford or Dijkstra's algorithm for efficient solution
    patterns: ["Dynamic Programming (Bellman-Ford or Dijkstra's Algorithm)"], // Both algorithms can be used to solve this problem
    companies: ['Google', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/cheapest-flights-within-k-stops',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 136,
    title: 'All Nodes Distance K in Binary Tree',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree'],
    patterns: ['Depth-First Search (DFS)'], // Uses DFS to traverse the tree and find nodes at distance K from the target node
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 137,
    title: '3Sum Closest',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array', 'Sorting'], // Uses Sorting to find the closest 3-sum efficiently
    patterns: ['Sorting'], // Sorting is a crucial step for this solution
    companies: ['Google', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/3sum-closest',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 138,
    title: 'Rotate List',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to find the new tail and head after rotation
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/rotate-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 139,
    title: 'Find Minimum in Rotated Sorted Array',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Binary Search'],
    patterns: ['Modified Binary Search'], // Uses a modified Binary Search approach to handle the rotation
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 140,
    title: 'Basic Calculator II',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Shunting Yard Algorithm'], // Uses Shunting Yard Algorithm to convert infix expression to postfix and evaluate it using a Stack
    companies: ['Amazon', 'Google', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/basic-calculator-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 141,
    title: 'Combination Sum IV',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Dynamic Programming'],
    patterns: ['Bottom-up Dynamic Programming'], // Uses Bottom-up Dynamic Programming for efficient solution
    companies: ['Microsoft', 'Facebook', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/combination-sum-iv',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 142,
    title: 'Insert Delete GetRandom O(1)',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Hash Table'],
    patterns: ['Hash Table with Additional Data Structure'], // Combines Hash Table with another data structure (like Array) for efficient random retrieval
    companies: ['Google', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/insert-delete-getrandom-o1',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 143,
    title: 'Non-overlapping Intervals',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Array', 'Sorting'], // Uses Sorting and a sweep-line approach to find non-overlapping intervals
    patterns: ['Sorting'], // Sorting is a crucial step for the sweep-line approach
    companies: ['Amazon', 'Facebook', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/non-overlapping-intervals',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 144,
    title: 'Minimum Window Substring',
    difficulty: 'Hard', // Note that this question is actually classified as Hard on LeetCode
    timeEstimate: 30,
    topics: ['String'],
    patterns: ['Sliding Window'], // Uses a Sliding Window technique to find the minimum window substring
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/minimum-window-substring',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 145,
    title: 'Serialize and Deserialize Binary Tree',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Binary Tree'],
    patterns: ['Pre-order Traversal (DFS)'], // Often uses Pre-order Traversal (DFS) for serialization and deserialization
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 146,
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Stack'],
    patterns: ['Two Pointers'], // Uses Two Pointers to find the trapped water efficiently
    companies: ['Google', 'Facebook', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/trapping-rain-water',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 147,
    title: 'Find Median from Data Stream',
    difficulty: 'Hard',
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Heaps (Min-Heap and Max-Heap)'], // Uses a combination of Min-Heap and Max-Heap to maintain the median
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 148,
    title: 'Word Ladder',
    difficulty: 'Hard',
    timeEstimate: 45,
    topics: ['Graph', 'Breadth-First Search (BFS)'], // Uses Breadth-First Search (BFS) to find the shortest word ladder
    patterns: ['Breadth-First Search (BFS)'], // BFS is crucial for finding the shortest path in this problem
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/word-ladder',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 149,
    title: 'Basic Calculator',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Stack'],
    patterns: ['Shunting Yard Algorithm (Optional)'], // May use Shunting Yard Algorithm for complex expressions, similar to Basic Calculator II
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/basic-calculator',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 150,
    title: 'Maximum Profit in Job Scheduling',
    difficulty: 'Hard',
    timeEstimate: 45,
    topics: ['Binary Search', 'Dynamic Programming (Optional)'], // May use Binary Search for optimization and Dynamic Programming for efficient solution
    patterns: ['Binary Search (Optional)'], // Binary Search is a potential approach for optimization
    companies: ['Amazon', 'Facebook', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 151,
    title: 'Merge k Sorted Lists',
    difficulty: 'Hard',
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Min Heap'], // Uses a Min Heap for efficient merging of k sorted lists
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 152,
    title: 'Largest Rectangle in Histogram',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Stack'],
    patterns: ['Monotonic Stack'], // Uses a Monotonic Stack to find the largest rectangle efficiently
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 153,
    title: 'Binary Tree Maximum Path Sum',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Binary Tree'],
    patterns: ['Recursion'], // Often solved with Recursion to traverse the tree and find the maximum path sum
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 154,
    title: 'Maximum Frequency Stack',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Stack', 'Hash Table'], // Uses a combination of Stack and Hash Table for efficient frequency tracking and retrieval
    patterns: ['Stack with Additional Data Structure (Hash Table)'], // Combines Stack with Hash Table for this problem
    companies: ['Google', 'Netflix', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximum-frequency-stack',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 155,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Binary Search'],
    patterns: ['Binary Search (Modified)'], // Uses a modified Binary Search approach to find the median efficiently
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 156,
    title: 'Longest Increasing Path in a Matrix',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Graph', 'Dynamic Programming (Optional)'], // Uses Dynamic Programming for optimization (optional)
    patterns: ['Depth-First Search (DFS)'], // DFS is a common approach to traverse the matrix and find the longest increasing path
    companies: ['Google', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 157,
    title: 'Longest Valid Parentheses',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Stack'],
    patterns: ['Stack'], // Uses a Stack to keep track of parentheses and find the longest valid substring
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-valid-parentheses',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 158,
    title: 'Design In-Memory File System',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Trie'],
    patterns: ['Trie'], // Uses a Trie data structure to efficiently store and retrieve file paths and information
    companies: ['Google', 'Amazon', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/design-in-memory-file-system',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 159,
    title: 'Employee Free Time',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Array'],
    patterns: ['Merging Intervals'], // Uses a merge intervals approach to find the free time slots between employee schedules
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/employee-free-time',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 160,
    title: 'Word Search II',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Graph', 'Backtracking (Optional)'], // Uses Graph Traversal (DFS) and Backtracking (optional) for efficient exploration
    patterns: ['Depth-First Search (DFS)'], // DFS is the primary approach for exploring the board and finding words
    companies: ['Facebook', 'Amazon', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/word-search-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 161,
    title: 'Alien Dictionary',
    difficulty: 'Hard',
    timeEstimate: 45,
    topics: ['Graph', 'Topological Sort'], // Uses Graph and Topological Sort to reconstruct the alien dictionary
    patterns: ['Topological Sort'], // Topological Sort is crucial to find the correct order of letters in the alien dictionary
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/alien-dictionary',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 162,
    title: 'Bus Routes',
    difficulty: 'Hard',
    timeEstimate: 45,
    topics: ['Graph', 'Breadth-First Search (BFS)'], // Uses Graph and Breadth-First Search (BFS) to find the minimum number of buses needed
    patterns: ['Breadth-First Search (BFS)'], // BFS helps in exploring the bus routes and finding the shortest path
    companies: ['Amazon', 'Google', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/bus-routes',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 163,
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Array', 'Monotonic Queue'], // Uses a Monotonic Queue data structure for efficient sliding window maximum finding
    patterns: ['Monotonic Queue'], // Monotonic Queue is a key concept for solving this problem in optimal time
    companies: ['Facebook', 'Google', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/sliding-window-maximum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 164,
    title: 'Palindrome Pairs',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['String', 'Hash Table'], // Uses Hash Table for efficient storage and retrieval of palindromes and their indices
    patterns: ['Hash Table'], // Hash Table is a core component for solving this problem effectively
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/palindrome-pairs',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 165,
    title: 'Reverse Nodes in k-Group',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses two pointers to iterate and reverse nodes in groups
    companies: ['Amazon', 'Microsoft', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 166,
    title: 'Sudoku Solver',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Matrix', 'Backtracking'], // Uses Backtracking to explore possible placements and validate the sudoku
    patterns: ['Backtracking'], // Backtracking is essential for solving this problem efficiently
    companies: ['Facebook', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/sudoku-solver',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 167,
    title: 'First Missing Positive',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Hash Table'],
    patterns: ['In-place Modification'], // Uses an in-place modification approach with the Hash Table
    companies: ['Microsoft', 'Google', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/first-missing-positive',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 168,
    title: 'N-Queens',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Recursion', 'Backtracking'], // Uses Recursion and Backtracking to place N queens without attacking each other
    patterns: ['Backtracking'], // Backtracking plays a crucial role in exploring possible placements and identifying conflicts
    companies: ['Amazon', 'Facebook', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/n-queens',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 169,
    title: 'Smallest Range Covering Elements from K Lists',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Heap', 'Priority Queue'], // Uses a Min Heap (Priority Queue) to efficiently find the smallest range
    patterns: ['Min Heap (Priority Queue)'], // Min Heap is a key concept for solving this problem in optimal time
    companies: ['Google', 'Amazon', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  }
];

// const klistQuestionsTopics = [
//   'Array',
//   'String',
//   'Hash Table',
//   'Dynamic Programming',
//   'Math',
//   'Sorting',
//   'Greedy',
//   'Depth-First Search',
//   'Binary Search',
//   'Database',
//   'Breadth-First Search',
//   'Tree',
//   'Matrix',
//   'Two Pointers',
//   'Binary Tree',
//   'Bit Manipulation',
//   'Heap (Priority Queue)',
//   'Stack',
//   'Graph',
//   'Prefix Sum',
//   'Simulation',
//   'Design',
//   'Counting',
//   'Backtracking',
//   'Sliding Window',
//   'Union Find',
//   'Linked List',
//   'Ordered Set',
//   'Monotonic Stack',
//   'Enumeration',
//   'Trie',
//   'Recursion',
//   'Divide and Conquer',
//   'Bitmask',
//   'Queue',
//   'Binary Search Tree',
//   'Segment Tree',
//   'Memoization',
//   'Geometry',
//   'Topological Sort',
//   'Binary Indexed Tree',
//   'Hash Function',
//   'Game Theory',
//   'Shortest Path',
//   'Combinatorics',
//   'Interactive',
//   'String Matching',
//   'Data Stream',
//   'Rolling Hash',
//   'Brainteaser',
//   'Randomized',
//   'Monotonic Queue',
//   'Merge Sort',
//   'Iterator',
//   'Concurrency',
//   'Doubly-Linked List',
//   'Probability and Statistics',
//   'Quickselect',
//   'Bucket Sort',
//   'Suffix Array',
//   'Minimum Spanning Tree',
//   'Counting Sort',
//   'Shell',
//   'Line Sweep',
//   'Reservoir Sampling',
//   'Strongly Connected Component',
//   'Eulerian Circuit',
//   'Radix Sort',
//   'Rejection Sampling',
//   'Biconnected Component'
// ];

const klistQuestionsTopics = [
  'Array',
  'Stack',
  'Linked List',
  'String',
  'Binary Tree',
  'Binary Search',
  'Graph',
  'BST',
  'Hash Table',
  'Dynamic Programming',
  'Binary',
  'Math',
  'Heap',
  'Trie',
  'Backtracking',
  'Recursion',
  'Sorting',
  'HashMap',
  'Union Find',
  'Two Pointers',
  'Parsing',
  'Matrix',
  'Simulation',
  'Breadth-First Search',
  'Combinatorics',
  'Binary Search Tree',
  'Heap (Min Heap)',
  'Merge Sort',
  'Breadth-First Search (BFS)',
  'Prefix Sum',
  'Queue',
  'Dynamic Programming (Optional)',
  'Backtracking (Optional)',
  'Topological Sort',
  'Monotonic Queue',
  'Priority Queue'
];

const klistQuestionsCompanies = [
  'Facebook',
  'Amazon',
  'Microsoft',
  'Google',
  'Apple',
  'Uber',
  'Airbnb',
  'Lyft',
  'Netflix',
  'Twitter'
];

const klistQuestionsPatterns = [
  'HashMap',
  'Two Pointer',
  'Stack',
  'Linked List',
  'Sliding Window',
  'DFS',
  'BFS',
  'Binary Search',
  'BST Traversal',
  'Post Order',
  'Cycle Detection',
  'Stack Simulation',
  'Hash Map',
  'Dynamic Programming',
  'Fibonacci',
  'Frequency Count',
  'Iteration',
  'Recursion',
  'Boyer-Moore',
  'Bit Manipulation',
  'String Manipulation',
  'Tree Depth First Search (DFS)',
  'Fast & Slow Pointers',
  'Hash Table',
  'Sorting',
  'Horizontal Scanning',
  'Two Pointers',
  'Arithmetic Progression',
  'Reversal',
  'Recursive Traversal',
  "Kadane's Algorithm",
  'Merging',
  'Breadth-First Search (BFS)',
  'Min Heap',
  'Tree Breadth First Search (BFS)',
  'Depth-First Search (DFS)',
  'Topological Sort (Graph)',
  'Trie',
  'Prefix and Suffix Products',
  'Island Traversal',
  'Modified Binary Search',
  'Backtracking',
  'Sorting and Merging',
  'Tree Traversal',
  'Binary Search with Dictionary',
  'Union Find',
  'Dutch National Flag',
  'Knapsack Problem',
  'Character Parsing',
  'Edge Case Handling',
  'Layer Traversal',
  'Simulation of Movement',
  'Power Set',
  'Recursive Subset Building',
  'Rightmost Nodes',
  'Expand Around Center',
  'DP Table',
  'Grid Traversal',
  'DP Array',
  'Tree Construction',
  'Divide and Conquer',
  'Greedy',
  'Topological Sort',
  'Doubly Linked List',
  'In-order Traversal',
  'Monotonic Stack',
  'Bottom-up DP',
  "Floyd's Cycle Finding Algorithm",
  'Extra Space (Optional)',
  'Merge Sort',
  'Union Find (Optional)',
  'Prefix Sum',
  'Heap (Min Heap)',
  'Quick Select',
  'In-place Modification',
  'Queue',
  'Fast Exponentiation',
  'Custom Sorting',
  'Handling Overflow',
  "Dynamic Programming (Bellman-Ford or Dijkstra's Algorithm)",
  'Shunting Yard Algorithm',
  'Bottom-up Dynamic Programming',
  'Hash Table with Additional Data Structure',
  'Pre-order Traversal (DFS)',
  'Heaps (Min-Heap and Max-Heap)',
  'Shunting Yard Algorithm (Optional)',
  'Binary Search (Optional)',
  'Stack with Additional Data Structure (Hash Table)',
  'Binary Search (Modified)',
  'Merging Intervals',
  'Monotonic Queue',
  'Min Heap (Priority Queue)'
];

export {
  platformsAndServices,
  Testimonials,
  UpworkClients,
  WorkEx,
  YTVideos,
  klistQuestions,
  klistQuestionsTopics,
  klistQuestionsCompanies,
  klistQuestionsPatterns
};

// Patterns
// Patterns are specific strategies or approaches used to solve common problem types.

// Two Pointers
// Fast and Slow Pointers
// Sliding Window
// Merge Intervals
// Cyclic Sort
// In-place Reversal of a Linked List
// Tree Breadth First Search
// Tree Depth First Search
// Monotonic Stack
// Two Heaps
// Top 'K' Elements
// Backtracking
// Topological Sort (Graph)
// K-Way Merge
// Modified Binary Search
// Subsets
// Island (Matrix Traversal)
// Bitwise XOR
// 0/1 Knapsack (Dynamic Programming)
// Multi-threaded
// Prefix Sum
// Kadane's Algorithm
// Bucket Sort
// Divide and Conquer
// Union Find
// Minimum Spanning Tree
// Shortest Path
// Eulerian Circuit
// Topics (Updated)

// Topics are broader categories or data structures and concepts used in problem-solving.
// Arrays
// Strings
// Bit Manipulation
// Hash Tables
// Matrix (2D Array)
// Linked List
// Stacks
// Queues
// Binary Search
// BST / Ordered Set
// Tries
// Heaps
// Intervals
// Data Structure Design
// String Matching
// Binary Indexed Tree / Segment Tree
// Maths / Geometry
// Line Sweep
// Suffix Array

// Dynamic Programming (DP)
// DP problems often span both topics and patterns, they are listed separately for clarity:
// 1-D DP
// Knapsack DP
// Unbounded Knapsack DP
// Longest Increasing Subsequence DP
// 2D (Grid) DP
// String DP
// Tree / Graph DP
// Bitmask DP
// Digit DP
// Probability DP
// State Machine DP

//
//
//
// group by pattern, company, topic, difficulty
