import { getModuleById, getCourseById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { getAllCourses } from '@/lib/data';
import ProgressBar from '@/components/custom/ProgressBar';
import { motion } from 'framer-motion';

type PageProps = {
      params: Promise<{ courseId: string; moduleId: string }>;
}
// This function tells Next.js what params to generate at build time
export async function generateStaticParams() {
  // Fetch all courses and their modules
  const courses = await getAllCourses(); // You need to implement this in your data/lib
  const params = [];

  for (const course of courses) {
    for (const module of course.modules) {
      params.push({
        courseId: course.id,
        moduleId: module.id,
      });
    }
  }

  return params;
}
export default async function Page({params}: PageProps) {
 const course = getCourseById((await params).courseId);
 const module = getModuleById((await params).courseId, (await params).moduleId);

  if (!course || !module) {
    notFound();
  }

  const moduleIndex = course.modules.findIndex(m => m.id === module.id);
  const prevModule = moduleIndex > 0 ? course.modules[moduleIndex - 1] : null;
  const nextModule = moduleIndex < course.modules.length - 1 ? course.modules[moduleIndex + 1] : null;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-4">
          <ProgressBar 
            progress={moduleIndex + 1} 
            total={course.modules.length}
            size="md"
            animated
          />
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-card shadow-xl rounded-lg warm-glow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <Link href={`/courses/${course.id}`} className="text-sm text-primary hover:underline flex items-center">
              <BookOpen className="h-4 w-4 mr-1" /> Back to {course.title}
            </Link>
            <CardTitle className="text-3xl font-bold font-headline mt-1 text-primary">{module.title}</CardTitle>
          </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-sm">{module.duration}</Badge>
                <Badge variant="default" className="text-sm bg-green-600">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Module {moduleIndex + 1}
                </Badge>
              </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-6 prose max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
        {module.videoUrl && (
          <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={module.videoUrl}
              title={module.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <p>{module.content}</p>
      </CardContent>
      <Separator />
      <div className="p-6 flex justify-between items-center">
        {prevModule ? (
          <Button asChild variant="outline" className="h-auto border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group">
            <Link href={`/courses/${course.id}/${prevModule.id}`} className="flex items-center">
              <ArrowLeft className="mr-3 h-5 w-5 flex-shrink-0" />
              <div className="text-left">
                <span className="text-xs font-normal opacity-80 group-hover:opacity-100">Previous</span>
                <p className="font-semibold truncate max-w-[200px]">{prevModule.title}</p>
              </div>
            </Link>
          </Button>
        ) : <div /> }
        {nextModule ? (
          <Button asChild variant="default" className="h-auto bg-primary hover:bg-primary/80 text-primary-foreground">
            <Link href={`/courses/${course.id}/${nextModule.id}`} className="flex items-center">
              <div className="text-right">
                <span className="text-xs font-normal opacity-80">Next</span>
                <p className="font-semibold truncate max-w-[200px]">{nextModule.title}</p>
              </div>
              <ArrowRight className="ml-3 h-5 w-5 flex-shrink-0" />
            </Link>
          </Button>
        ) : <div /> }
      </div>
    </Card>
      </motion.div>
    </div>
  );
}
