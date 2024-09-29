import React, { Suspense } from 'react';
import PropertySearchForm from './PropertySearchForm.jsx';
import SearchResultsCSR from './SearchResultsCSR.jsx'; // Your separated CSR component

export default function SearchResultsComponent() {
  return (
    <>
      <section className='bg-custom-gradient px-4 py-12 lg:py-12'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResultsCSR />
      </Suspense>
    </>
  );
}