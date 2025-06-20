
export interface Module {
  id: string;
  title: string;
  content: string;
  duration: string; // e.g., "45 minutes"
  videoUrl?: string; // Optional video URL for the module
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  imageUrl: string;
  imageHint?: string; // for AI image search
  modules: Module[];
  instructor?: string;
  rating?: number; // 0-5
  enrolledStudents?: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio?: string;
  coursesEnrolled: Course[]; // Simplified: just an array of courses
  coursesCompleted: Course[];
  progress?: Array<{ courseId: string; completedModules: string[] }>;
}
