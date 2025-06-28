import type { CommunityMember, Badge, ForumPost, Event, Achievement, StudyGroup } from '@/types/community';

export const badges: Badge[] = [
  {
    id: 'early-adopter',
    name: 'Early Adopter',
    description: 'Joined TechFarm in the first month',
    icon: '🚀',
    color: 'bg-purple-500',
    earnedDate: '2024-01-15'
  },
  {
    id: 'course-master',
    name: 'Course Master',
    description: 'Completed 5+ courses',
    icon: '🎓',
    color: 'bg-blue-500',
    earnedDate: '2024-02-20'
  },
  {
    id: 'helpful-mentor',
    name: 'Helpful Mentor',
    description: 'Helped 50+ community members',
    icon: '🤝',
    color: 'bg-green-500',
    earnedDate: '2024-03-10'
  },
  {
    id: 'code-warrior',
    name: 'Code Warrior',
    description: 'Completed advanced programming challenges',
    icon: '⚔️',
    color: 'bg-red-500',
    earnedDate: '2024-03-25'
  }
];

export const communityMembers: CommunityMember[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    title: 'Senior DevOps Engineer',
    location: 'San Francisco, CA',
    joinDate: '2024-01-15',
    bio: 'Passionate about cloud infrastructure and automation. Love helping others learn DevOps best practices.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins'],
    coursesCompleted: 8,
    reputation: 2450,
    badges: [badges[0], badges[1], badges[2]],
    socialLinks: {
      github: 'https://github.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen'
    },
    isOnline: true,
    lastActive: '2024-01-20T10:30:00Z'
  },
  {
    id: 'alex-rodriguez',
    name: 'Alex Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    title: 'Full Stack Developer',
    location: 'Austin, TX',
    joinDate: '2024-01-20',
    bio: 'Building scalable web applications with modern technologies. Always eager to learn and share knowledge.',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    coursesCompleted: 6,
    reputation: 1890,
    badges: [badges[0], badges[1]],
    socialLinks: {
      github: 'https://github.com/alexrodriguez',
      linkedin: 'https://linkedin.com/in/alexrodriguez'
    },
    isOnline: false,
    lastActive: '2024-01-19T15:45:00Z'
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    title: 'QA Automation Engineer',
    location: 'Barcelona, Spain',
    joinDate: '2024-02-01',
    bio: 'Quality assurance expert specializing in test automation frameworks and CI/CD integration.',
    skills: ['Selenium', 'Cypress', 'TestNG', 'Java', 'Python'],
    coursesCompleted: 4,
    reputation: 1340,
    badges: [badges[1], badges[2]],
    socialLinks: {
      github: 'https://github.com/mariagarcia',
      linkedin: 'https://linkedin.com/in/mariagarcia',
      website: 'https://mariagarcia.dev'
    },
    isOnline: true,
    lastActive: '2024-01-20T09:15:00Z'
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    title: 'Data Engineer',
    location: 'Seoul, South Korea',
    joinDate: '2024-02-10',
    bio: 'Building robust data pipelines and analytics platforms. Passionate about big data technologies.',
    skills: ['Apache Spark', 'Kafka', 'Python', 'SQL', 'Airflow'],
    coursesCompleted: 5,
    reputation: 1670,
    badges: [badges[1], badges[3]],
    socialLinks: {
      github: 'https://github.com/davidkim',
      linkedin: 'https://linkedin.com/in/davidkim'
    },
    isOnline: false,
    lastActive: '2024-01-19T22:30:00Z'
  }
];

export const forumPosts: ForumPost[] = [
  {
    id: 'post-1',
    title: 'Best practices for Kubernetes deployment in production',
    content: 'I\'m looking for advice on deploying applications to Kubernetes in a production environment. What are the key considerations for security, monitoring, and scalability?',
    author: communityMembers[1],
    category: 'DevOps',
    tags: ['kubernetes', 'production', 'deployment', 'best-practices'],
    createdAt: '2024-01-20T08:30:00Z',
    updatedAt: '2024-01-20T08:30:00Z',
    likes: 24,
    replies: 8,
    isLiked: false,
    isPinned: true,
    isSolved: false
  },
  {
    id: 'post-2',
    title: 'Cypress vs Selenium: Which should I choose for E2E testing?',
    content: 'I\'m starting a new project and need to decide between Cypress and Selenium for end-to-end testing. What are the pros and cons of each?',
    author: communityMembers[2],
    category: 'Testing',
    tags: ['cypress', 'selenium', 'e2e-testing', 'comparison'],
    createdAt: '2024-01-19T14:20:00Z',
    updatedAt: '2024-01-19T16:45:00Z',
    likes: 18,
    replies: 12,
    isLiked: true,
    isPinned: false,
    isSolved: true
  },
  {
    id: 'post-3',
    title: 'Data pipeline optimization with Apache Spark',
    content: 'Sharing some tips on optimizing Spark jobs for better performance. Here are the techniques that worked best for me...',
    author: communityMembers[3],
    category: 'Data Engineering',
    tags: ['apache-spark', 'optimization', 'performance', 'tips'],
    createdAt: '2024-01-18T11:15:00Z',
    updatedAt: '2024-01-18T11:15:00Z',
    likes: 31,
    replies: 6,
    isLiked: false,
    isPinned: false,
    isSolved: false
  }
];

export const events: Event[] = [
  {
    id: 'event-1',
    title: 'DevOps Best Practices Workshop',
    description: 'Join us for an interactive workshop covering CI/CD pipelines, infrastructure as code, and monitoring strategies.',
    type: 'workshop',
    date: '2024-01-25',
    time: '14:00',
    duration: '3 hours',
    location: 'Virtual Event',
    isVirtual: true,
    organizer: communityMembers[0],
    attendees: 45,
    maxAttendees: 100,
    isRegistered: true,
    tags: ['devops', 'ci-cd', 'infrastructure', 'monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop'
  },
  {
    id: 'event-2',
    title: 'React Performance Optimization Webinar',
    description: 'Learn advanced techniques for optimizing React applications, including code splitting, memoization, and bundle analysis.',
    type: 'webinar',
    date: '2024-01-28',
    time: '18:00',
    duration: '1.5 hours',
    location: 'Online',
    isVirtual: true,
    organizer: communityMembers[1],
    attendees: 78,
    maxAttendees: 200,
    isRegistered: false,
    tags: ['react', 'performance', 'optimization', 'frontend'],
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop'
  },
  {
    id: 'event-3',
    title: 'TechFarm Networking Meetup - San Francisco',
    description: 'Connect with fellow TechFarm members in the Bay Area. Casual networking, tech talks, and career discussions.',
    type: 'meetup',
    date: '2024-02-02',
    time: '19:00',
    duration: '2 hours',
    location: 'San Francisco, CA',
    isVirtual: false,
    organizer: communityMembers[0],
    attendees: 23,
    maxAttendees: 50,
    isRegistered: true,
    tags: ['networking', 'meetup', 'san-francisco', 'career'],
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'first-course',
    title: 'First Steps',
    description: 'Complete your first course',
    icon: '🎯',
    progress: 1,
    maxProgress: 1,
    isCompleted: true,
    reward: 'Early Learner Badge'
  },
  {
    id: 'forum-contributor',
    title: 'Community Helper',
    description: 'Make 10 helpful forum posts',
    icon: '💬',
    progress: 7,
    maxProgress: 10,
    isCompleted: false,
    reward: 'Helper Badge'
  },
  {
    id: 'course-streak',
    title: 'Learning Streak',
    description: 'Complete courses for 7 consecutive days',
    icon: '🔥',
    progress: 5,
    maxProgress: 7,
    isCompleted: false,
    reward: 'Streak Master Badge'
  },
  {
    id: 'mentor',
    title: 'Mentor',
    description: 'Help 25 community members',
    icon: '🎓',
    progress: 18,
    maxProgress: 25,
    isCompleted: false,
    reward: 'Mentor Badge + Special Recognition'
  }
];

export const studyGroups: StudyGroup[] = [
  {
    id: 'devops-bootcamp-group',
    name: 'DevOps Bootcamp Study Group',
    description: 'Weekly study sessions for the Complete DevOps Bootcamp course. We review concepts, share resources, and work on projects together.',
    course: 'The Complete DevOps Bootcamp',
    members: [communityMembers[0], communityMembers[1], communityMembers[3]],
    maxMembers: 8,
    createdBy: communityMembers[0],
    createdAt: '2024-01-15T10:00:00Z',
    nextMeeting: '2024-01-22T19:00:00Z',
    isJoined: true
  },
  {
    id: 'java-masterclass-group',
    name: 'Java Programming Study Circle',
    description: 'Collaborative learning for Java Programming Masterclass. Perfect for beginners and those looking to strengthen their Java fundamentals.',
    course: 'Java Programming Masterclass',
    members: [communityMembers[1], communityMembers[2]],
    maxMembers: 6,
    createdBy: communityMembers[1],
    createdAt: '2024-01-18T14:30:00Z',
    nextMeeting: '2024-01-24T18:00:00Z',
    isJoined: false
  },
  {
    id: 'testing-automation-group',
    name: 'Test Automation Masters',
    description: 'Focus group for Selenium and Cypress courses. Share automation scripts, discuss best practices, and solve challenges together.',
    course: 'Selenium WebDriver for Test Automation',
    members: [communityMembers[2]],
    maxMembers: 10,
    createdBy: communityMembers[2],
    createdAt: '2024-01-20T09:00:00Z',
    nextMeeting: '2024-01-26T17:00:00Z',
    isJoined: false
  }
];