import React, { Suspense } from 'react';
import PropertySearchForm from './PropertySearchForm.jsx';
import SearchResultsCSR from './SearchResultsCSR.jsx'; // Your separated CSR component
import { GradientBackground } from '@/components/gradient'
export default function SearchResultsComponent() {
  return (
    <main className="overflow-hidden bg-gray-50 min-h-dvh"> 
       <GradientBackground />
        <div className="min-h-[calc(100vh_-_216px)] text-sm leading-6 isolate flex min-h-dvh items-center justify-center">
          <div className="w-full max-w-full justify-center content-center  items-center
           rounded-xl bg-white shadow-md ring-1 ring-black/5">
            <section className='bg-custom-gradient p-6 lg:p-8 px-4 py-/12 lg:py-1/2'>
              <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
                <PropertySearchForm />
              </div>
            </section>
            <Suspense fallback={<div>Loading search results...</div>}>
              <SearchResultsCSR />
            </Suspense>
            </div>
        </div>
      </main>
  );
}