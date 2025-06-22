"use client";

import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare, BookOpen, ArrowDownCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function HomePage() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(https://storage.googleapis.com/devo-st-bucket/assets/asset-1a134371-18e3-469b-8d82-965a3d7d4c2b.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
            className="max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 text-white drop-shadow-lg">
            Unlock Your Potential with TechFarm UI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Master in-demand technologies with our expert-led, hands-on courses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="/#why-invest">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Courses
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
              <Link href="#why-invest">
                <ArrowDownCircle className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        <motion.section
          id="why-invest"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold font-headline mb-2 text-center text-blue-600">
            Why Invest in These Technologies?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
            In a rapidly evolving digital landscape, mastering key technologies is crucial for career growth. Here’s why our courses are essential for your success.
          </p>
          <div 
            className="space-y-8"
          >
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={itemVariants}
              >
                <Card className="bg-secondary shadow-2xl overflow-hidden border-2 border-border/50">
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="text-center py-12 bg-card rounded-lg shadow-2xl border-2 border-border/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
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
        </motion.section>
      </div>
    </>
  );
}
