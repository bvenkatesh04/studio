
import { courses } from '@/lib/data';
import CourseCard from '@/components/custom/CourseCard';

export default function CoursesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Explore Our Courses</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Browse our catalog of expert-led courses designed to elevate your skills in software development and technology.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
