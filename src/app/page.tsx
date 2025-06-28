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
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 border border-green-400/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/10 rotate-12"
            animate={{ rotate: [12, 45, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-blue-400/20 rounded-full"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {[...Array(144)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (i * 0.1) % 4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Pulsing Circles */}
          <motion.div
            className="absolute top-1/3 left-1/2 w-96 h-96 border border-primary/10 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 border border-green-400/10 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Code-like Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{
                  top: `${10 + i * 12}%`,
                  width: `${60 + Math.random() * 40}%`,
                  left: `${Math.random() * 20}%`,
                }}
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-headline mb-4 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Unlock Your Potential with TechFarm
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Navigate the digital frontier with confidence. Our courses are crafted to equip you with today's most in-demand technologies, turning your ambition into real-world expertise.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/#why-invest">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Courses
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="#why-invest">
                <ArrowDownCircle className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        <motion.section
          id="why-invest"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold font-headline mb-2 text-center text-primary">
            Why Invest in These Technologies?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
            In a rapidly evolving digital landscape, mastering key technologies is crucial for career growth. Here's why our courses are essential for your success.
          </p>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                }}
              >
                <Card className="bg-card shadow-lg overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300">
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
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-headline mb-10 text-primary">Why Choose TechFarm?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div variants={featureCardVariants} transition={{ duration: 0.4, delay: 0.1 }}>
              <Card className="h-full bg-card p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Expert-Led Content</h3>
                  <p className="text-muted-foreground">Learn from industry professionals with real-world experience.</p>
              </Card>
            </motion.div>
             <motion.div variants={featureCardVariants} transition={{ duration: 0.4, delay: 0.2 }}>
              <Card className="h-full bg-card p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                 <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Laptop className="h-8 w-8" />
                  </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Hands-On Projects</h3>
                <p className="text-muted-foreground">Apply your knowledge with practical projects and exercises.</p>
              </Card>
            </motion.div>
            <motion.div variants={featureCardVariants} transition={{ duration: 0.4, delay: 0.3 }}>
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