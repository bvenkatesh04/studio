"use client";

import { useState, useEffect } from 'react';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import { Sparkles, TrendingUp, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { Course } from '@/types';
import { courses } from '@/lib/data';
import { useFavorites } from '@/hooks/use-favorites';
import { useProgress } from '@/hooks/use-progress';

interface CourseRecommendationsProps {
  currentCourseId?: string;
  maxRecommendations?: number;
}

export default function CourseRecommendations({ 
  currentCourseId, 
  maxRecommendations = 3 
}: CourseRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Course[]>([]);
  const { favorites } = useFavorites();
  const { courseProgress } = useProgress();

  useEffect(() => {
    // Simple recommendation algorithm
    const getRecommendations = () => {
      let filteredCourses = courses.filter(course => course.id !== currentCourseId);
      
      // Prioritize courses in similar categories
      if (currentCourseId) {
        const currentCourse = courses.find(c => c.id === currentCourseId);
        if (currentCourse) {
          const sameCategoryCourses = filteredCourses.filter(
            course => course.category === currentCourse.category
          );
          const otherCourses = filteredCourses.filter(
            course => course.category !== currentCourse.category
          );
          filteredCourses = [...sameCategoryCourses, ...otherCourses];
        }
      }

      // Prioritize highly rated courses
      filteredCourses.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      
      return filteredCourses.slice(0, maxRecommendations);
    };

    setRecommendations(getRecommendations());
  }, [currentCourseId, maxRecommendations]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (recommendations.length === 0) return null;

  return (
    <Card className="warm-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="h-5 w-5 text-primary" />
          Recommended for You
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {recommendations.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover rounded-md"
                        sizes="64px"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                            {course.title}
                          </h3>
                          <Badge variant="outline" className="text-xs mb-2">
                            {course.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          {course.rating && (
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              <span>{course.rating}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.modules.length} modules</span>
                          </div>
                        </div>
                        
                        <Button asChild size="sm" variant="outline" className="text-xs">
                          <Link href={`/courses/${course.id}`}>
                            View Course
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}