
"use client";

import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, BookOpen, ArrowDownCircle, Award, Laptop, Users } from 'lucide-react';
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

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.3)), url(https://storage.googleapis.com/devo-st-bucket/assets/asset-1a134371-18e3-469b-8d82-965a3d7d4c2b.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
            className="max-w-4xl px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-headline mb-4 text-white drop-shadow-lg">
            Unlock Your Potential with TechFarm UI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-3xl mx-auto">
            Navigate the digital frontier with confidence. Our courses are crafted to equip you with today's most in-demand technologies, turning your ambition into real-world expertise.
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

      <div className="container mx-auto px-4 py-16 space-y-24">
        <motion.section
          id="why-invest"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold font-headline mb-2 text-center text-primary">
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
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 20px 30px hsla(var(--primary) / 0.15)" 
                }}
              >
                <Card className="bg-card shadow-lg overflow-hidden border-2 border-transparent hover:border-primary/30 transition-colors duration-300">
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-4 relative h-64 md:h-full min-h-[200px]">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover"
                        data-ai-hint={course.imageHint || 'technology education'}
                      />
                    </div>
                    <div className="md:col-span-8">
                      <div className="p-6 md:p-8 flex flex-col h-full">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-2xl font-bold font-headline text-primary">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex-grow">
                          <CardDescription className="text-base text-muted-foreground leading-relaxed">
                            {course.description}
                          </CardDescription>
                        </CardContent>
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
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-headline mb-10 text-primary">Why Choose TechFarm UI?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div variants={featureCardVariants} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="h-full bg-card p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Expert-Led Content</h3>
                  <p className="text-muted-foreground">Learn from industry professionals with real-world experience.</p>
              </Card>
            </motion.div>
             <motion.div variants={featureCardVariants} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="h-full bg-card p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                 <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Laptop className="h-8 w-8" />
                  </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Hands-On Projects</h3>
                <p className="text-muted-foreground">Apply your knowledge with practical projects and exercises.</p>
              </Card>
            </motion.div>
            <motion.div variants={featureCardVariants} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="h-full bg-card p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Flexible Learning</h3>
                <p className="text-muted-foreground">Learn at your own pace, anytime, anywhere, on any device.</p>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
