import PropertySearchForm from './PropertySearchForm';

const HeroSearchForm = () => {
  return (
    <section className='!max-w-[99.5vw] px-8 md:px-6 lg:mt-[-1em] rounded-xl lg:!rounded-3xl  
    md:shadow-xl pt-4 sm:pb-8 fade-in-from-bottom
      my-4  sm:p-6 !bg-white/70 lg:bg-gray-400 -mt-12
     lg:mt-24 lg:py-0 mb-4 lg:!max-w-xl '>
       
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center pt-4 lg:pt-8 !max-w-[23rem] !text-left'>
          {/* <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Find The Perfect Rental
          </h1> */}
             <h1 className='mainText text-base  md:text-3xl font-extrabold sm:text-4xl md:text-5xl'>
            Search
          </h1>
          <p className='md:flex my-4 text-xl text-gray-600 italic font-base'>
           Commercial or Residential
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  );
};
export default HeroSearchForm;
