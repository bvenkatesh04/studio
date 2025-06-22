
import { getModuleById, getCourseById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default async function ModulePage({ params: rawParams }: { params: { courseId: string; moduleId: string } }) {
  const params = await rawParams;
  const course = getCourseById(params.courseId);
  const module = getModuleById(params.courseId, params.moduleId);

  if (!course || !module) {
    notFound();
  }

  const moduleIndex = course.modules.findIndex(m => m.id === module.id);
  const prevModule = moduleIndex > 0 ? course.modules[moduleIndex - 1] : null;
  const nextModule = moduleIndex < course.modules.length - 1 ? course.modules[moduleIndex + 1] : null;

  return (
    <Card className="bg-card shadow-xl rounded-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
            <div>
                <Link href={`/courses/${course.id}`} className="text-sm text-primary hover:underline flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" /> Back to {course.title}
                </Link>
                <CardTitle className="text-3xl font-bold font-headline mt-1 text-primary">{module.title}</CardTitle>
            </div>
            <Badge variant="outline" className="text-sm">{module.duration}</Badge>
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
        {/* Add more structured content rendering here if module.content is Markdown/HTML */}
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
        ) : <div /> } {/* Placeholder for spacing */}
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
        ) : <div /> } {/* Placeholder for spacing */}
      </div>
    </Card>
  );
}
