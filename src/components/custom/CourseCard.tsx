"use client";
import type { Course } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';

interface CourseCardProps {
  course: Course;
  delay?: number;
}

export default function CourseCard({ course, delay = 0 }: CourseCardProps) {
  return (
    <AnimatedCard 
      className="flex flex-col overflow-hidden bg-card hover:border-primary/50 shadow-lg hover:shadow-xl"
      delay={delay}
      hover
      glow
    >
      <CardHeader className="p-0 relative">
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            data-ai-hint={course.imageHint || 'technology course'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            <Badge 
              variant="default" 
              className="absolute top-3 right-3 bg-primary/90 text-primary-foreground backdrop-blur-sm border-none shadow-lg"
            >
              {course.category}
            </Badge>
          </motion.div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
        <CardTitle className="text-lg sm:text-xl font-headline mb-2 sm:mb-3 text-card-foreground line-clamp-2">
          {course.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm sm:text-base line-clamp-3 flex-grow">
          {course.description}
        </CardDescription>
        
        <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
          {course.rating && (
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1 fill-current" />
              <span className="font-medium">{course.rating.toFixed(1)}</span>
            </motion.div>
          )}
          {course.enrolledStudents && (
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>{course.enrolledStudents.toLocaleString()} students</span>
            </motion.div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 sm:p-6 pt-0 border-t border-border/50 mt-auto">
        <AnimatedButton 
          asChild 
          variant="default" 
          className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
          shimmer
        >
          <Link href={`/courses/${course.id}`}>View Course</Link>
        </AnimatedButton>
      </CardFooter>
    </AnimatedCard>
  );
}