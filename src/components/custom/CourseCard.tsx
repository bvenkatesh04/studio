"use client";
import type { Course } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, BookOpen, Heart } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';
import { useFavorites } from '@/hooks/use-favorites';
import { useProgress } from '@/hooks/use-progress';
import ProgressBar from './ProgressBar';

interface CourseCardProps {
  course: Course;
  delay?: number;
}

export default function CourseCard({ course, delay = 0 }: CourseCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { getProgressPercentage } = useProgress();
  const isCourseFavorite = isFavorite(course.id);
  const progressPercentage = getProgressPercentage(course.id);

  return (
    <AnimatedCard 
      className="flex flex-col overflow-hidden bg-card hover:border-primary/50 shadow-lg hover:shadow-xl warm-glow"
      delay={delay}
      hover
      glow
    >
      <CardHeader className="p-0 relative">
        <div className="relative h-32 sm:h-40 w-full overflow-hidden">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            data-ai-hint={course.imageHint || 'technology course'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Favorite Button */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(course.id);
            }}
            className="absolute top-2 left-2 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                isCourseFavorite 
                  ? 'fill-red-500 text-red-500' 
                  : 'text-white hover:text-red-500'
              }`} 
            />
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            <Badge 
              variant="default" 
              className="absolute top-2 right-2 bg-primary/90 text-primary-foreground backdrop-blur-sm border-none shadow-lg text-xs"
            >
              {course.category}
            </Badge>
          </motion.div>
        </div>
      </CardHeader>
      
      <CardContent className="p-3 sm:p-4 flex-grow flex flex-col">
        <CardTitle className="text-base sm:text-lg font-headline mb-2 text-card-foreground line-clamp-2">
          {course.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-xs sm:text-sm line-clamp-3 flex-grow">
          {course.description}
        </CardDescription>
        
        {/* Progress Bar */}
        {progressPercentage > 0 && (
          <div className="mt-3">
            <ProgressBar 
              progress={progressPercentage} 
              total={100} 
              size="sm"
              showBadge={false}
            />
          </div>
        )}
        
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          {course.rating && (
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1 fill-current" />
              <span className="font-medium">{course.rating.toFixed(1)}</span>
            </motion.div>
          )}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>{course.modules.length} modules</span>
          </motion.div>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 pt-0 border-t border-border/50 mt-auto">
        <AnimatedButton 
          asChild 
          variant="default" 
          className="w-full bg-primary hover:bg-primary/80 text-primary-foreground text-sm"
          shimmer
        >
          <Link href={`/courses/${course.id}`}>
            {progressPercentage > 0 ? 'Continue Learning' : 'View Course'}
          </Link>
        </AnimatedButton>
      </CardFooter>
    </AnimatedCard>
  );
}