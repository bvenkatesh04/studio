import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from './ContactForm';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import ResponsiveContainer from '@/components/custom/ResponsiveContainer';
import AnimatedCard from '@/components/custom/AnimatedCard';
import LoadingSpinner from '@/components/custom/LoadingSpinner';

function ContactFormSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className={`h-8 w-full ${i === 4 ? 'h-16' : ''}`} />
        </div>
      ))}
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <ResponsiveContainer className="py-6 sm:py-8">
      <div className="flex justify-center items-center min-h-[70vh]">
        <AnimatedCard className="w-full max-w-2xl shadow-2xl bg-card/80 backdrop-blur-md border-2 border-border/50 warm-glow">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary gradient-text mb-2">
              Contact Us
            </CardTitle>
            <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <Suspense fallback={
              <div className="flex flex-col items-center justify-center py-6">
                <LoadingSpinner size="lg" text="Loading form..." />
                <div className="mt-6 w-full">
                  <ContactFormSkeleton />
                </div>
              </div>
            }>
              <ContactForm />
            </Suspense>
          </CardContent>
        </AnimatedCard>
      </div>
    </ResponsiveContainer>
  );
}