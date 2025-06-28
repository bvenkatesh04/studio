"use client";
import type { Course } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';

interface ModuleNavigationProps {
  course: Course;
  currentModuleId?: string;
}

export default function ModuleNavigation({ course, currentModuleId }: ModuleNavigationProps) {
  const pathname = usePathname();
  // Mock progress for demo. In a real app, this would come from user data.
  const completedModules = ['m1_1']; 

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const progressPercentage = (completedModules.length / course.modules.length) * 100;

  return (
    <motion.aside 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full lg:w-80"
    >
      <AnimatedCard className="p-4 sm:p-6 shadow-xl bg-card/80 backdrop-blur-md sticky top-24">
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-lg sm:text-xl font-semibold text-primary font-headline">
              Course Modules
            </h3>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{completedModules.length}/{course.modules.length} completed</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div 
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>

        <ScrollArea className="h-auto max-h-[calc(100vh-20rem)] pr-3">
          <nav>
            <ul className="space-y-2">
              {course.modules.map((module, index) => {
                const isActive = pathname === `/courses/${course.id}/${module.id}`;
                const isCompleted = completedModules.includes(module.id);
                
                return (
                  <motion.li 
                    key={module.id}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button
                      asChild
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={`w-full justify-start text-left h-auto py-3 px-3 transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary/20 text-primary border-l-4 border-primary shadow-md' 
                          : 'hover:bg-secondary/80 hover:translate-x-1'
                      }`}
                    >
                      <Link href={`/courses/${course.id}/${module.id}`} className="flex items-start gap-3 w-full">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                          )}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground font-medium">
                              Module {index + 1}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {module.duration}
                            </span>
                          </div>
                          <span className="text-sm font-medium line-clamp-2 leading-tight">
                            {module.title}
                          </span>
                        </div>
                      </Link>
                    </Button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </ScrollArea>
      </AnimatedCard>
    </motion.aside>
  );
}