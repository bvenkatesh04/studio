
import { getCourseById } from '@/lib/data';
import ModuleNavigation from '@/components/custom/ModuleNavigation';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

export default function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { courseId: string };
}) {
  const course = getCourseById(params.courseId);

  if (!course) {
    notFound();
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
