
"use client";
import type { Course } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        scale: 1.02, 
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-card hover:border-primary/50 transition-all duration-300 shadow-lg">
        <CardHeader className="p-0 relative">
          <Image
            src={course.imageUrl}
            alt={course.title}
            width={600}
            height={300}
            className="w-full h-48 object-cover"
            data-ai-hint={course.imageHint || 'technology course'}
          />
           <Badge variant="default" className="absolute top-2 right-2 bg-primary/80 text-primary-foreground backdrop-blur-sm border-none">
            {course.category}
          </Badge>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-xl font-headline mb-2 text-card-foreground">{course.title}</CardTitle>
          <CardDescription className="text-muted-foreground text-sm line-clamp-3">{course.description}</CardDescription>
           <div className="mt-3 flex items-center space-x-4 text-xs text-muted-foreground">
            {course.rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{course.rating.toFixed(1)}</span>
              </div>
            )}
            {course.enrolledStudents && (
               <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{course.enrolledStudents.toLocaleString()} students</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 border-t border-border/50">
          <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
            <Link href={`/courses/${course.id}`}>View Course</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
