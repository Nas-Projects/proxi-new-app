// import Image from 'next/image';
import BlurImage from '../blur-image';

const PropertyHeaderImage = ({ image, propertyTitle, propertyType, forRentorSale,  propertyLocation}) => {
  return (
  <section>
    <div className="section detail">
      <div className="main-container  !px-6 !md:px-8 lg:!px-12 xl:!px-24 flex">
        <div
          data-w-id="a763d88d-605b-5960-fb19-85b22eb0fb1d"
          style={{ opacity: 1 }}
          className="limit-520 block"
        >
          <div className="detail-type">
            <p className="paragraph-big">{forRentorSale}</p>
            <div className="type-divider" />
            <p className="paragraph-big">{propertyType}</p>
          </div>
          <div className="title-wrap mt-4">
            <h1 className="detail-title detail-page-title mb-4 color-[var(--midnight-blue)] slide-animation">
              {propertyTitle}</h1>
            <div className="title-flex block">
              <div className="title-flex-inner inline-flex text-left">
                <h1 className="detail-page-title detail-title text-color-accent flex  text-custom-gradient">
                  {propertyLocation.street}</h1>
                <span className="detail-page-title  detail-title text-color-accent flex text-custom-gradient">,</span>
              </div>
           <br />
          <div className="mt-[-1em] lg:-mt-8 xl:lg:-mt-12 flex text-left  inline-flex gap-x-2 lg:gap-x-4">
           <h1 className="detail-title text-color-accent text-custom-gradient">{propertyLocation.city}</h1>
            <h1 className=" flex detail-title text-color-accent text-custom-gradient">{propertyLocation.state}</h1>
            <h1 className="detail-title text-color-accent text-custom-gradient">{propertyLocation.zip}</h1>  
          </div>
        </div>
      </div>
      <div className="space-32" />
      <div className="detail-block-wrap lg:flex gap-x-4">
        <a href="#" className="detail-block w-inline-block">
          <div className="realestate-icon paragraph-small">
          <BlurImage
              src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def27b172056c_Assignment.svg"
              loading="lazy"
              alt=""
              className="image"
              width={0}
            height={0}
            />
          </div>
          <div className="inline-flex gap-x-6">
              <p className="paragraph-small text-bold">Compare</p>
          </div>
        <a href="#" className="detail-block w-inline-block">
          <div className="realestate-iconn paragraph-small">
          <BlurImage
              src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def3e7a72056d_Favorite.svg"
              loading="lazy"
              alt=""
              className="image"
              width={0}
            height={0}
            />
          </div>
          <p className="paragraph-small text-bold">Save as favorite</p>
        </a>
        </a>
        
      </div>
    </div>
  </div>
</div>

      <div className='container-xl m-auto '>
        <div className='grid grid-cols-1'>
        <BlurImage
            src={image}
            alt=''
            className='object-cover h-[400px] lg:h-[70vh] xl:h-[85vh] w-full'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
            // height={600}
            // width={600}
          />
        </div>
      </div>
    </section>
  );
};
export default PropertyHeaderImage;
