
"use client"; // For using useSearchParams
import { useSearchParams } from 'next/navigation';
import { courses } from '@/lib/data';
import CourseCard from '@/components/custom/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search as SearchIcon, AlertTriangle } from 'lucide-react'; // Renamed to avoid conflict
import { useEffect, useState } from 'react';
import type { Course } from '@/types';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(query);
  const [searchResults, setSearchResults] = useState<Course[]>([]);

  useEffect(() => {
    setSearchTerm(query); // Sync searchTerm with URL query on initial load or navigation
    if (query) {
      const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        course.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredCourses);
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  // This function is not directly used for form submission to redirect,
  // but can be used if search is handled entirely client-side without page reload.
  // The Header search bar already handles redirection.
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would typically update the URL query, but Header already does this.
    // For local filtering without URL change:
    // if (searchTerm) {
    //   const filteredCourses = courses.filter(course =>
    //     course.title.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    //   setSearchResults(filteredCourses);
    // } else {
    //   setSearchResults([]);
    // }
  };


  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold font-headline mb-2 text-primary">Search Results</h1>
        {query && <p className="text-lg text-muted-foreground">Showing results for: <span className="font-semibold text-primary-foreground">{query}</span></p>}
      </header>
      
      {/* Search bar specifically for this page, if needed, or rely on header's */}
      {/* <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-8 max-w-xl mx-auto">
        <Input
          type="search"
          placeholder="Search again..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow h-11 bg-background border-primary/50"
          aria-label="Search courses"
        />
        <Button type="submit" className="h-11 bg-primary hover:bg-primary/80 text-primary-foreground">
          <SearchIcon className="mr-2 h-5 w-5" /> Search
        </Button>
      </form> */}

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        query ? (
          <div className="text-center py-10 bg-card rounded-lg shadow">
            <AlertTriangle className="mx-auto h-12 w-12 text-destructive mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-primary-foreground">No Results Found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any courses matching your search for "{query}".
            </p>
            <Button asChild variant="default" className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="/courses">Browse All Courses</Link>
            </Button>
          </div>
        ) : (
           <div className="text-center py-10 bg-card rounded-lg shadow">
            <SearchIcon className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-primary-foreground">Search for Courses</h2>
            <p className="text-muted-foreground">
              Use the search bar in the header to find courses by title, description, or category.
            </p>
          </div>
        )
      )}
    </div>
  );
}
