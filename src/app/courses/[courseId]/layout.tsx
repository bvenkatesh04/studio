
import { getCourseById } from '@/lib/data';
import ModuleNavigation from '@/components/custom/ModuleNavigation';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

export default async function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { courseId: string };
}) {
  await params;
  const course = getCourseById(params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <ModuleNavigation course={course} />
        <div className="flex-grow lg:w-3/4">
          {children}
        </div>
      </div>
    </div>
  );
}
