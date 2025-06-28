export interface CommunityMember {
  id: string;
  name: string;
  avatar: string;
  title: string;
  location: string;
  joinDate: string;
  bio: string;
  skills: string[];
  coursesCompleted: number;
  reputation: number;
  badges: Badge[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  isOnline: boolean;
  lastActive: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  earnedDate: string;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: CommunityMember;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies: number;
  isLiked: boolean;
  isPinned: boolean;
  isSolved: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'webinar' | 'workshop' | 'meetup' | 'hackathon' | 'networking';
  date: string;
  time: string;
  duration: string;
  location: string;
  isVirtual: boolean;
  organizer: CommunityMember;
  attendees: number;
  maxAttendees: number;
  isRegistered: boolean;
  tags: string[];
  imageUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  isCompleted: boolean;
  reward: string;
}

export interface StudyGroup {
  id: string;
  name: string;
  description: string;
  course: string;
  members: CommunityMember[];
  maxMembers: number;
  createdBy: CommunityMember;
  createdAt: string;
  nextMeeting: string;
  isJoined: boolean;
}