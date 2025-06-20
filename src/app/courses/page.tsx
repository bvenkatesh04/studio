
import { courses } from '@/lib/data';
import CourseCard from '@/components/custom/CourseCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

// This is a server component, so search/filter logic would ideally be server-side
// For this demo, we'll just display all courses.
// Real implementation would involve state management or query params for filtering.

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold font-headline mb-4 text-primary">Our Courses</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our extensive catalog of courses designed to help you excel in the tech industry.
        </p>
      </header>

      {/* Placeholder for Search and Filter controls */}
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg shadow">
        <div className="relative flex-grow">
          <Input type="search" placeholder="Search courses..." className="pl-10 h-11 bg-background border-primary/50" aria-label="Search courses"/>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] h-11 bg-background border-primary/50" aria-label="Filter by category">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
            <SelectItem value="backend-development">Backend Development</SelectItem>
            <SelectItem value="data-science">Data Science</SelectItem>
          </SelectContent>
        </Select>
         <Select>
          <SelectTrigger className="w-full md:w-[180px] h-11 bg-background border-primary/50" aria-label="Sort by">
            <SelectValue placeholder="Sort by relevance" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="relevance">Sort by relevance</SelectItem>
            <SelectItem value="newest">Sort by newest</SelectItem>
            <SelectItem value="rating">Sort by rating</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
