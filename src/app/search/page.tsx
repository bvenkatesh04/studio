import { Suspense } from "react";
import SearchClient from "./SearchClient";

interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchClient searchParams={params} />
    </Suspense>
  );
}