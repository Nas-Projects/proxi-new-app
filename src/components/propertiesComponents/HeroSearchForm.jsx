import PropertySearchForm from './PropertySearchForm';

const HeroSearchForm = () => {
  return (
    <section className='!max-w-[87vw] shadow-xl px-6 pt-4 pb-8 fade-in-from-bottom2 my-4  sm:p-6 !bg-white/70 lg:bg-gray-400 -mt-12 lg:mt-24  lg:py-20 mb-4  rounded-xl max-w-2xl '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          {/* <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Find The Perfect Rental
          </h1> */}
             <h1 className='mainText text-base  md:text-3xl font-extrabold sm:text-4xl md:text-5xl'>
            Search
          </h1>
          <p className='hidden md:flex my-4 text-xl text-gray-600'>
            Discover the perfect property that suits your needs.
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  );
};
export default HeroSearchForm;
