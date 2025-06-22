
"use client";

import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Parent container variants for staggering children
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Child item variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5
    }
  }
};

// Main section variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export default function HomePage() {

  return (
    <div className="space-y-12 overflow-hidden">
      <motion.section 
        className="text-center py-12 bg-card rounded-lg shadow-2xl border-2 border-border/50"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Welcome to TechFarm UI</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your journey to mastering cutting-edge software technologies starts here. Explore our courses and level up your skills.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold font-headline mb-2 text-center text-blue-600">
          Why Invest in These Technologies?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
          In a rapidly evolving digital landscape, mastering key technologies is crucial for career growth. Here’s why our courses are essential for your success.
        </p>
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Card key={course.id} className="bg-secondary shadow-2xl overflow-hidden border-2 border-border/50">
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
        </motion.div>
      </motion.section>

      <motion.section 
        className="text-center py-12 bg-card rounded-lg shadow-2xl border-2 border-border/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold font-headline mb-6 text-primary">Why Choose TechFarm UI?</motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-muted-foreground">
          <motion.div className="p-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2 text-primary">Expert-Led Content</h3>
            <p>Learn from industry professionals with real-world experience.</p>
          </motion.div>
          <motion.div className="p-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2 text-primary">Hands-On Projects</h3>
            <p>Apply your knowledge with practical projects and exercises.</p>
          </motion.div>
          <motion.div className="p-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2 text-primary">Flexible Learning</h3>
            <p>Learn at your own pace, anytime, anywhere, on any device.</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
