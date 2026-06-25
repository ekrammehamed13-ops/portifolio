import {
  FiCode, FiServer, FiDatabase, FiLayout,
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin
} from 'react-icons/fi';

export const personalInfo = {
  name: "Ekram Mehammedabdu",
  title: "Web Development",
  email: "ekrammehamed13@gmail.com",
  phone: "0901969880",
  location: "Ethiopia",
  intro: "I craft exceptional digital experiences through clean code and elegant design. Passionate about building scalable web applications that make a difference.",
  about: [
    "I am a dedicated Software Engineer with a deep passion for building modern, scalable, and user-centric web applications. My journey in technology is driven by a relentless curiosity and a commitment to excellence in every line of code I write.",
    "With expertise spanning both frontend and backend technologies, I specialize in creating seamless digital experiences that combine technical precision with elegant design. I believe in writing clean, maintainable code that stands the test of time.",
    "When I'm not coding, I'm exploring emerging technologies, contributing to open-source projects, or finding innovative solutions to complex problems. I'm always eager to take on new challenges and transform ideas into reality."
  ],
  careerGoals: "To leverage my expertise in modern web technologies to build innovative solutions that positively impact users worldwide, while continuously growing as a web developer and contributing to meaningful projects.",
  cvUrl: "/cv.pdf",
  profileImage: "/profile.jpg"
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  { name: "JavaScript", level: 95, icon: "FiCode" },
  { name: "React.js", level: 92, icon: "FiCode" },
  { name: "Next.js", level: 88, icon: "FiCode" },
  { name: "Tailwind CSS", level: 90, icon: "FiLayout" },
  { name: "Node.js", level: 85, icon: "FiServer" },
  { name: "MongoDB", level: 82, icon: "FiDatabase" },
  { name: "PostgreSQL", level: 80, icon: "FiDatabase" },
  { name: "Database Management", level: 85, icon: "FiDatabase" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application featuring real-time updates, drag-and-drop functionality, and team workspace management.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Real-Time Dashboard",
    description: "An analytics dashboard with real-time data visualization, interactive charts, and customizable widgets for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "WebSocket", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description: "A headless CMS platform designed for developers to manage their portfolio content with a rich text editor and media management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Next.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const experience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovation Labs",
    period: "2024 - Present",
    description: "Leading development of scalable web applications and mentoring junior developers.",
    achievements: [
      "Architected and deployed microservices handling 100K+ daily requests",
      "Reduced load times by 40% through code optimization and caching strategies",
      "Led a team of 5 developers delivering 3 major product releases",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Inc.",
    period: "2022 - 2024",
    description: "Developed and maintained full-stack web applications for diverse client portfolio.",
    achievements: [
      "Built 15+ responsive web applications using React and Node.js",
      "Designed and optimized PostgreSQL databases for enterprise applications",
      "Integrated third-party APIs including payment gateways and cloud services",
      "Achieved 95%+ client satisfaction rating across all projects"
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebCraft Agency",
    period: "2021 - 2022",
    description: "Created stunning user interfaces and interactive experiences for web applications.",
    achievements: [
      "Developed pixel-perfect UI components following modern design patterns",
      "Improved website accessibility scores from 60 to 95+",
      "Implemented responsive designs ensuring cross-device compatibility",
      "Collaborated with design team to create reusable component libraries"
    ]
  },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications using modern frameworks and best practices.",
    icon: "FiCode",
    features: ["Custom web applications", "SPA & SSR development", "Performance optimization", "Responsive design"],
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Creating intuitive and visually stunning user interfaces with smooth animations and exceptional UX.",
    icon: "FiLayout",
    features: ["React/Next.js development", "UI component libraries", "Animation & interaction", "Cross-browser compatibility"],
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Designing robust server-side architectures with scalable APIs and secure data handling.",
    icon: "FiServer",
    features: ["RESTful & GraphQL APIs", "Authentication & authorization", "Serverless architecture", "Microservices design"],
  },
  {
    id: 4,
    title: "Database Design",
    description: "Creating efficient database schemas and optimizing queries for maximum performance and reliability.",
    icon: "FiDatabase",
    features: ["Schema design & modeling", "Query optimization", "Data migration", "Database administration"],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/ekram", icon: "FiGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/ekram", icon: "FiLinkedin" },
  { name: "Twitter", url: "https://twitter.com/ekram", icon: "FiTwitter" },
  { name: "Email", url: "mailto:ekrammehamed13@gmail.com", icon: "FiMail" },
];

export const contactInfo = [
  { label: "Phone", value: "0901969880", href: "tel:0901969880", icon: "FiPhone" },
  { label: "Email", value: "ekrammehamed13@gmail.com", href: "mailto:ekrammehamed13@gmail.com", icon: "FiMail" },
  { label: "Location", value: "Ethiopia", href: "#", icon: "FiMapPin" },
];
