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
    <div className="space-y-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className={`h-10 w-full ${i === 4 ? 'h-20' : ''}`} />
        </div>
      ))}
      <Skeleton className="h-12 w-full" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <ResponsiveContainer className="py-8 sm:py-12">
      <div className="flex justify-center items-center min-h-[80vh]">
        <AnimatedCard className="w-full max-w-2xl shadow-2xl bg-card/80 backdrop-blur-md border-2 border-border/50">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-responsive-3xl font-bold text-primary gradient-text mb-2">
              Contact Us
            </CardTitle>
            <CardDescription className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <Suspense fallback={
              <div className="flex flex-col items-center justify-center py-8">
                <LoadingSpinner size="lg" text="Loading form..." />
                <div className="mt-8 w-full">
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