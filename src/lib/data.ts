import type { Course, UserProfile, Module } from '@/types';

const sampleModules: Module[] = [
  { id: 'm1_1', title: 'Introduction to Core Concepts', content: 'This module covers the fundamental principles and theories. We explore the history and evolution of the subject, laying a strong foundation for advanced topics. Key definitions and terminologies will be introduced and explained with practical examples.', duration: '45 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'm1_2', title: 'Setting Up Your Environment', content: 'Learn how to set up your development or working environment. This includes software installation, configuration, and necessary tools to get started. We provide step-by-step guides for Windows, macOS, and Linux.', duration: '60 minutes' },
  { id: 'm1_3', title: 'First Project: Hello World', content: 'A hands-on module where you will build your first project. This classic "Hello World" exercise will help you understand the basic workflow and see immediate results. We will also cover debugging basics.', duration: '30 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'm1_4', title: 'Advanced Techniques', content: 'Delve into advanced techniques and best practices. This module explores complex problem-solving, optimization strategies, and efficient workflows. Case studies and real-world scenarios will be analyzed.', duration: '90 minutes' },
  { id: 'm1_5', title: 'Project Submission and Review', content: 'Guidance on how to submit your final project for review. This module covers the submission criteria, common pitfalls to avoid, and how the review process works. Peer review examples will be discussed.', duration: '30 minutes' },
];

const sampleModules2: Module[] = [
  { id: 'm2_1', title: 'Deep Dive into Data Structures', content: 'Explore various data structures like arrays, linked lists, trees, and graphs. Understand their applications, advantages, and disadvantages. Performance analysis (Big O notation) will be covered.', duration: '75 minutes' },
  { id: 'm2_2', title: 'Algorithm Design Paradigms', content: 'Learn about common algorithm design paradigms such as divide and conquer, dynamic programming, and greedy algorithms. Implementations of classic algorithms will be discussed.', duration: '80 minutes', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'm2_3', title: 'Working with APIs', content: 'Understand how to interact with RESTful and GraphQL APIs. This module covers API authentication, request methods, response handling, and common API design patterns.', duration: '50 minutes' },
];

export const courses: Course[] = [
  {
    id: 'nextjs-fundamentals',
    title: 'Next.js Fundamentals',
    description: 'Master the basics of Next.js and build modern web applications.',
    longDescription: 'This comprehensive course takes you from beginner to proficient in Next.js. You will learn about pages, routing, data fetching, API routes, deployment, and more. Includes hands-on projects to solidify your understanding.',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'abstract code',
    modules: sampleModules,
    instructor: 'Jane Doe',
    rating: 4.8,
    enrolledStudents: 1250,
  },
  {
    id: 'react-masterclass',
    title: 'React Masterclass',
    description: 'A deep dive into React, covering hooks, context, and performance.',
    longDescription: 'Become a React expert with this masterclass. We cover advanced concepts like custom hooks, state management with Context API and Redux, performance optimization techniques, and testing your React applications.',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern ui',
    modules: sampleModules2,
    instructor: 'John Smith',
    rating: 4.9,
    enrolledStudents: 2300,
  },
  {
    id: 'tailwind-css-guide',
    title: 'Tailwind CSS: From Zero to Hero',
    description: 'Learn utility-first CSS and build beautiful UIs quickly.',
    longDescription: 'This course teaches you how to use Tailwind CSS effectively. From basic setup to advanced customization, utility classes, responsive design, and integrating with frameworks like Next.js and React.',
    category: 'UI/UX Design',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'minimalist design',
    modules: sampleModules.slice(0, 3),
    instructor: 'Alice Brown',
    rating: 4.7,
    enrolledStudents: 980,
  },
  {
    id: 'nodejs-backend',
    title: 'Node.js Backend Development',
    description: 'Build scalable and robust backend systems with Node.js.',
    longDescription: 'Explore the world of backend development using Node.js and Express.js. Learn to build REST APIs, handle databases (MongoDB/PostgreSQL), implement authentication, and deploy your applications.',
    category: 'Backend Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'server code',
    modules: sampleModules2.slice(0,2),
    instructor: 'Bob Green',
    rating: 4.6,
    enrolledStudents: 1500,
  },
];

export const userProfile: UserProfile = {
  id: 'user123',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatarUrl: 'https://placehold.co/100x100.png',
  bio: 'Passionate software developer and lifelong learner. Currently exploring Next.js and AI.',
  coursesEnrolled: [courses[0], courses[2]],
  coursesCompleted: [courses[1]],
  progress: [
    { courseId: 'nextjs-fundamentals', completedModules: ['m1_1', 'm1_2'] },
    { courseId: 'tailwind-css-guide', completedModules: ['m1_1'] },
  ],
};

export const getCourseById = (id: string): Course | undefined => courses.find(course => course.id === id);

export const getModuleById = (courseId: string, moduleId: string): Module | undefined => {
  const course = getCourseById(courseId);
  return course?.modules.find(module => module.id === moduleId);
};
