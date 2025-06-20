
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

// Removed UserProfile interface as it's no longer needed.
