
import { getCourseById } from '@/lib/data';
import ModuleNavigation from '@/components/custom/ModuleNavigation';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { courseId: string };
}) {
  const course = getCourseById(params.courseId);

  if (!course) {
    // Simple not found display until a dedicated not-found.tsx is richer
     return (
      <Alert variant="destructive" className="max-w-lg mx-auto my-10">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Course Not Found</AlertTitle>
        <AlertDescription>
          The course you are looking for does not exist or may have been moved.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ModuleNavigation course={course} />
      <div className="flex-grow lg:w-3/4">
        {children}
      </div>
    </div>
  );
}
