"use client";

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';
import { sendContactMessage } from './actions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { courses } from '@/lib/data';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/custom/AnimatedButton';

export default function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  
  const courseFromUrl = searchParams.get('course') || '';

  const [selectedCourse, setSelectedCourse] = useState(courseFromUrl);
  const [message, setMessage] = useState(
    courseFromUrl ? `I'm interested in the "${courseFromUrl}" course.` : ''
  );

  useEffect(() => {
    setSelectedCourse(courseFromUrl);
    setMessage(
      courseFromUrl ? `I'm interested in the "${courseFromUrl}" course.` : ''
    );
  }, [courseFromUrl]);

  const handleCourseChange = (newCourse: string) => {
    setSelectedCourse(newCourse);
    setMessage(
      newCourse ? `I'm interested in the "${newCourse}" course.` : ''
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const result = await sendContactMessage(formData);

    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Message Sent! 🎉",
        description: "Thanks for reaching out. We'll get back to you shortly.",
      });
      formRef.current?.reset();
      handleCourseChange(courseFromUrl);
    } else {
      toast({
        title: "Error Sending Message",
        description: result.error || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.form 
      ref={formRef} 
      onSubmit={handleSubmit} 
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={fieldVariants} className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
        <Input 
          id="name" 
          name="name" 
          type="text" 
          placeholder="John Doe" 
          required 
          className="bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-2 focus:border-primary/50"
        />
      </motion.div>
      
      <motion.div variants={fieldVariants} className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="you@example.com" 
          required 
          className="bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-2 focus:border-primary/50"
        />
      </motion.div>
      
      <motion.div variants={fieldVariants} className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium">Mobile Number</Label>
        <Input 
          id="phone" 
          name="phone" 
          type="tel" 
          placeholder="+1 (555) 123-4567" 
          required 
          className="bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-2 focus:border-primary/50"
        />
      </motion.div>
      
      <motion.div variants={fieldVariants} className="space-y-2">
        <Label htmlFor="course" className="text-sm font-medium">Course of Interest</Label>
        <Select name="course" value={selectedCourse} onValueChange={handleCourseChange} required>
          <SelectTrigger 
            id="course" 
            className="bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-2 focus:border-primary/50"
          >
            <SelectValue placeholder="Select a course..." />
          </SelectTrigger>
          <SelectContent className="bg-background/95 backdrop-blur-md">
            {courses.map((course) => (
              <SelectItem 
                key={course.id} 
                value={course.title}
                className="hover:bg-primary/10 focus:bg-primary/10 transition-colors"
              >
                {course.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>
      
      <motion.div variants={fieldVariants} className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message or question..."
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-2 focus:border-primary/50 resize-none"
        />
      </motion.div>
      
      <motion.div variants={fieldVariants}>
        <AnimatedButton 
          type="submit" 
          size="lg" 
          disabled={isSubmitting} 
          className="w-full bg-primary hover:bg-primary/80 text-primary-foreground h-12 text-base"
          shimmer
          pulse={!isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </AnimatedButton>
      </motion.div>
    </motion.form>
  );
}