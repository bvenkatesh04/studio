"use client";

import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, BookOpen, ArrowDownCircle, Award, Laptop, Users, TrendingUp, Shield, Clock, Star, CheckCircle, ArrowRight, Play, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

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

  const statsData = [
    { number: "50K+", label: "Students Enrolled", icon: Users },
    { number: "95%", label: "Job Placement Rate", icon: TrendingUp },
    { number: "4.8/5", label: "Average Rating", icon: Star },
    { number: "24/7", label: "Learning Support", icon: Clock }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Industry-Recognized Certifications",
      description: "Earn certificates that employers value and trust, backed by real-world projects and assessments."
    },
    {
      icon: Laptop,
      title: "Hands-On Learning Experience",
      description: "Build real projects, work with actual tools, and gain practical experience that translates directly to your career."
    },
    {
      icon: Users,
      title: "Expert Mentorship & Community",
      description: "Learn from industry professionals and connect with a supportive community of learners and experts."
    },
    {
      icon: Shield,
      title: "Lifetime Access & Updates",
      description: "Get lifetime access to course materials with regular updates to keep your skills current with industry trends."
    },
    {
      icon: Zap,
      title: "Fast-Track Your Career",
      description: "Accelerate your professional growth with structured learning paths designed for rapid skill acquisition."
    },
    {
      icon: Globe,
      title: "Learn Anywhere, Anytime",
      description: "Access courses on any device, download for offline learning, and study at your own pace from anywhere in the world."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "DevOps Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "TechFarm's DevOps bootcamp transformed my career. The hands-on projects and expert guidance helped me land my dream job at Google.",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      role: "Full Stack Developer at Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "The Java masterclass was exactly what I needed. Clear explanations, practical examples, and excellent support throughout the journey.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "QA Lead at Amazon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "Best investment in my career! The testing courses are comprehensive and the instructors are world-class. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* Enhanced Glass Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
          
          {/* Glass overlay with blur effect */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          
          {/* Enhanced Floating Glass Orbs */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                style={{
                  width: Math.random() * 120 + 60,
                  height: Math.random() * 120 + 60,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Enhanced Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-16 h-full">
              {[...Array(256)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-primary/20"
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/30 rotate-45 bg-white/5 backdrop-blur-sm rounded-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 border-2 border-green-400/30 rounded-full bg-white/5 backdrop-blur-sm"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary/20 rotate-12 backdrop-blur-sm rounded-lg"
            animate={{ rotate: [12, 60, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Enhanced Animated Light Rays */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                style={{
                  top: `${10 + i * 7}%`,
                  width: `${50 + Math.random() * 50}%`,
                  left: `${Math.random() * 25}%`,
                }}
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Enhanced Content */}
        <div className="relative z-10 max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm bg-white/20 text-gray-700 backdrop-blur-sm border-none">
              🚀 Join 50,000+ Successful Learners
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline mb-6 text-gray-800 drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Master Tomorrow's Tech
            <span className="block text-primary">Today</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 drop-shadow-md max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Transform your career with industry-leading courses in 
            <span className="text-primary font-semibold"> DevOps, Cloud Computing, Testing, and Programming</span>. 
            Learn from experts, build real projects, and land your dream job.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
            >
              <Link href="/search">
                <BookOpen className="mr-3 h-6 w-6" />
                Start Learning Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-gray-300 bg-white/50 hover:bg-white/70 text-gray-800 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
            >
              <Link href="#why-invest">
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Industry Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">95% Job Placement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Expert Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-32">
        {/* Stats Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
          className="py-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={featureCardVariants}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Why Choose Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary"
            >
              Why Choose TechFarm?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We're not just another online learning platform. We're your career transformation partner, 
              committed to your success with proven methodologies and industry connections.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                variants={featureCardVariants} 
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm group">
                  <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Courses Section - COMPACT LAYOUT */}
        <motion.section
          id="why-invest"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-semibold font-headline mb-6 text-primary"
            >
              Master In-Demand Technologies
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              In today's rapidly evolving digital landscape, staying ahead means mastering the right technologies. 
              Our expertly crafted courses are designed to give you the competitive edge you need to excel in your career.
            </motion.p>
          </div>

          <div className="space-y-8">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Card className="bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-4 relative h-48 md:h-full min-h-[200px]">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        data-ai-hint={course.imageHint || 'technology education'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          {course.category}
                        </Badge>
                      </div>
                      {course.rating && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-medium">{course.rating.toFixed(1)}</span>
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-8">
                      <div className="p-6 md:p-8 flex flex-col h-full">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-xl md:text-2xl font-bold font-headline text-primary mb-2">
                            {course.title}
                          </CardTitle>
                          <CardDescription className="text-base text-muted-foreground leading-relaxed line-clamp-2">
                            {course.longDescription || course.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-0 flex-grow">
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {course.enrolledStudents && (
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium">{course.enrolledStudents.toLocaleString()} students</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-primary" />
                              <span className="text-sm font-medium">{course.modules.length} modules</span>
                            </div>
                            {course.instructor && (
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium">{course.instructor}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="text-sm font-medium">Self-paced</span>
                            </div>
                          </div>
                        </CardContent>
                        
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                          <Button asChild className="flex-1 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                            <Link href={`/courses/${course.id}`}>
                              <BookOpen className="mr-2 h-4 w-4" />
                              Explore Course
                            </Link>
                          </Button>
                          <Button 
                            asChild 
                            variant="outline" 
                            className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <Link href={`/contact?course=${encodeURIComponent(course.title)}`}>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Get Info
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

        {/* Testimonials Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
          className="py-16"
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary"
            >
              Success Stories
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Join thousands of professionals who have transformed their careers with TechFarm
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={featureCardVariants}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
          className="text-center py-16"
        >
          <Card className="p-12 md:p-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 shadow-2xl">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary"
            >
              Ready to Transform Your Career?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Join over 50,000 professionals who have already accelerated their careers with TechFarm. 
              Start your journey today and unlock unlimited possibilities.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
              >
                <Link href="/search">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Start Learning Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-3 h-6 w-6" />
                  Talk to an Expert
                </Link>
              </Button>
            </motion.div>
          </Card>
        </motion.section>
      </div>
    </>
  );
}