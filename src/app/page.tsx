
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


export default function HomePage() {

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-card rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Welcome to TechFarm UI</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your journey to mastering cutting-edge software technologies starts here. Explore our courses and level up your skills.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-2 text-center text-primary">
          Why Invest in These Technologies?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
          In a rapidly evolving digital landscape, mastering key technologies is crucial for career growth. Here’s why our courses are essential for your success.
        </p>
        <div className="space-y-8">
          {courses.map((course) => (
            <Card key={course.id} className="bg-secondary shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold font-headline text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {course.longDescription || course.description}
                  </CardDescription>
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href={`/courses/${course.id}`}>
                        <BookOpen className="mr-2 h-5 w-5" />
                        View Course
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                       <Link href={`/contact?course=${encodeURIComponent(course.title)}`}>
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Inquire Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-card rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold font-headline mb-6 text-primary">Why Choose TechFarm UI?</h2>
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
