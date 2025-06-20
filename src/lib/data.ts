
import type { Course, UserProfile, Module } from '@/types';

const sampleModulesGeneric: Module[] = [
  { id: 'm_intro', title: 'Introduction to Core Concepts', content: 'This module covers the fundamental principles and theories. We explore the history and evolution of the subject, laying a strong foundation for advanced topics. Key definitions and terminologies will be introduced and explained with practical examples.', duration: '45 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'm_setup', title: 'Setting Up Your Environment', content: 'Learn how to set up your development or working environment. This includes software installation, configuration, and necessary tools to get started. We provide step-by-step guides for Windows, macOS, and Linux.', duration: '60 minutes' },
  { id: 'm_project1', title: 'First Project: Getting Started', content: 'A hands-on module where you will build your first project. This classic "Hello World" style exercise will help you understand the basic workflow and see immediate results. We will also cover debugging basics.', duration: '30 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'm_advanced', title: 'Advanced Techniques & Best Practices', content: 'Delve into advanced techniques and best practices. This module explores complex problem-solving, optimization strategies, and efficient workflows. Case studies and real-world scenarios will be analyzed.', duration: '90 minutes' },
  { id: 'm_final', title: 'Final Project Submission and Review', content: 'Guidance on how to submit your final project for review. This module covers the submission criteria, common pitfalls to avoid, and how the review process works. Peer review examples will be discussed.', duration: '30 minutes' },
];

const sampleModulesTech: Module[] = [
  { id: 'mt_deep_dive', title: 'Deep Dive into Key Concepts', content: 'Explore various core concepts like data structures, algorithms, or specific tool functionalities. Understand their applications, advantages, and disadvantages. Performance considerations will be covered.', duration: '75 minutes' },
  { id: 'mt_practical_app', title: 'Practical Application and Design Patterns', content: 'Learn about common design paradigms and apply them. Implementations of classic patterns or solutions will be discussed with practical examples.', duration: '80 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'mt_integration', title: 'Integration and Advanced Usage', content: 'Understand how to integrate with other systems or use advanced features of the subject. This module covers APIs, tool integrations, or complex configurations.', duration: '50 minutes' },
];

const sampleModulesManualTesting: Module[] = [
  { id: 'mt_intro_stlc', title: 'Introduction to STLC & SDLC', content: 'Understand the Software Testing Life Cycle (STLC) and Software Development Life Cycle (SDLC). Learn how testing fits into the development process and the different phases involved. Explore various testing models like Waterfall, Agile, and V-Model.', duration: '60 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'mt_test_design', title: 'Test Design Techniques', content: 'Learn various black-box and white-box test design techniques such as Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, State Transition Testing, and Use Case Testing. Practical examples will be provided for each technique.', duration: '90 minutes' },
  { id: 'mt_test_execution', title: 'Test Execution and Reporting', content: 'Covering the process of executing test cases, logging defects, and reporting test results. Learn about different types of testing like Functional, Non-Functional, Regression, and Retesting. Defect life cycle management will also be discussed.', duration: '75 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'  },
  { id: 'mt_agile_testing', title: 'Agile Testing & Tools', content: 'Deep dive into testing methodologies in an Agile environment, including Scrum and Kanban. Introduction to popular test management tools like JIRA, Zephyr, or TestRail. Learn about exploratory testing and session-based test management.', duration: '60 minutes' },
];


export const courses: Course[] = [
  {
    id: 'java-masterclass',
    title: 'Java Programming Masterclass',
    description: 'Comprehensive guide to Java programming, from fundamentals to advanced topics.',
    longDescription: 'This masterclass covers Java syntax, object-oriented programming, data structures, algorithms, and an introduction to building applications with Java. Suitable for beginners and experienced programmers looking to solidify their Java knowledge.',
    category: 'Programming',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'java code',
    modules: sampleModulesGeneric,
    instructor: 'Dr. Java Expert',
    rating: 4.8,
    enrolledStudents: 2500,
  },
  {
    id: 'aws-solutions-architect-associate',
    title: 'AWS Certified Solutions Architect - Associate Prep',
    description: 'Prepare for the AWS SAA-C03 exam. Learn to design resilient, high-performing, secure, and cost-optimized architectures.',
    longDescription: 'This course is tailored for the AWS Certified Solutions Architect - Associate (SAA-C03) exam. It covers core AWS services, including EC2, S3, VPC, RDS, IAM, Lambda, CloudFormation, and teaches best practices for designing solutions on AWS.',
    category: 'Cloud Computing',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'aws cloud architecture',
    modules: sampleModulesTech,
    instructor: 'Cloud Architect Pro',
    rating: 4.7,
    enrolledStudents: 2800,
  },
  {
    id: 'manual-testing-fundamentals',
    title: 'Manual Testing Fundamentals & Best Practices',
    description: 'Master the core concepts and techniques of manual software testing.',
    longDescription: 'This course covers the fundamentals of manual testing, including test planning, test case design, execution, defect reporting, and various testing types (functional, usability, exploratory). Learn essential skills for ensuring software quality without automation. Ideal for aspiring QA professionals and those new to software testing.',
    category: 'Software Testing',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'quality assurance checklist',
    modules: sampleModulesManualTesting,
    instructor: 'QA Lead Expert',
    rating: 4.5,
    enrolledStudents: 1500,
  },
  {
    id: 'selenium-webdriver-automation',
    title: 'Selenium WebDriver for Test Automation',
    description: 'Learn to automate web application testing using Selenium WebDriver with Java.',
    longDescription: 'Master web automation with Selenium WebDriver. This course covers setup, element location, interactions, synchronization, test frameworks (TestNG/JUnit), and best practices for robust automated tests.',
    category: 'Software Testing',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'automation testing',
    modules: sampleModulesTech,
    instructor: 'Automation Ace',
    rating: 4.7,
    enrolledStudents: 1800,
  },
  {
    id: 'cypress-e2e-testing-expert',
    title: 'Cypress: Modern End-to-End Web Testing',
    description: 'Become an expert in end-to-end testing for modern web applications with Cypress.',
    longDescription: 'Learn Cypress from scratch. This course covers test writing, selectors, assertions, handling async operations, network stubbing, component testing, and integrating Cypress into CI/CD pipelines.',
    category: 'Software Testing',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern web testing',
    modules: sampleModulesGeneric.slice(0,4),
    instructor: 'Cy Tester Pro',
    rating: 4.9,
    enrolledStudents: 1600,
  },
  {
    id: 'devops-bootcamp-full',
    title: 'The Complete DevOps Bootcamp',
    description: 'Master DevOps tools: Kubernetes, Docker, Terraform, Ansible, Jenkins, CI/CD, Git, Prometheus, Grafana, ELK, Jfrog Artifactory, ArgoCD, Helm, Vault, and more.',
    longDescription: 'This bootcamp provides a comprehensive overview of DevOps principles and tools. Learn containerization with Docker, orchestration with Kubernetes, IaC with Terraform, configuration management with Ansible, CI/CD with Jenkins, Maven, GitLab & GitHub Actions, monitoring with Prometheus & Grafana, logging with ELK Stack, artifact management with Jfrog Artifactory, GitOps with ArgoCD, package management with Helm, secrets management with Vault and version control with Git. Includes hands-on labs and real-world scenarios.',
    category: 'DevOps',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'devops tools pipeline',
    modules: sampleModulesGeneric,
    instructor: 'DevOps Guru',
    rating: 4.8,
    enrolledStudents: 3200,
  },
  {
    id: 'playwright-modern-testing',
    title: 'End-to-End Testing with Playwright',
    description: 'Learn modern, reliable E2E testing with Microsoft Playwright across browsers and platforms.',
    longDescription: "Explore Playwright for robust end-to-end testing. This course covers Playwright's powerful features like auto-waits, network interception, multi-page emulation, and its API for JavaScript/TypeScript, Python, Java, and C#.",
    category: 'Software Testing',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'playwright automation browser',
    modules: sampleModulesGeneric.slice(0,3),
    instructor: 'Wright Tester',
    rating: 4.6,
    enrolledStudents: 1200,
  }
];

export const userProfile: UserProfile = {
  id: 'user123',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatarUrl: 'https://placehold.co/100x100.png',
  bio: 'Passionate software developer and lifelong learner. Currently exploring cutting-edge tech.',
  coursesEnrolled: courses.filter(c => ['java-masterclass', 'aws-solutions-architect-associate', 'manual-testing-fundamentals'].includes(c.id)),
  coursesCompleted: courses.filter(c => ['selenium-webdriver-automation'].includes(c.id)),
  progress: [
    { courseId: 'java-masterclass', completedModules: ['m_intro'] },
    { courseId: 'aws-solutions-architect-associate', completedModules: ['mt_deep_dive'] },
    { courseId: 'manual-testing-fundamentals', completedModules: ['mt_intro_stlc', 'mt_test_design'] },
  ],
};

export const getCourseById = (id: string): Course | undefined => courses.find(course => course.id === id);

export const getModuleById = (courseId: string, moduleId: string): Module | undefined => {
  const course = getCourseById(courseId);
  return course?.modules.find(module => module.id === moduleId);
};

