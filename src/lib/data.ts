
import type { Course, Module } from '@/types';

const sampleModulesGeneric: Module[] = [
  { id: 'm_intro', title: 'Introduction to Core Concepts', content: 'This module covers the fundamental principles and theories. We explore the history and evolution of the subject, laying a strong foundation for advanced topics. Key definitions and terminologies will be introduced and explained with practical examples.', duration: '45 minutes' },
  { id: 'm_setup', title: 'Setting Up Your Environment', content: 'Learn how to set up your development or working environment. This includes software installation, configuration, and necessary tools to get started. We provide step-by-step guides for Windows, macOS, and Linux.', duration: '60 minutes' },
  { id: 'm_project1', title: 'First Project: Getting Started', content: 'A hands-on module where you will build your first project. This classic "Hello World" style exercise will help you understand the basic workflow and see immediate results. We will also cover debugging basics.', duration: '30 minutes' },
  { id: 'm_advanced', title: 'Advanced Techniques & Best Practices', content: 'Delve into advanced techniques and best practices. This module explores complex problem-solving, optimization strategies, and efficient workflows. Case studies and real-world scenarios will be analyzed.', duration: '90 minutes' },
  { id: 'm_final', title: 'Final Project Submission and Review', content: 'Guidance on how to submit your final project for review. This module covers the submission criteria, common pitfalls to avoid, and how the review process works. Peer review examples will be discussed.', duration: '30 minutes' },
];

const sampleModulesTech: Module[] = [
  { id: 'mt_deep_dive', title: 'Deep Dive into Key Concepts', content: 'Explore various core concepts like data structures, algorithms, or specific tool functionalities. Understand their applications, advantages, and disadvantages. Performance considerations will be covered.', duration: '75 minutes' },
  { id: 'mt_practical_app', title: 'Practical Application and Design Patterns', content: 'Learn about common design paradigms and apply them. Implementations of classic patterns or solutions will be discussed with practical examples.', duration: '80 minutes' },
  { id: 'mt_integration', title: 'Integration and Advanced Usage', content: 'Understand how to integrate with other systems or use advanced features of the subject. This module covers APIs, tool integrations, or complex configurations.', duration: '50 minutes' },
];

const sampleModulesManualTesting: Module[] = [
  { id: 'mt_intro_stlc', title: 'Introduction to STLC & SDLC', content: 'Understand the Software Testing Life Cycle (STLC) and Software Development Life Cycle (SDLC). Learn how testing fits into the development process and the different phases involved. Explore various testing models like Waterfall, Agile, and V-Model.', duration: '60 minutes' },
  { id: 'mt_test_design', title: 'Test Design Techniques', content: 'Learn various black-box and white-box test design techniques such as Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, State Transition Testing, and Use Case Testing. Practical examples will be provided for each technique.', duration: '90 minutes' },
  { id: 'mt_test_execution', title: 'Test Execution and Reporting', content: 'Covering the process of executing test cases, logging defects, and reporting test results. Learn about different types of testing like Functional, Non-Functional, Regression, and Retesting. Defect life cycle management will also be discussed.', duration: '75 minutes' },
  { id: 'mt_agile_testing', title: 'Agile Testing & Tools', content: 'Deep dive into testing methodologies in an Agile environment, including Scrum and Kanban. Introduction to popular test management tools like JIRA, Zephyr, or TestRail. Learn about exploratory testing and session-based test management.', duration: '60 minutes' },
];

const sampleModulesDevOps: Module[] = [
    { id: 'do_intro', title: 'Introduction to DevOps Principles', content: 'Understand the core concepts of DevOps, C.A.L.M.S. framework, and the benefits of adopting a DevOps culture. Overview of the DevOps lifecycle and toolchain.', duration: '60 minutes' },
    { id: 'do_git', title: 'Version Control with Git & GitHub/GitLab', content: 'Master Git for version control, including branching, merging, rebasing, and pull requests. Learn to collaborate effectively using GitHub and GitLab.', duration: '90 minutes' },
    { id: 'do_docker', title: 'Containerization with Docker', content: 'Learn to build, manage, and deploy applications using Docker containers. Cover Dockerfiles, Docker Compose, and best practices for containerization.', duration: '120 minutes' },
    { id: 'do_kubernetes', title: 'Orchestration with Kubernetes (K8s)', content: 'Deep dive into Kubernetes for container orchestration. Understand Pods, Services, Deployments, ConfigMaps, Secrets, and Helm charts.', duration: '150 minutes' },
    { id: 'do_terraform', title: 'Infrastructure as Code (IaC) with Terraform', content: 'Manage cloud infrastructure using Terraform. Learn to write HCL, manage state, and provision resources across various cloud providers.', duration: '120 minutes' },
    { id: 'do_ansible', title: 'Configuration Management with Ansible', content: 'Automate configuration management using Ansible. Write playbooks, manage inventories, and ensure consistent environments.', duration: '90 minutes' },
    { id: 'do_jenkins', title: 'CI/CD with Jenkins & Maven', content: 'Set up CI/CD pipelines using Jenkins. Integrate with Maven for build automation and automate testing and deployment processes.', duration: '120 minutes' },
    { id: 'do_monitoring', title: 'Monitoring with Prometheus & Grafana', content: 'Implement monitoring solutions using Prometheus for metrics collection and Grafana for visualization. Set up alerts and dashboards.', duration: '90 minutes' },
    { id: 'do_logging', title: 'Logging with ELK Stack (Elasticsearch, Logstash, Kibana)', content: 'Centralize and analyze logs using the ELK Stack. Configure Logstash for data ingestion, Elasticsearch for storage and search, and Kibana for visualization.', duration: '90 minutes' },
    { id: 'do_artifactory', title: 'Artifact Management with JFrog Artifactory', content: 'Manage binary artifacts and dependencies using JFrog Artifactory. Integrate with CI/CD pipelines for efficient artifact storage and retrieval.', duration: '60 minutes' },
    { id: 'do_argocd', title: 'GitOps with ArgoCD', content: 'Implement GitOps principles for continuous delivery using ArgoCD. Synchronize application state with Git repositories.', duration: '75 minutes' },
    { id: 'do_vault', title: 'Secrets Management with HashiCorp Vault', content: 'Securely manage secrets and sensitive data using HashiCorp Vault. Integrate Vault with applications and CI/CD pipelines.', duration: '75 minutes' },
    { id: 'do_aws_tools', title: 'AWS DevOps Tools Overview', content: 'Explore AWS native DevOps tools like CodeCommit, CodeBuild, CodeDeploy, and CodePipeline. Learn how they integrate to form a complete CI/CD solution on AWS.', duration: '90 minutes' },
    { id: 'do_azure_devops', title: 'Azure DevOps Services', content: 'Introduction to Azure DevOps services including Azure Repos, Azure Pipelines, Azure Boards, Azure Test Plans, and Azure Artifacts.', duration: '90 minutes'},
];

const sampleModulesDataEngineering: Module[] = [
    { id: 'de_intro', title: 'Introduction to Data Engineering', content: 'An overview of the data engineering landscape, roles, responsibilities, and the lifecycle of data.', duration: '60 minutes' },
    { id: 'de_sql', title: 'Advanced SQL for Data Engineers', content: 'Master advanced SQL concepts like window functions, CTEs, and query optimization for large-scale data manipulation.', duration: '90 minutes' },
    { id: 'de_pipelines', title: 'Building ETL/ELT Pipelines', content: 'Learn to design and implement robust Extract, Transform, Load (ETL) and Extract, Load, Transform (ELT) pipelines.', duration: '120 minutes' },
    { id: 'de_spark', title: 'Big Data Processing with Apache Spark', content: 'A deep dive into Apache Spark for distributed data processing, including RDDs, DataFrames, and Spark SQL.', duration: '150 minutes' },
    { id: 'de_airflow', title: 'Workflow Orchestration with Apache Airflow', content: 'Automate, schedule, and monitor complex data workflows using Apache Airflow. Learn to create DAGs and manage tasks.', duration: '120 minutes' },
    { id: 'de_kafka', title: 'Real-time Data Streaming with Kafka', content: 'Explore the fundamentals of Apache Kafka for building real-time data streaming applications.', duration: '90 minutes' },
    { id: 'de_warehousing', title: 'Data Warehousing & Data Lakes', content: 'Understand the architecture and principles of modern data warehousing, data lakes, and data lakehouses.', duration: '90 minutes' },
];


export const courses: Course[] = [
  {
    id: 'manual-testing-fundamentals',
    title: 'Manual Testing Fundamentals & Best Practices',
    description: 'Master the core concepts and techniques of manual software testing.',
    longDescription: 'This course covers the fundamentals of manual testing, including test planning, test case design, execution, defect reporting, and various testing types (functional, usability, exploratory). Learn essential skills for ensuring software quality without automation. Ideal for aspiring QA professionals and those new to software testing.',
    category: 'Software Testing',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f',
    imageHint: 'quality assurance collaboration',
    modules: sampleModulesManualTesting,
    instructor: 'QA Lead Expert',
    rating: 4.5,
    enrolledStudents: 1500,
  },
  {
    id: 'java-masterclass',
    title: 'Java Programming Masterclass',
    description: 'Comprehensive guide to Java programming, from fundamentals to advanced topics.',
    longDescription: 'This masterclass covers Java syntax, object-oriented programming, data structures, algorithms, and an introduction to building applications with Java. Suitable for beginners and experienced programmers looking to solidify their Java knowledge.',
    category: 'Programming',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
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
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    imageHint: 'cloud architecture collaboration',
    modules: sampleModulesTech,
    instructor: 'Cloud Architect Pro',
    rating: 4.7,
    enrolledStudents: 2800,
  },
  {
    id: 'selenium-webdriver-automation',
    title: 'Selenium WebDriver for Test Automation',
    description: 'Learn to automate web application testing using Selenium WebDriver with Java.',
    longDescription: 'Master web automation with Selenium WebDriver. This course covers setup, element location, interactions, synchronization, test frameworks (TestNG/JUnit), and best practices for robust automated tests.',
    category: 'Software Testing',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
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
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    imageHint: 'modern web testing',
    modules: sampleModulesGeneric.slice(0,4),
    instructor: 'Cy Tester Pro',
    rating: 4.9,
    enrolledStudents: 1600,
  },
  {
    id: 'devops-bootcamp-full',
    title: 'The Complete DevOps Bootcamp',
    description: 'Master DevOps tools: Kubernetes, Docker, Terraform, Ansible, Jenkins, CI/CD, Git, Prometheus, Grafana, ELK, Jfrog Artifactory, ArgoCD, Helm, Vault, AWS DevOps tools, Azure DevOps and more.',
    longDescription: 'This bootcamp provides a comprehensive overview of DevOps principles and tools. Learn containerization with Docker, orchestration with Kubernetes, IaC with Terraform, configuration management with Ansible, CI/CD with Jenkins, Maven, GitLab & GitHub Actions, monitoring with Prometheus & Grafana, logging with ELK Stack, artifact management with Jfrog Artifactory, GitOps with ArgoCD, package management with Helm, secrets management with Vault, version control with Git. Also covers AWS native DevOps tools (CodeCommit, CodeBuild, CodeDeploy, CodePipeline) and Azure DevOps Services (Repos, Pipelines, Boards, Test Plans, Artifacts). Includes hands-on labs and a real-world project.',
    category: 'DevOps',
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
    imageHint: 'devops server room',
    modules: sampleModulesDevOps,
    instructor: 'DevOps Guru',
    rating: 4.8,
    enrolledStudents: 3200,
  },
  {
    id: 'data-engineering-bootcamp',
    title: 'Data Engineering Bootcamp',
    description: 'Build robust data pipelines and master ETL processes with tools like Spark, Airflow, and Kafka.',
    longDescription: "This comprehensive bootcamp covers the end-to-end data engineering lifecycle. You'll learn to design, build, and manage scalable data pipelines. Topics include data modeling, ETL/ELT processes, big data technologies like Apache Spark and Hadoop, workflow orchestration with Airflow, and real-time data streaming with Kafka. This course is perfect for software engineers or analysts looking to specialize in data engineering.",
    category: 'Data Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    imageHint: 'data pipelines flowchart',
    modules: sampleModulesDataEngineering,
    instructor: 'Data Architect Pro',
    rating: 4.7,
    enrolledStudents: 1900,
  },
  {
    id: 'playwright-modern-testing',
    title: 'End-to-End Testing with Playwright',
    description: 'Learn modern, reliable E2E testing with Microsoft Playwright across browsers and platforms.',
    longDescription: "Explore Playwright for robust end-to-end testing. This course covers Playwright's powerful features like auto-waits, network interception, multi-page emulation, and its API for JavaScript/TypeScript, Python, Java, and C#.",
    category: 'Software Testing',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
    imageHint: 'playwright automation browser',
    modules: sampleModulesGeneric.slice(0,3),
    instructor: 'Wright Tester',
    rating: 4.6,
    enrolledStudents: 1200,
  }
];

// Removed userProfile object as it's no longer needed.

export const getCourseById = (id: string): Course | undefined => courses.find(course => course.id === id);

export const getModuleById = (courseId: string, moduleId: string): Module | undefined => {
  const course = getCourseById(courseId);
  return course?.modules.find(module => module.id === moduleId);
};
