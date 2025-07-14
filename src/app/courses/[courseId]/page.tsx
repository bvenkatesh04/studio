import { getCourseById } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Users, Star, Clock, BookOpen, Heart } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Separator } from '@/components/ui/separator';
import { getAllCourses } from '@/lib/data';
import CourseRecommendations from '@/components/custom/CourseRecommendations';
import ProgressBar from '@/components/custom/ProgressBar';
import AnimatedCard from '@/components/custom/AnimatedCard';
import AnimatedCourseAction from '@/components/custom/AnimatedCourseAction';

type ModulePageProps = {
     params: Promise<{ courseId: string }>;
};
export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course: { id: string }) => ({
    courseId: course.id,
  }));
}
export default async function CourseOverviewPage({ params }: ModulePageProps) {
  const course = getCourseById((await params).courseId);
  if (!course) {
    notFound();
  }

  const firstModuleId = course.modules.length > 0 ? course.modules[0].id : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
      {/* Hero Section */}
      <Card className="overflow-hidden bg-card shadow-xl border-none rounded-lg warm-glow">
        <CardHeader className="p-0 relative h-48 md:h-64 w-full">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover"
            data-ai-hint={course.imageHint || 'technology education'}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
            <Badge variant="secondary" className="mb-2 bg-white/20 text-white backdrop-blur-sm border-none text-xs">{course.category}</Badge>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline">{course.title}</CardTitle>
            <CardDescription className="mt-2 text-base text-white/90 max-w-3xl">
              {course.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

        {/* Course Content */}
        <AnimatedCard delay={0.2} className="shadow-lg warm-glow">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary">About this course</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none text-sm text-muted-foreground leading-relaxed">
                <p>{course.longDescription || course.description}</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>

      {/* Right Column (sidebar) */}
      <div className="lg:col-span-1 space-y-4">
        <AnimatedCourseAction delay={0.3}>
          {firstModuleId ? (
            <Button size="lg" asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground text-base py-6 shadow-lg transition-transform hover:scale-105 warm-glow">
              <Link href={`/courses/${course.id}/${firstModuleId}`}>
                <PlayCircle className="mr-2 h-5 w-5" />
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
        </AnimatedCourseAction>

        <AnimatedCard delay={0.4} className="bg-secondary/50 shadow-lg warm-glow">
          <Card>
            <CardContent className="p-4 space-y-3">
              {course.instructor && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Instructor</span>
                  </div>
                  <span className="font-semibold text-xs text-secondary-foreground">{course.instructor}</span>
                </div>
              )}
              <Separator />
              {course.rating && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>Rating</span>
                  </div>
                  <span className="font-semibold text-xs text-secondary-foreground">{course.rating.toFixed(1)} / 5.0</span>
                </div>
              )}
               <Separator />
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Modules</span>
                  </div>
                  <span className="font-semibold text-xs text-secondary-foreground">{course.modules.length} Modules</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Access</span>
                  </div>
                  <span className="font-semibold text-xs text-secondary-foreground">Lifetime</span>
                </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* Course Recommendations */}
        <AnimatedCard delay={0.5}>
          <CourseRecommendations currentCourseId={course.id} />
        </AnimatedCard>
      </div>
    </div>
  );
}