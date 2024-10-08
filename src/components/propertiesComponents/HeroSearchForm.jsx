import PropertySearchForm from './PropertySearchForm';

const HeroSearchForm = () => {
  return (
    <section className='!z-30 !max-w-[99.5vw] sm:px-0 lg:px-6 lg:mt-[-0.0em] rounded-xl lg:!rounded-3xl md:shadow-xl pt-4 sm:pb-8 fade-in-from-bottom
      sm:my-4  sm:pt-6 !bg-white/70 lg:bg-gray-400 sm:-mt-12
     lg:mt-24 lg:py-0 sm:mb-4 lg:!max-w-xl xl:pt-6 '>
       
      <div className='max-w-7xl mx-auto lg:px-0 max-[1400px]:px-8 flex flex-col items-center '>
        <div className='text-center pt-4 lg:pt-10 !max-w-[23rem] !text-left'>
         
          <h1 className='hover:mainText text-center text-slate-700 text-base  md:text-3xl font-extrabold sm:text-3xl md:text-4xl'>
            Search
          </h1>
          <p className='md:flex mb-2 text-xl text-gray-600 italic font-base'>
           Commercial or Residential
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  );
};
export default HeroSearchForm;
