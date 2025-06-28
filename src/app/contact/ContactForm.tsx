"use client";

import { useState, useEffect, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';
import { sendContactMessage } from './actions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { courses } from '@/lib/data';

interface ContactFormProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ContactForm({ searchParams }: ContactFormProps) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const courseFromUrl = (searchParams.course as string) || '';

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
        title: "Message Sent!",
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

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" type="text" placeholder="John Doe" required className="bg-background"/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required className="bg-background" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Mobile Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required className="bg-background" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="course">Course of Interest</Label>
        <Select name="course" value={selectedCourse} onValueChange={handleCourseChange} required>
          <SelectTrigger id="course" className="bg-background">
            <SelectValue placeholder="Select a course..." />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.title}>
                {course.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message or question..."
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-background"
        />
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
        {isSubmitting ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <Send className="mr-2 h-5 w-5" />
        )}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}