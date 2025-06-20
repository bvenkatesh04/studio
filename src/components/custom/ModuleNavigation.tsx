
"use client";
import type { Course } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle } from 'lucide-react';

interface ModuleNavigationProps {
  course: Course;
  currentModuleId?: string;
}

export default function ModuleNavigation({ course, currentModuleId }: ModuleNavigationProps) {
  const pathname = usePathname();
  // Mock progress for demo. In a real app, this would come from user data.
  const completedModules = ['m1_1']; 

  return (
    <aside className="w-full lg:w-80 bg-card p-6 rounded-lg shadow-lg h-full">
      <h3 className="text-xl font-semibold mb-4 text-primary font-headline">Course Modules</h3>
      <ScrollArea className="h-[calc(100vh-200px)] pr-3"> {/* Adjust height as needed */}
        <nav>
          <ul className="space-y-2">
            {course.modules.map((module) => {
              const isActive = pathname === `/courses/${course.id}/${module.id}`;
              const isCompleted = completedModules.includes(module.id);
              
              return (
                <li key={module.id}>
                  <Button
                    asChild
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={`w-full justify-start text-left h-auto py-2 px-3 transition-all duration-200 ${isActive ? 'bg-primary/20 text-primary' : 'hover:bg-secondary/80'}`}
                  >
                    <Link href={`/courses/${course.id}/${module.id}`} className="flex items-center gap-3">
                      {isCompleted ? <CheckCircle className="h-5 w-5 text-primary" /> : <Circle className="h-5 w-5 text-muted-foreground" />}
                      <span className="flex-1 truncate">{module.title}</span>
                    </Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </ScrollArea>
    </aside>
  );
}
