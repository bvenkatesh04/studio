
import { getCourseById } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Users, Star, Clock, BookOpen } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Separator } from '@/components/ui/separator';

export default async function CourseOverviewPage({ params: rawParams }: { params: { courseId: string } }) {
  const params = await rawParams;
  const course = getCourseById(params.courseId);

  if (!course) {
    notFound();
  }

  const firstModuleId = course.modules.length > 0 ? course.modules[0].id : null;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="overflow-hidden bg-card shadow-xl border-none rounded-lg">
        <CardHeader className="p-0 relative h-64 md:h-80 w-full">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover"
            data-ai-hint={course.imageHint || 'technology education'}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
            <Badge variant="secondary" className="mb-2 bg-white/20 text-white backdrop-blur-sm border-none">{course.category}</Badge>
            <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline">{course.title}</CardTitle>
            <CardDescription className="mt-2 text-lg text-white/90 max-w-3xl">
              {course.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (main content) */}
        <div className="lg:col-span-2 space-y-8">
           <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary">About this course</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none text-base text-muted-foreground leading-relaxed">
                <p>{course.longDescription || course.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (sidebar details) */}
        <div className="lg:col-span-1 space-y-6">
          {firstModuleId ? (
            <Button size="lg" asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground text-lg py-7 shadow-lg transition-transform hover:scale-105">
              <Link href={`/courses/${course.id}/${firstModuleId}`}>
                <PlayCircle className="mr-3 h-6 w-6" />
                Start Course
              </Link>
            </Button>
          ) : (
             <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>No Modules Available</AlertTitle>
                <AlertDescription>
                  This course currently has no modules.
                </AlertDescription>
              </Alert>
          )}

          <Card className="bg-secondary/50">
            <CardContent className="p-6 space-y-4">
              {course.instructor && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Instructor</span>
                  </div>
                  <span className="font-semibold text-sm text-primary-foreground">{course.instructor}</span>
                </div>
              )}
              <Separator />
              {course.rating && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span>Rating</span>
                  </div>
                  <span className="font-semibold text-sm text-primary-foreground">{course.rating.toFixed(1)} / 5.0</span>
                </div>
              )}
               <Separator />
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Modules</span>
                  </div>
                  <span className="font-semibold text-sm text-primary-foreground">{course.modules.length} Modules</span>
                </div>
                <Separator />
                {course.enrolledStudents && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Enrolled</span>
                  </div>
                  <span className="font-semibold text-sm text-primary-foreground">{course.enrolledStudents.toLocaleString()} Students</span>
                </div>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
