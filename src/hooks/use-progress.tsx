"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type CourseProgress = {
  courseId: string;
  completedModules: string[];
  totalModules: number;
  lastAccessed: string;
  progressPercentage: number;
};

type ProgressContextType = {
  courseProgress: Record<string, CourseProgress>;
  updateProgress: (courseId: string, moduleId: string, totalModules: number) => void;
  getProgress: (courseId: string) => CourseProgress | undefined;
  getProgressPercentage: (courseId: string) => number;
  isModuleCompleted: (courseId: string, moduleId: string) => boolean;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [courseProgress, setCourseProgress] = useState<Record<string, CourseProgress>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('techfarm-progress');
    if (stored) {
      try {
        setCourseProgress(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse progress from localStorage:', error);
        localStorage.removeItem('techfarm-progress');
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('techfarm-progress', JSON.stringify(courseProgress));
  }, [courseProgress, mounted]);

  const updateProgress = (courseId: string, moduleId: string, totalModules: number) => {
    setCourseProgress(prev => {
      const existing = prev[courseId] || {
        courseId,
        completedModules: [],
        totalModules,
        lastAccessed: new Date().toISOString(),
        progressPercentage: 0
      };

      const completedModules = existing.completedModules.includes(moduleId)
        ? existing.completedModules
        : [...existing.completedModules, moduleId];

      const progressPercentage = Math.round((completedModules.length / totalModules) * 100);

      return {
        ...prev,
        [courseId]: {
          ...existing,
          completedModules,
          totalModules,
          lastAccessed: new Date().toISOString(),
          progressPercentage
        }
      };
    });
  };

  const getProgress = (courseId: string) => {
    return courseProgress[courseId];
  };

  const getProgressPercentage = (courseId: string) => {
    return courseProgress[courseId]?.progressPercentage || 0;
  };

  const isModuleCompleted = (courseId: string, moduleId: string) => {
    return courseProgress[courseId]?.completedModules.includes(moduleId) || false;
  };

  return (
    <ProgressContext.Provider value={{
      courseProgress,
      updateProgress,
      getProgress,
      getProgressPercentage,
      isModuleCompleted
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}