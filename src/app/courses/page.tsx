
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <Alert variant="destructive" className="max-w-lg">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Page Not Found</AlertTitle>
            <AlertDescription>
                This page has been removed or does not exist. Please navigate back to <Link href="/" className="font-semibold text-primary hover:underline">Home</Link>.
            </AlertDescription>
        </Alert>
    </div>
  );
}
