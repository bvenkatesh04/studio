import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from './ContactForm';
import { Skeleton } from '@/components/ui/skeleton';

function ContactFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-20 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center items-center">
        <Card className="w-full max-w-2xl shadow-xl bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Contact Us</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<ContactFormSkeleton />}>
              <ContactForm />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}