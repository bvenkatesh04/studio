
import type { Course, UserProfile, Module } from '@/types';

const sampleModules: Module[] = [
  { id: 'm1_1', title: 'Introduction to Core Concepts', content: 'This module covers the fundamental principles and theories. We explore the history and evolution of the subject, laying a strong foundation for advanced topics. Key definitions and terminologies will be introduced and explained with practical examples.', duration: '45 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'm1_2', title: 'Setting Up Your Environment', content: 'Learn how to set up your development or working environment. This includes software installation, configuration, and necessary tools to get started. We provide step-by-step guides for Windows, macOS, and Linux.', duration: '60 minutes' },
  { id: 'm1_3', title: 'First Project: Getting Started', content: 'A hands-on module where you will build your first project. This classic "Hello World" style exercise will help you understand the basic workflow and see immediate results. We will also cover debugging basics.', duration: '30 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'm1_4', title: 'Advanced Techniques & Best Practices', content: 'Delve into advanced techniques and best practices. This module explores complex problem-solving, optimization strategies, and efficient workflows. Case studies and real-world scenarios will be analyzed.', duration: '90 minutes' },
  { id: 'm1_5', title: 'Final Project Submission and Review', content: 'Guidance on how to submit your final project for review. This module covers the submission criteria, common pitfalls to avoid, and how the review process works. Peer review examples will be discussed.', duration: '30 minutes' },
];

const sampleModules2: Module[] = [
  { id: 'm2_1', title: 'Deep Dive into Key Concepts', content: 'Explore various core concepts like data structures, algorithms, or specific tool functionalities. Understand their applications, advantages, and disadvantages. Performance considerations will be covered.', duration: '75 minutes' },
  { id: 'm2_2', title: 'Practical Application and Design Patterns', content: 'Learn about common design paradigms and apply them. Implementations of classic patterns or solutions will be discussed with practical examples.', duration: '80 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'm2_3', title: 'Integration and Advanced Usage', content: 'Understand how to integrate with other systems or use advanced features of the subject. This module covers APIs, tool integrations, or complex configurations.', duration: '50 minutes' },
];

export const courses: Course[] = [
  {
    id: 'java-programming',
    title: 'Java Programming Masterclass',
    description: 'Learn Java from scratch and build robust applications.',
    longDescription: 'This comprehensive Java course covers everything from basic syntax, object-oriented programming, data structures, to advanced topics like multithreading and a Spring Boot introduction. Perfect for beginners and those looking to solidify their Java skills.',
    category: 'Programming Languages',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'java code',
    modules: sampleModules,
    instructor: 'Dr. Code Java',
    rating: 4.7,
    enrolledStudents: 1800,
  },
  {
    id: 'selenium-automation',
    title: 'Selenium WebDriver for Test Automation',
    description: 'Automate web application testing using Selenium WebDriver with Java/Python.',
    longDescription: 'Dive into web automation with Selenium WebDriver. This course covers setting up your environment, locating web elements, performing actions, handling synchronization, creating test frameworks (like TestNG/JUnit or PyTest), and best practices for reliable automated tests.',
    category: 'Test Automation',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'automation testing',
    modules: sampleModules2,
    instructor: 'Tessa Automator',
    rating: 4.8,
    enrolledStudents: 1500,
  },
  {
    id: 'cypress-e2e-testing',
    title: 'Modern Web Testing with Cypress',
    description: 'Master End-to-End testing for modern web apps with Cypress.',
    longDescription: 'Learn how to write fast, easy, and reliable tests for anything that runs in a browser. This course covers Cypress architecture, writing tests, interacting with elements, network request stubbing, CI/CD integration, and advanced patterns.',
    category: 'Test Automation',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern testing',
    modules: sampleModules.slice(0, 4),
    instructor: 'Cy Pressman',
    rating: 4.9,
    enrolledStudents: 1200,
  },
  {
    id: 'complete-devops-bootcamp',
    title: 'The Complete DevOps Bootcamp',
    description: 'Master Kubernetes, Docker, Terraform, Ansible, Jenkins, CI/CD, Monitoring and more.',
    longDescription: "This extensive DevOps bootcamp covers a wide array of essential tools and practices. You'll learn about containerization with Docker, orchestration with Kubernetes, Infrastructure as Code with Terraform, configuration management with Ansible, CI/CD pipelines with Jenkins, Maven, GitLab & GitHub Actions, monitoring with Prometheus & Grafana, logging with ELK Stack, artifact management with Jfrog Artifactory, and version control with Git. Prepare for a career in DevOps.",
    category: 'DevOps',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'devops pipeline',
    modules: sampleModules, 
    instructor: 'Ops Engineer Pro',
    rating: 4.7,
    enrolledStudents: 2500,
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect - Associate Prep',
    description: 'Prepare for the AWS SAA-C03 exam and learn to design solutions on AWS.',
    longDescription: 'This course is designed to help you pass the AWS Certified Solutions Architect - Associate exam. Learn about core AWS services like EC2, S3, VPC, RDS, IAM, Route 53, CloudFormation, and how to design secure, scalable, and cost-effective applications on AWS.',
    category: 'Cloud Computing',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cloud servers',
    modules: sampleModules2,
    instructor: 'Cloud Guru Alex',
    rating: 4.8,
    enrolledStudents: 2100,
  },
  {
    id: 'playwright-testing-modern-apps',
    title: 'End-to-End Testing with Playwright',
    description: 'Learn modern, reliable E2E testing with Microsoft Playwright.',
    longDescription: "Discover the power of Playwright for cross-browser, cross-platform, and cross-language end-to-end testing. This course covers Playwright's unique features like auto-waits, network interception, multi-page emulation, and its API for JavaScript/TypeScript, Python, Java, and C#.",
    category: 'Test Automation',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'browser automation',
    modules: sampleModules.slice(0, 3),
    instructor: 'Paula Wright',
    rating: 4.7,
    enrolledStudents: 950,
  },
];

export const userProfile: UserProfile = {
  id: 'user123',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatarUrl: 'https://placehold.co/100x100.png',
  bio: 'Passionate software developer and lifelong learner. Currently exploring cutting-edge tech.',
  coursesEnrolled: courses.filter(c => ['java-programming', 'selenium-automation'].includes(c.id)),
  coursesCompleted: courses.filter(c => ['cypress-e2e-testing'].includes(c.id)),
  progress: [
    { courseId: 'java-programming', completedModules: ['m1_1'] },
    { courseId: 'selenium-automation', completedModules: ['m2_1'] },
  ],
};

export const getCourseById = (id: string): Course | undefined => courses.find(course => course.id === id);

export const getModuleById = (courseId: string, moduleId: string): Module | undefined => {
  const course = getCourseById(courseId);
  return course?.modules.find(module => module.id === moduleId);
};
