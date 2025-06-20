
import { getCourseById } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Users, Star, Clock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function CourseOverviewPage({ params }: { params: { courseId: string } }) {
  const course = getCourseById(params.courseId);

  if (!course) {
    // This will be caught by layout's notFound, but good practice.
    // Or, render a specific component here.
    return (
      <Alert variant="destructive" className="mt-8">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Error: Course Not Found</AlertTitle>
        <AlertDescription>
          The details for this course could not be loaded. It might not exist or has been removed.
        </AlertDescription>
      </Alert>
    );
  }

  const firstModuleId = course.modules.length > 0 ? course.modules[0].id : null;

  return (
    <Card className="overflow-hidden bg-card shadow-xl">
      <CardHeader className="p-0 relative">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={1200}
          height={400}
          className="w-full h-64 md:h-96 object-cover"
          data-ai-hint={course.imageHint || 'technology education'}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <Badge variant="default" className="mb-2 bg-primary text-primary-foreground">{course.category}</Badge>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-white">{course.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {course.instructor && (
            <div className="flex items-center p-3 bg-secondary rounded-md">
              <Users className="h-5 w-5 mr-2 text-primary" />
              <div>
                <p className="font-semibold text-primary-foreground">Instructor</p>
                <p className="text-muted-foreground">{course.instructor}</p>
              </div>
            </div>
          )}
          {course.rating && (
            <div className="flex items-center p-3 bg-secondary rounded-md">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
               <div>
                <p className="font-semibold text-primary-foreground">Rating</p>
                <p className="text-muted-foreground">{course.rating.toFixed(1)} / 5.0</p>
              </div>
            </div>
          )}
           <div className="flex items-center p-3 bg-secondary rounded-md">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              <div>
                <p className="font-semibold text-primary-foreground">Modules</p>
                <p className="text-muted-foreground">{course.modules.length} modules</p>
              </div>
            </div>
        </div>
        
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {course.longDescription || course.description}
        </CardDescription>

        {firstModuleId && (
          <Button size="lg" asChild className="w-full md:w-auto bg-primary hover:bg-primary/80 text-primary-foreground">
            <Link href={`/courses/${course.id}/${firstModuleId}`}>
              <PlayCircle className="mr-2 h-5 w-5" />
              Start Course
            </Link>
          </Button>
        )}
        {!firstModuleId && (
           <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>No Modules Available</AlertTitle>
            <AlertDescription>
              This course currently has no modules. Please check back later.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
