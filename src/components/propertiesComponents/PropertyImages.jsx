import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PropertyImages = ({ images }) => {
  return (
    <Gallery>
      <section className='bg-blue-50 p-4'>
        <div className='container mx-auto'>
          {images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width='1000'
              height='600'
            >
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={images[0]}
                  alt=''
                  className='object-cover h-[400px] mx-auto rounded-xl'
                  width={1800}
                  height={400}
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className='grid grid-cols-2 gap-4'>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`
                  ${
                    images.length === 3 && index === 2
                      ? 'col-span-2'
                      : 'col-span-1'
                  }
                `}
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    width='1000'
                    height='600'
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={image}
                        alt=''
                        className='object-cover h-[400px] w-full rounded-xl'
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="!bg-[#fff] cta secondary  z-10 absolute left-[10vw]  top-44 lg:!bottom-24">
        <div className="!bg-[#fff] flex text-black rounded-xl " >
            <img
            src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def517b72056f_search.svg"
            loading="lazy"
            alt=""
            className="icon-small"
            />
            <div>View gallery</div>
            </div> 
        </div>
      </section>
    </Gallery>
  );
};
export default PropertyImages;



// const PropertyImages = ({ images }) => {
//   return (
//     <div className="flex bg-white">
//              <Image
               
//                   onClick={open}
//                   src={images[0]}
//                   alt=''
//                   className='ml-8 object-cover h-[400px] mx-auto rounded-xl sr-only lg:not-sr-only object-cover h-[400px] mx-auto rounded-xl'
//                   width={200}
//                   height={400}
//                   priority={true}
//                 />  <Gallery>
//          <section className='bg-blue-50 p-4 col-span-1'>

             
      
       
//         <div className='container mx-auto'>
       
//           {images.length === 1 ? (
//             <Item
//               original={images[0]}
//               thumbnail={images[0]}
//               width='1000'
//               height='600'
//             >
//               {({ ref, open }) => (
//                 <Image
//                   ref={ref}
//                   onClick={open}
//                   src={images[0]}
//                   alt=''
//                   className='object-cover h-[400px] mx-auto rounded-xl'
//                   width={1800}
//                   height={400}
//                   priority={true}
//                 />
//               )}
//             </Item>
//           ) : (
//             <div className='grid grid-cols-2 gap-4'>
//               {images.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`
//                   ${
//                     images.length >= 3 && index === 2
//                       ? 'col-span-2'
//                       : 'col-span-1'
//                   }
//                 `}
//                 >
//                   <Item
//                     original={image}
//                     thumbnail={image}
//                     width='1000'
//                     height='600'
//                   >
//                     {({ ref, open }) => (
//                       <Image
//                         ref={ref}
//                         onClick={open}
//                         src={image}
//                         alt=''
//                         className='object-cover h-[400px] w-full rounded-xl'
//                         width={0}
//                         height={0}
//                         sizes='100vw'
//                         priority={true}
//                       />
//                     )}
//                   </Item>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </Gallery>
//     </div>
  
//   );
// };
// export default PropertyImages;
