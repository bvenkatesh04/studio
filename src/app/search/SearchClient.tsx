"use client";
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { courses } from '@/lib/data';
import CourseCard from '@/components/custom/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ResponsiveContainer from '@/components/custom/ResponsiveContainer';
import StaggeredGrid from '@/components/custom/StaggeredGrid';
import AnimatedButton from '@/components/custom/AnimatedButton';
import LoadingSpinner from '@/components/custom/LoadingSpinner';

export default function SearchClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase()) ||
    course.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search delay for better UX
    setTimeout(() => setIsSearching(false), 500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <ResponsiveContainer className="py-8 sm:py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header */}
        <motion.section variants={itemVariants} className="text-center">
          <h1 className="text-responsive-4xl font-bold font-headline mb-4 text-primary gradient-text">
            Search Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find the perfect course to match your learning goals and advance your career.
          </p>
        </motion.section>

        {/* Search Form */}
        <motion.section variants={itemVariants} className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, category, or description..."
                className="pl-10 sm:pl-12 h-12 sm:h-14 text-base bg-card/50 backdrop-blur-sm border-2 focus:border-primary/50 transition-all duration-300"
              />
            </div>
            <div className="flex gap-2 sm:gap-3">
              <AnimatedButton 
                type="submit" 
                size="lg" 
                className="flex-1 sm:flex-none h-12 sm:h-14 px-6 sm:px-8"
                shimmer
                disabled={isSearching}
              >
                {isSearching ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Search
                  </>
                )}
              </AnimatedButton>
              <AnimatedButton 
                variant="outline" 
                size="lg" 
                className="h-12 sm:h-14 px-4 sm:px-6"
                shimmer
              >
                <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only sm:not-sr-only sm:ml-2">Filter</span>
              </AnimatedButton>
            </div>
          </form>
        </motion.section>
        
        {/* Results */}
        <motion.section variants={itemVariants}>
          {query && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <p className="text-base sm:text-lg text-muted-foreground">
                {isSearching ? (
                  <span className="flex items-center justify-center gap-2">
                    <LoadingSpinner size="sm" />
                    Searching...
                  </span>
                ) : (
                  <>
                    Showing <span className="font-semibold text-primary">{filteredCourses.length}</span> results for{' '}
                    <span className="font-semibold text-primary">"{query}"</span>
                  </>
                )}
              </p>
            </motion.div>
          )}
          
          {!isSearching && (
            <>
              {filteredCourses.length > 0 ? (
                <StaggeredGrid 
                  columns={{ default: 1, sm: 2, lg: 3 }}
                  staggerDelay={0.1}
                >
                  {filteredCourses.map((course, index) => (
                    <CourseCard key={course.id} course={course} delay={index * 0.1} />
                  ))}
                </StaggeredGrid>
              ) : query ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 sm:py-16"
                >
                  <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 max-w-md mx-auto">
                    <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-card-foreground">
                      No Courses Found
                    </h2>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                      We couldn't find any courses matching "{query}". Try a different search term or browse all courses.
                    </p>
                    <AnimatedButton asChild shimmer>
                      <Link href="/#why-invest">Browse All Courses</Link>
                    </AnimatedButton>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 sm:py-16"
                >
                  <div className="text-4xl sm:text-6xl mb-4">🎯</div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-muted-foreground">
                    Start Your Search
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Enter a search term above to find courses that match your interests.
                  </p>
                </motion.div>
              )}
            </>
          )}
        </motion.section>
      </motion.div>
    </ResponsiveContainer>
  );
}