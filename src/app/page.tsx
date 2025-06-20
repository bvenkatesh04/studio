
import { courses } from '@/lib/data';
import CourseCard from '@/components/custom/CourseCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3); // Display first 3 courses as featured

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-card rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Welcome to TechFarm UI</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your journey to mastering cutting-edge software technologies starts here. Explore our courses and level up your skills.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/80 text-primary-foreground">
          <Link href="/courses">
            Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-8 text-center text-primary-foreground">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-secondary rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold font-headline mb-6 text-primary-foreground">Why Choose TechFarm UI?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-muted-foreground">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-primary">Expert-Led Content</h3>
            <p>Learn from industry professionals with real-world experience.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-primary">Hands-On Projects</h3>
            <p>Apply your knowledge with practical projects and exercises.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-primary">Flexible Learning</h3>
            <p>Learn at your own pace, anytime, anywhere, on any device.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
