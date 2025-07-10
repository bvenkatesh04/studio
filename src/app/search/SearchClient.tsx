"use client";
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { courses } from '@/lib/data';
import CourseCard from '@/components/custom/CourseCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ResponsiveContainer from '@/components/custom/ResponsiveContainer';
import StaggeredGrid from '@/components/custom/StaggeredGrid';
import AnimatedButton from '@/components/custom/AnimatedButton';
import LoadingSpinner from '@/components/custom/LoadingSpinner';
import AdvancedSearchFilters, { SearchFilters } from '@/components/custom/AdvancedSearchFilters';
import type { Course } from '@/types';

export default function SearchClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [filters, setFilters] = useState<SearchFilters>({
    query: initialQuery,
    category: 'All Categories',
    difficulty: 'All Levels',
    duration: [0, 300],
    rating: [0, 5],
    tags: []
  });
  
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const filteredCourses = courses.filter((course: Course) => {
    // Text search
    const matchesQuery = !filters.query || 
      course.title.toLowerCase().includes(filters.query.toLowerCase()) ||
      course.description.toLowerCase().includes(filters.query.toLowerCase()) ||
      course.category.toLowerCase().includes(filters.query.toLowerCase());

    // Category filter
    const matchesCategory = filters.category === 'All Categories' || 
      course.category === filters.category;

    // Rating filter
    const matchesRating = !course.rating || 
      (course.rating >= filters.rating[0] && course.rating <= filters.rating[1]);

    // Duration filter (approximate based on module count)
    const estimatedDuration = course.modules.length * 45; // 45 min per module average
    const matchesDuration = estimatedDuration >= filters.duration[0] && 
      estimatedDuration <= filters.duration[1];

    // Tags filter (basic implementation)
    const matchesTags = filters.tags.length === 0 || 
      filters.tags.some(tag => 
        course.title.toLowerCase().includes(tag.toLowerCase()) ||
        course.description.toLowerCase().includes(tag.toLowerCase())
      );

    return matchesQuery && matchesCategory && matchesRating && matchesDuration && matchesTags;
  });

  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
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
    <ResponsiveContainer className="py-6 sm:py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Header */}
        <motion.section variants={itemVariants} className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 text-primary gradient-text">
            Search Courses
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find the perfect course to match your learning goals and advance your career.
          </p>
        </motion.section>

        {/* Advanced Search Filters */}
        <motion.section variants={itemVariants}>
          <AdvancedSearchFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            isOpen={isFiltersOpen}
            onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
          />
        </motion.section>
        
        {/* Results */}
        <motion.section variants={itemVariants}>
          {(filters.query || isFiltersOpen) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <p className="text-sm sm:text-base text-muted-foreground">
                {isSearching ? (
                  <span className="flex items-center justify-center gap-2">
                    <LoadingSpinner size="sm" />
                    Searching...
                  </span>
                ) : (
                  <>
                    Showing <span className="font-semibold text-primary">{filteredCourses.length}</span> results
                    {filters.query && (
                      <>{' '}for <span className="font-semibold text-primary">"{filters.query}"</span></>
                    )}
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
              ) : filters.query || isFiltersOpen ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 max-w-md mx-auto">
                    <div className="text-3xl sm:text-4xl mb-3">🔍</div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 text-card-foreground">
                      No Courses Found
                    </h2>
                    <p className="text-muted-foreground mb-4 text-sm">
                      We couldn't find any courses matching your criteria. Try adjusting your filters or browse all courses.
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
                  className="text-center py-8 sm:py-12"
                >
                  <div className="text-3xl sm:text-4xl mb-3">🎯</div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-muted-foreground">
                    Start Your Search
                  </h2>
                  <p className="text-muted-foreground text-sm">
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