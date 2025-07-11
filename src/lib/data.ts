import type { Course, Module } from '@/types';

const sampleModulesGeneric: Module[] = [
  { id: 'm_intro', title: 'Introduction to Core Concepts', content: 'This module covers the fundamental principles and theories. We explore the history and evolution of the subject, laying a strong foundation for advanced topics. Key definitions and terminologies will be introduced and explained with practical examples.', duration: '45 minutes' },
  { id: 'm_setup', title: 'Setting Up Your Environment', content: 'Learn how to set up your development or working environment. This includes software installation, configuration, and necessary tools to get started. We provide step-by-step guides for Windows, macOS, and Linux.', duration: '60 minutes' },
  { id: 'm_project1', title: 'First Project: Getting Started', content: 'A hands-on project where you will build your first project. This classic "Hello World" style exercise will help you understand the basic workflow and see immediate results. We will also cover debugging basics.', duration: '30 minutes' },
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

// Comprehensive AWS Cloud Engineer Modules
const awsCloudEngineerModules: Module[] = [
    // Foundation & Core Services
    { 
        id: 'aws_foundations', 
        title: 'AWS Cloud Foundations & Global Infrastructure', 
        content: 'Master AWS fundamentals including global infrastructure, regions, availability zones, edge locations, and the AWS Well-Architected Framework. Understand cloud computing models, AWS service categories, and the shared responsibility model. Learn about AWS pricing models, billing, and cost optimization strategies.', 
        duration: '90 minutes' 
    },
    { 
        id: 'aws_iam', 
        title: 'Identity & Access Management (IAM)', 
        content: 'Deep dive into AWS IAM including users, groups, roles, and policies. Learn about multi-factor authentication (MFA), identity federation, AWS Organizations, Service Control Policies (SCPs), and IAM best practices. Understand cross-account access, temporary credentials, and security token service (STS).', 
        duration: '120 minutes' 
    },
    
    // Compute Services
    { 
        id: 'aws_ec2', 
        title: 'Elastic Compute Cloud (EC2) & Auto Scaling', 
        content: 'Master EC2 instances, instance types, AMIs, security groups, and key pairs. Learn about Elastic Load Balancing (ALB, NLB, CLB), Auto Scaling Groups, launch templates, and placement groups. Understand EC2 pricing models, Spot instances, Reserved instances, and Dedicated hosts.', 
        duration: '150 minutes' 
    },
    { 
        id: 'aws_lambda', 
        title: 'AWS Lambda & Serverless Computing', 
        content: 'Explore serverless computing with AWS Lambda, including function creation, triggers, layers, and versions. Learn about API Gateway, Step Functions, EventBridge, and serverless application patterns. Understand Lambda pricing, cold starts, and performance optimization.', 
        duration: '120 minutes' 
    },
    { 
        id: 'aws_containers', 
        title: 'Container Services: ECS, EKS & Fargate', 
        content: 'Learn container orchestration with Amazon ECS, EKS (Kubernetes), and AWS Fargate. Understand task definitions, services, clusters, and container networking. Explore ECR for container registry, service mesh with App Mesh, and container security best practices.', 
        duration: '180 minutes' 
    },
    
    // Storage Services
    { 
        id: 'aws_s3', 
        title: 'Simple Storage Service (S3) & Storage Classes', 
        content: 'Master S3 buckets, objects, versioning, and lifecycle policies. Learn about S3 storage classes (Standard, IA, Glacier, Deep Archive), Cross-Region Replication, Transfer Acceleration, and S3 security features including bucket policies and ACLs.', 
        duration: '120 minutes' 
    },
    { 
        id: 'aws_ebs_efs', 
        title: 'Elastic Block Store (EBS) & Elastic File System (EFS)', 
        content: 'Understand EBS volume types, snapshots, encryption, and performance optimization. Learn about EFS for shared file storage, mount targets, performance modes, and throughput modes. Explore FSx for high-performance file systems.', 
        duration: '90 minutes' 
    },
    
    // Database Services
    { 
        id: 'aws_rds', 
        title: 'Relational Database Service (RDS) & Aurora', 
        content: 'Master RDS for managed relational databases including MySQL, PostgreSQL, Oracle, and SQL Server. Learn about Aurora serverless, read replicas, Multi-AZ deployments, automated backups, and database security. Understand RDS Proxy and performance insights.', 
        duration: '120 minutes' 
    },
    { 
        id: 'aws_nosql', 
        title: 'DynamoDB & NoSQL Database Services', 
        content: 'Deep dive into DynamoDB including tables, items, partition keys, sort keys, and indexes (GSI/LSI). Learn about DynamoDB Streams, DAX for caching, on-demand vs provisioned capacity, and DynamoDB best practices for performance and cost optimization.', 
        duration: '120 minutes' 
    },
    { 
        id: 'aws_data_services', 
        title: 'Data Warehousing: Redshift, EMR & Analytics', 
        content: 'Explore Amazon Redshift for data warehousing, EMR for big data processing, and analytics services like Athena, QuickSight, and Kinesis. Learn about data lakes with Lake Formation, Glue for ETL, and real-time analytics with Kinesis Data Analytics.', 
        duration: '150 minutes' 
    },
    
    // Networking & Content Delivery
    { 
        id: 'aws_vpc', 
        title: 'Virtual Private Cloud (VPC) & Advanced Networking', 
        content: 'Master VPC creation, subnets, route tables, internet gateways, and NAT gateways. Learn about VPC peering, Transit Gateway, VPN connections, Direct Connect, and network security with NACLs and security groups. Understand VPC endpoints and PrivateLink.', 
        duration: '180 minutes' 
    },
    { 
        id: 'aws_cloudfront', 
        title: 'CloudFront CDN & Global Content Delivery', 
        content: 'Learn about CloudFront distributions, origins, behaviors, and caching strategies. Understand edge locations, Lambda@Edge, CloudFront Functions, and integration with other AWS services. Explore Global Accelerator for improved application performance.', 
        duration: '90 minutes' 
    },
    { 
        id: 'aws_route53', 
        title: 'Route 53 DNS & Domain Management', 
        content: 'Master Route 53 for DNS management, hosted zones, record types, and routing policies (simple, weighted, latency-based, failover, geolocation). Learn about health checks, domain registration, and DNS security with DNSSEC.', 
        duration: '75 minutes' 
    },
    
    // Security & Compliance
    { 
        id: 'aws_security', 
        title: 'AWS Security Services & Best Practices', 
        content: 'Comprehensive security coverage including AWS WAF, Shield, GuardDuty, Inspector, and Security Hub. Learn about AWS Config for compliance, CloudTrail for auditing, and KMS for encryption. Understand AWS Secrets Manager, Parameter Store, and Certificate Manager.', 
        duration: '150 minutes' 
    },
    { 
        id: 'aws_compliance', 
        title: 'Compliance, Governance & Risk Management', 
        content: 'Learn about AWS compliance frameworks (SOC, PCI DSS, HIPAA, GDPR), AWS Artifact for compliance reports, and governance with AWS Organizations, Control Tower, and Service Catalog. Understand risk management and security assessment tools.', 
        duration: '90 minutes' 
    },
    
    // Monitoring & Operations
    { 
        id: 'aws_cloudwatch', 
        title: 'CloudWatch Monitoring & Observability', 
        content: 'Master CloudWatch metrics, alarms, dashboards, and logs. Learn about CloudWatch Insights, X-Ray for distributed tracing, and AWS Systems Manager for operational insights. Understand custom metrics, log aggregation, and automated responses.', 
        duration: '120 minutes' 
    },
    { 
        id: 'aws_automation', 
        title: 'Systems Manager & Automation', 
        content: 'Explore AWS Systems Manager for patch management, parameter store, session manager, and automation documents. Learn about AWS Config for configuration management, CloudFormation for infrastructure as code, and AWS CLI/SDK for automation.', 
        duration: '120 minutes' 
    },
    
    // DevOps & CI/CD
    { 
        id: 'aws_devops', 
        title: 'AWS DevOps Tools: CodeCommit, CodeBuild, CodeDeploy, CodePipeline', 
        content: 'Master AWS native DevOps tools for complete CI/CD pipelines. Learn about CodeCommit for source control, CodeBuild for build automation, CodeDeploy for deployment automation, and CodePipeline for orchestrating the entire pipeline. Understand integration with third-party tools.', 
        duration: '150 minutes' 
    },
    { 
        id: 'aws_cloudformation', 
        title: 'Infrastructure as Code with CloudFormation & CDK', 
        content: 'Deep dive into CloudFormation templates, stacks, stack sets, and drift detection. Learn about AWS CDK for programmatic infrastructure definition, nested stacks, cross-stack references, and CloudFormation best practices for large-scale deployments.', 
        duration: '120 minutes' 
    },
    
    // Application Integration
    { 
        id: 'aws_messaging', 
        title: 'Messaging & Integration: SQS, SNS, EventBridge', 
        content: 'Master AWS messaging services including SQS for queuing, SNS for notifications, and EventBridge for event-driven architectures. Learn about message ordering, dead letter queues, fan-out patterns, and event routing. Understand API Gateway for RESTful APIs.', 
        duration: '120 minutes' 
    },
    
    // Cost Management & Optimization
    { 
        id: 'aws_cost_optimization', 
        title: 'Cost Management & Optimization Strategies', 
        content: 'Learn comprehensive cost optimization including Reserved Instances, Savings Plans, Spot Instances, and rightsizing. Master AWS Cost Explorer, Budgets, Cost and Usage Reports, and Trusted Advisor. Understand cost allocation tags and multi-account billing strategies.', 
        duration: '90 minutes' 
    },
    
    // Migration & Hybrid Cloud
    { 
        id: 'aws_migration', 
        title: 'Cloud Migration & Hybrid Solutions', 
        content: 'Explore migration strategies using AWS Migration Hub, Database Migration Service (DMS), Server Migration Service (SMS), and DataSync. Learn about hybrid cloud solutions with Storage Gateway, Outposts, and Wavelength for edge computing.', 
        duration: '120 minutes' 
    },
    
    // Advanced Services & Emerging Technologies
    { 
        id: 'aws_ml_ai', 
        title: 'Machine Learning & AI Services', 
        content: 'Introduction to AWS ML/AI services including SageMaker, Rekognition, Comprehend, Polly, and Lex. Learn about pre-trained models, custom model training, and ML pipeline automation. Understand AI/ML integration patterns and use cases.', 
        duration: '90 minutes' 
    },
    { 
        id: 'aws_iot_edge', 
        title: 'IoT & Edge Computing Solutions', 
        content: 'Explore AWS IoT Core, IoT Device Management, and IoT Analytics. Learn about edge computing with AWS IoT Greengrass, Wavelength for 5G applications, and Local Zones for ultra-low latency applications.', 
        duration: '75 minutes' 
    },
    
    // Disaster Recovery & Business Continuity
    { 
        id: 'aws_disaster_recovery', 
        title: 'Disaster Recovery & Business Continuity', 
        content: 'Master disaster recovery strategies including backup and restore, pilot light, warm standby, and multi-site active-active. Learn about AWS Backup, cross-region replication, and RTO/RPO planning. Understand business continuity best practices.', 
        duration: '90 minutes' 
    },
    
    // Real-World Projects & Case Studies
    { 
        id: 'aws_architecture_patterns', 
        title: 'AWS Architecture Patterns & Design Principles', 
        content: 'Learn common AWS architecture patterns including 3-tier web applications, microservices, event-driven architectures, and data lakes. Understand the AWS Well-Architected Framework pillars: operational excellence, security, reliability, performance efficiency, and cost optimization.', 
        duration: '120 minutes' 
    },
    { 
        id: 'aws_capstone_project', 
        title: 'Capstone Project: End-to-End AWS Solution', 
        content: 'Build a comprehensive, production-ready AWS solution incorporating multiple services. Design and implement a scalable, secure, and cost-effective architecture. Include monitoring, logging, security, CI/CD pipeline, and disaster recovery. Present and defend your architectural decisions.', 
        duration: '180 minutes' 
    }
];

export const courses: Course[] = [
  {
    id: 'manual-testing-fundamentals',
    title: 'Manual Testing Fundamentals & Best Practices',
    description: 'Master the core concepts and techniques of manual software testing.',
    longDescription: 'This course covers the fundamentals of manual testing, including test planning, test case design, execution, defect reporting, and various testing types (functional, usability, exploratory). Learn essential skills for ensuring software quality without automation. Ideal for aspiring QA professionals and those new to software testing.',
    category: 'Software Testing',
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHint: 'software testing bug tracking checklist code quality',
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
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHint: 'java programming code syntax computer screen',
    modules: sampleModulesGeneric,
    instructor: 'Dr. Java Expert',
    rating: 4.8,
    enrolledStudents: 2500,
  },
  {
    id: 'aws-cloud-engineer-complete',
    title: 'Complete AWS Cloud Engineer Certification Path',
    description: 'Master all AWS services essential for cloud engineers. From foundational services to advanced architectures, security, DevOps, and cost optimization.',
    longDescription: 'This comprehensive course covers every AWS service a cloud engineer needs to master. Learn EC2, S3, VPC, RDS, Lambda, ECS/EKS, CloudFormation, IAM, CloudWatch, and 50+ other services. Includes hands-on labs, real-world projects, security best practices, cost optimization, disaster recovery, and preparation for AWS certifications (Solutions Architect, SysOps Administrator, DevOps Engineer).',
    category: 'Cloud Computing',
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHint: 'aws cloud computing server infrastructure architecture',
    modules: awsCloudEngineerModules,
    instructor: 'AWS Solutions Architect Pro',
    rating: 4.9,
    enrolledStudents: 3500,
  },
  {
    id: 'selenium-webdriver-automation',
    title: 'Selenium WebDriver for Test Automation',
    description: 'Learn to automate web application testing using Selenium WebDriver with Java.',
    longDescription: 'Master web automation with Selenium WebDriver. This course covers setup, element location, interactions, synchronization, test frameworks (TestNG/JUnit), and best practices for robust automated tests.',
    category: 'Software Testing',
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHint: 'selenium automation testing browser code terminal',
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
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHint: 'cypress modern web testing framework code editor',
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
    imageUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHint: 'devops kubernetes docker containers infrastructure code',
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
    imageUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHint: 'data engineering pipelines analytics dashboard charts',
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
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageHint: 'playwright automation testing cross browser code',
    modules: sampleModulesGeneric.slice(0,3),
    instructor: 'Wright Tester',
    rating: 4.6,
    enrolledStudents: 1200,
  }
];

export const getCourseById = (id: string): Course | undefined => courses.find(course => course.id === id);

export const getModuleById = (courseId: string, moduleId: string): Module | undefined => {
  const course = getCourseById(courseId);
  return course?.modules.find(module => module.id === moduleId);
};

export async function getAllCourses() {
  return courses;
}