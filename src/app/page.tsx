"use client";

import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, BookOpen, ArrowDownCircle, Award, Laptop, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <>
      {/* Hero Section with Glass Background */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* Glass Background with Animated Elements */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
          
          {/* Glass overlay with blur effect */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          
          {/* Floating Glass Orbs */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {[...Array(144)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-primary/20"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rotate-45 bg-white/5 backdrop-blur-sm"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 border-2 border-green-400/30 rounded-full bg-white/5 backdrop-blur-sm"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/20 rotate-12 backdrop-blur-sm"
            animate={{ rotate: [12, 45, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated Light Rays */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                style={{
                  top: `${15 + i * 10}%`,
                  width: `${40 + Math.random() * 40}%`,
                  left: `${Math.random() * 30}%`,
                }}
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-headline mb-4 text-gray-800 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Unlock Your Potential with TechFarm
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 drop-shadow-md max-w-3xl mx-auto"
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
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/search">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Courses
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-gray-300 bg-white/50 hover:bg-white/70 text-gray-800 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
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
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Card className="bg-card shadow-lg overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-4 relative h-64 md:h-full min-h-[200px]">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
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
                          <Button asChild className="transition-all duration-300 hover:scale-105">
                            <Link href={`/courses/${course.id}`}>
                              <BookOpen className="mr-2 h-5 w-5" />
                              View Course
                            </Link>
                          </Button>
                          <Button 
                            asChild 
                            variant="outline" 
                            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                          >
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
              <Card className="h-full bg-card p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Expert-Led Content</h3>
                  <p className="text-muted-foreground">Learn from industry professionals with real-world experience.</p>
              </Card>
            </motion.div>
             <motion.div variants={featureCardVariants} transition={{ duration: 0.4, delay: 0.2 }}>
              <Card className="h-full bg-card p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                 <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Laptop className="h-8 w-8" />
                  </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Hands-On Projects</h3>
                <p className="text-muted-foreground">Apply your knowledge with practical projects and exercises.</p>
              </Card>
            </motion.div>
            <motion.div variants={featureCardVariants} transition={{ duration: 0.4, delay: 0.3 }}>
              <Card className="h-full bg-card p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
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