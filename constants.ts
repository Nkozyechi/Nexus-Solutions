import { 
  Code2, 
  Cpu, 
  Cloud, 
  Smartphone,
  Lightbulb,
  ShieldCheck,
  Terminal,
  Database,
  Globe
} from 'lucide-react';
import { CompanyInfo, NavItem, Service, Project, TeamMember, Testimonial } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Nexus Solutions",
  tagline: "Innovating the Next Horizon",
  description: "Future-ready digital solutions for a changing world. We build the technology that powers tomorrow's businesses.",
  email: "contact@nexus-solutions.zm",
  phone: "+260 97 123 4567",
  address: "Innovate Tower, 4th Floor, Cairo Road, Lusaka, Zambia",
  socials: {
    linkedin: "#",
    twitter: "#",
    facebook: "#"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

// For the Home Page "Three Pillars"
export const HOME_PILLARS: Service[] = [
  {
    id: 'p1',
    title: 'Custom Software',
    description: 'Bespoke applications tailored to your unique operational needs.',
    icon: Code2
  },
  {
    id: 'p2',
    title: 'AI & Automation',
    description: 'Intelligent algorithms to automate workflows and drive efficiency.',
    icon: Cpu
  },
  {
    id: 'p3',
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure serverless architectures on AWS and Azure.',
    icon: Cloud
  }
];

// For the Services Page
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web & App Development',
    description: 'Building robust digital experiences using modern stacks like React, Node.js, and WordPress.',
    icon: Smartphone,
    features: ['Progressive Web Apps', 'Cross-Platform Mobile', 'Enterprise Web Portals']
  },
  {
    id: '2',
    title: 'ICT Consulting',
    description: 'Helping businesses modernize their hardware and software ecosystem for the digital age.',
    icon: Lightbulb,
    features: ['Digital Transformation', 'Legacy Modernization', 'Tech Procurement']
  },
  {
    id: '3',
    title: 'Managed Services',
    description: 'Comprehensive 24/7 support, system monitoring, and regular security audits.',
    icon: ShieldCheck,
    features: ['Network Monitoring', 'Cybersecurity Audits', 'Helpdesk Support']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pj1',
    title: 'Project Alpha',
    description: 'A personal finance tracker with real-time currency conversion and budget analytics.',
    tags: ['React', 'Chart.js', 'Firebase'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'pj2',
    title: 'Project Beta',
    description: 'Comprehensive school management system for tracking student attendance and grades.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'pj3',
    title: 'ZambiaMarket',
    description: 'An e-commerce platform connecting local artisans with international buyers.',
    tags: ['Node.js', 'React Native', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-415522f96319?auto=format&fit=crop&w=800&q=80',
    liveLink: '#',
    repoLink: '#'
  }
];

export const TECH_STACK = [
  { name: 'Java', icon: Code2 },
  { name: 'Python', icon: Terminal },
  { name: 'React', icon: Globe },
  { name: 'AWS', icon: Cloud },
  { name: 'Git', icon: Database },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', desc: 'Understanding your business goals.' },
  { step: '02', title: 'Design', desc: 'Architecting the perfect solution.' },
  { step: '03', title: 'Development', desc: 'Writing clean, efficient code.' },
  { step: '04', title: 'Deployment', desc: 'Launching and monitoring.' },
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Sarah Mumba',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in African tech.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 't2',
    name: 'David Banda',
    role: 'CTO',
    bio: 'Full-stack architect obsessed with scalable cloud systems.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 't3',
    name: 'Grace Lungu',
    role: 'Head of Product',
    bio: 'Bridging the gap between user needs and engineering.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 't4',
    name: 'Michael Phiri',
    role: 'Lead Developer',
    bio: 'Expert in React and Node.js ecosystems.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm1',
    name: 'John Doe',
    role: 'Director',
    company: 'FinTech Zambia',
    content: 'Nexus Solutions transformed our legacy systems into a modern, efficient platform.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'tm2',
    name: 'Jane Smith',
    role: 'Operations Manager',
    company: 'Logistics Co',
    content: 'The level of professionalism and technical expertise is unmatched in the region.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
   {
    id: 'tm3',
    name: 'Robert Mulenga',
    role: 'CEO',
    company: 'AgriTech Innovations',
    content: 'Their AI insights helped us optimize our supply chain by 40%. Highly recommended.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];