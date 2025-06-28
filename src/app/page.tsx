"use client";

import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, BookOpen, ArrowDownCircle, Award, Laptop, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ResponsiveContainer from '@/components/custom/ResponsiveContainer';
import AnimatedCard from '@/components/custom/AnimatedCard';
import AnimatedButton from '@/components/custom/AnimatedButton';
import StaggeredGrid from '@/components/custom/StaggeredGrid';
import ParallaxSection from '@/components/custom/ParallaxSection';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
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
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800"
        >
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
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
            className="absolute top-20 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 border border-primary/20 rotate-45"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-4 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 border border-green-400/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-primary/10 rotate-12"
            animate={{ rotate: [12, 45, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Pulsing Circles */}
          <motion.div
            className="absolute top-1/3 left-1/2 w-48 sm:w-96 h-48 sm:h-96 border border-primary/10 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 sm:w-64 h-32 sm:h-64 border border-green-400/10 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Code-like Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{
                  top: `${15 + i * 15}%`,
                  width: `${40 + Math.random() * 40}%`,
                  left: `${Math.random() * 30}%`,
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
        </motion.div>

        {/* Content */}
        <ResponsiveContainer className="relative z-10 max-w-4xl">
          <motion.h1 
            className="text-responsive-4xl font-bold font-headline mb-4 sm:mb-6 text-white drop-shadow-lg gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Unlock Your Potential with TechFarm
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 drop-shadow-md max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Navigate the digital frontier with confidence. Our courses are crafted to equip you with today's most in-demand technologies, turning your ambition into real-world expertise.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <AnimatedButton 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg hover:shadow-xl w-full sm:w-auto"
              shimmer
              pulse
            >
              <Link href="/#why-invest">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Courses
              </Link>
            </AnimatedButton>
            <AnimatedButton 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm shadow-lg hover:shadow-xl w-full sm:w-auto"
              shimmer
            >
              <Link href="#why-invest">
                <ArrowDownCircle className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </AnimatedButton>
          </motion.div>
        </ResponsiveContainer>
      </section>

      <ResponsiveContainer className="py-8 sm:py-12 lg:py-16 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Courses Section */}
        <motion.section
          id="why-invest"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2 
              className="text-responsive-3xl font-semibold font-headline mb-4 text-primary"
              variants={itemVariants}
            >
              Why Invest in These Technologies?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              In a rapidly evolving digital landscape, mastering key technologies is crucial for career growth. Here's why our courses are essential for your success.
            </motion.p>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={itemVariants}
              >
                <AnimatedCard 
                  className="overflow-hidden border-2 border-transparent hover:border-primary/30 bg-card/50 backdrop-blur-sm"
                  delay={index * 0.1}
                  interactive
                  glow
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    <div className="md:col-span-4 relative h-48 sm:h-64 md:h-full min-h-[200px]">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        data-ai-hint={course.imageHint || 'technology education'}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
                    </div>
                    <div className="md:col-span-8">
                      <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-xl sm:text-2xl font-bold font-headline text-primary">
                            {course.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex-grow">
                          <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {course.description}
                          </CardDescription>
                        </CardContent>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <AnimatedButton asChild className="flex-1 sm:flex-none" shimmer>
                            <Link href={`/courses/${course.id}`}>
                              <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              View Course
                            </Link>
                          </AnimatedButton>
                          <AnimatedButton 
                            asChild 
                            variant="outline" 
                            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground flex-1 sm:flex-none"
                            shimmer
                          >
                            <Link href={`/contact?course=${encodeURIComponent(course.title)}`}>
                              <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              Inquire Now
                            </Link>
                          </AnimatedButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <ParallaxSection speed={0.3}>
          <motion.section 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            variants={sectionVariants}
          >
            <motion.h2 
              className="text-responsive-3xl font-bold font-headline mb-8 sm:mb-12 text-primary"
              variants={itemVariants}
            >
              Why Choose TechFarm?
            </motion.h2>
            
            <StaggeredGrid 
              columns={{ default: 1, sm: 2, lg: 3 }}
              className="max-w-6xl mx-auto"
              staggerDelay={0.2}
            >
              {[
                {
                  icon: Award,
                  title: "Expert-Led Content",
                  description: "Learn from industry professionals with real-world experience and proven track records."
                },
                {
                  icon: Laptop,
                  title: "Hands-On Projects",
                  description: "Apply your knowledge with practical projects and real-world exercises that build your portfolio."
                },
                {
                  icon: Users,
                  title: "Flexible Learning",
                  description: "Learn at your own pace, anytime, anywhere, on any device with our responsive platform."
                }
              ].map((feature, index) => (
                <AnimatedCard 
                  key={feature.title}
                  className="p-4 sm:p-6 text-center shadow-xl hover:shadow-2xl bg-card/80 backdrop-blur-sm"
                  delay={index * 0.2}
                  hover
                  glow
                >
                  <motion.div 
                    className="mb-4 sm:mb-6 inline-flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 text-primary"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </AnimatedCard>
              ))}
            </StaggeredGrid>
          </motion.section>
        </ParallaxSection>
      </ResponsiveContainer>
    </>
  );
}