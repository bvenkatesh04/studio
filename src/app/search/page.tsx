
"use client";

import { courses } from '@/lib/data';
import CourseCard from '@/components/custom/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase()) ||
    course.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Search Courses</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect course to match your learning goals.
          </p>
        </section>

        <section className="max-w-xl mx-auto">
           <form action="/search" method="GET" className="flex gap-2">
              <Input
                type="search"
                name="q"
                defaultValue={query}
                placeholder="Search by title, category, or description..."
                className="flex-grow bg-card"
              />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </form>
        </section>
        
        <section>
          {query && (
            <p className="text-center text-lg text-muted-foreground mb-8">
              Showing {filteredCourses.length} results for <span className="font-semibold text-primary">"{query}"</span>
            </p>
          )}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">No Courses Found</h2>
              <p className="text-muted-foreground mb-4">
                We couldn't find any courses matching your search. Try a different term.
              </p>
              <Button asChild>
                <Link href="/courses">Browse All Courses</Link>
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
