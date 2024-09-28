// import React from 'react';
// import styles from './propertyDetailCard.module.css'; // Import the CSS module
// import clsx from 'clsx';
import React from 'react';
import styles from './propertyDetailCard.module.css'; // Import the CSS module
import clsx from 'clsx';
// import { urlFor } from '@/sanity/lib/image';
import BlurImage from '../blur-image';
import Link from 'next/link';


const DetailCard = ({ property, classes }) => {
  console.log("PROPERTY ", property) 
  const contactName = property?.contact?.name ?? "No Contact Name Available";
  const propertyDescription = property?.description ?? "No Description Available";
  const contactEmail = property?.contact?.email ?? "no-email@provided.com";
  const contactPhone = property?.contact?.phone ?? "No Phone Provided";
  const contactImage = property?.contact?.image?.asset?.url ?? "https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%25203-p-500.webp  500w,https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%203.webp  500w";
  // Create mailto link for email
  const mailtoLink = `mailto:${contactEmail}?subject=Property Inquiry: ${encodeURIComponent(propertyDescription)}`;

  // Create tel link for phone number
  const telLink = `tel:${contactPhone.replace(/\s+/g, '')}`;

  return (
    <div className={clsx(classes && classes, styles.absoluteWrapStickyBox)}>
      <div className={styles.detailCard}>
        <div className={styles.listItemWrap}>
          
          {/* Property Type */}
          <div className={styles.listItem}>
            <div className={styles.detailBlock}>
              <div className={styles.icon}>
                <img
                  src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2223720590_hotel-line.svg"
                  loading="lazy"
                  alt=""
                  className={styles.image}
                />
              </div>
              <p className={styles.propertyDetailsLeft}>Property type</p>
            </div>
            <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
              {property?.type ?? "Unknown"}
            </div>
          </div>

          {/* Property Size */}
          <div className={styles.listItem}>
            <div className={styles.detailBlock}>
              <div className={styles.icon}>
                <img
                  src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0be6720591_shape-2-line.svg"
                  loading="lazy"
                  alt=""
                  className={styles.image}
                />
              </div>
              <p className={styles.propertyDetailsLeft}>
                {property?.retail?.size ? "Property size" : "Square Footage"}
              </p>
            </div>

            {property?.retail ? (
              <div className={styles.wrapDetailValue}>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail.size ?? "Unknown"}
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  ft²
                </div>
              </div>
            ) : (
              <div className={styles.wrapDetailValue}>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property?.square_feet ?? "Unknown"}
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  ft²
                </div>
              </div>
            )}
          </div>

          {/* Price Per Square Foot (PSF) */}
          {property?.retail && (
            <div className={styles.listItem}>
              <div className={styles.detailBlock}>
                <div className={styles.icon}>
                  <img
                    src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0be6720591_shape-2-line.svg"
                    loading="lazy"
                    alt=""
                    className={styles.image}
                  />
                </div>
                <p className={styles.propertyDetailsLeft}>Price Per Square Foot</p>
              </div>
              <div className={styles.wrapDetailValue}>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail.psf ? property.retail.psf : "Unknown"}
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  PSF
                </div>
              </div>
            </div>
          )}

          {/* FLOORS */}
          {property?.floors  && (
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <div className={styles.icon}>
                    <img
                      loading="lazy"
                      alt=""
                      className={styles.image}
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
                    />
                  </div>
                  <p className={styles.propertyDetailsLeft}>Number of floors</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property?.floors ? property.floors : "Unknown"}
                </div>
              </div>
            )}
          {/* Building Size */}
          <div className={styles.listItem}>
            <div className={styles.detailBlock}>
              <div className={styles.icon}>
                <img
                  src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2eeb72058f_home-line.svg"
                  loading="lazy"
                  alt=""
                  className={styles.image}
                />
              </div>
              <p className={styles.propertyDetailsLeft}>Building size</p>
            </div>
            <div className={styles.wrapDetailValue}>
              <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                {property?.buildingSize ?? "Unknown"}
              </div>
              <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                m²
              </div>
            </div>
          </div>

          {/* Other fields like beds, baths, parking, etc., remain unchanged */}
          {/* Add other similar fields as required */}
          
          {/* Retail Details */}
          {property.retail && (
            <>
              {/* Basement */}
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <div className={styles.icon}>
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def366972058d_car-line.svg"
                      loading="lazy"
                      alt=""
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.propertyDetailsLeft}>Basement</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail.basement ? "Yes" : "No"}
                </div>
              </div>

              {/* Cooking Allowed */}
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <div className={styles.icon}>
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def366972058d_car-line.svg"
                      loading="lazy"
                      alt=""
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.propertyDetailsLeft}>Cooking Allowed</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail.cookingAllowed ? "Yes" : "No"}
                </div>
              </div>

              {/* Pop Up Allowed */}
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <div className={styles.icon}>
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2eeb72058f_home-line.svg"
                      loading="lazy"
                      alt=""
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.propertyDetailsLeft}>Pop Up Allowed</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail?.popUpAllowed ? "Yes" : "No"}
                </div>
              </div>

              {/* Cross Streets */}
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <div className={styles.icon}>
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2eeb72058f_home-line.svg"
                      loading="lazy"
                      alt=""
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.propertyDetailsLeft}>Cross Streets</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail.crossStreets ?? "Unknown"}
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <div className={styles.icon}>
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2eeb72058f_home-line.svg"
                      loading="lazy"
                      alt=""
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.propertyDetailsLeft}>Neighborhood</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail.neighborhood ?? "Unknown"}
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                <div className={clsx("!hidden", styles.icon)}>
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2eeb72058f_home-line.svg"
                      loading="lazy"
                      alt=""
                      className={styles.image}
                    />
                  </div>
                  <p className={clsx("pl-10 xl:pl-10", styles.propertyDetailsLeft)}>Frontage</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail.frontage ?? "Unknown"}
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                <div className={clsx( styles.icon)}>
                    <img
                      src="/Bitcoin-with-golden-coin-on-transparent-background.png"
                      loading="lazy"
                      alt=""
                      className={styles.image}
                    />
                  </div>
                  <p className={clsx(styles.propertyDetailsLeft)}>Accepts Crypto</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.retail.acceptsCrypto ? "Yes" : "No"}
                </div>
              </div>

              {property.floors !== undefined && (
                <div className={styles.listItem}>
                  <div className={styles.detailBlock}>
                    <div className={styles.icon}>
                      <img
                        loading="lazy"
                        alt=""
                        className={styles.image}
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
                      />
                    </div>
                    <p className={styles.propertyDetailsLeft}>Number of floors</p>
                  </div>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                    {property?.floors ? property.floors : "Unknown"}
                  </div>
                </div>
              )}
            </>
          )}

          <div className={styles.detailCardDivider}></div>
             {/* ASKING */}
            {property?.askingPrice && (
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <p className={styles.propertyDetailsLeft}>Asking price</p>
                </div>
                <div className={styles.wrapDetailPrice}>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.askingPrice}</div>
                </div>
              </div>
            )}
             {property?.retail?.askingPrice && (
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <p className={styles.propertyDetailsLeft}>Asking price</p>
                </div>
                <div className={styles.wrapDetailPrice}>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.retail.askingPrice}</div>
                </div>
              </div>
            )}
              {property?.retail?.priceAnnual && (
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <p className={styles.propertyDetailsLeft}>Price Annual</p>
                </div>
                <div className={styles.wrapDetailPrice}>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.retail.priceAnnual}</div>
                </div>
              </div>
            )}
              {property?.retail?.pricePerMonth && (
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <p className={styles.propertyDetailsLeft}>Price Month</p>
                </div>
                <div className={styles.wrapDetailPrice}>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.retail.pricePerMonth}</div>
                </div>
              </div>
            )}

            {property?.rates && (
              <div className={styles.listItem}>
                <div className={styles.detailBlock}>
                  <p className={styles.propertyDetailsLeft}>Rent starts</p>
                </div>
                <div className={styles.wrapDetailPrice}>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
                  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.rates?.daily || property.rates?.monthly}</div>
                </div>
              </div>
            )}

            <div className="space-24" />
            <div className="cta-wrap">
           <div className="cta-wrap">
            <div className="lg:inline-flex gap-x-4 gap-y-6">
                <a href={mailtoLink} className="cta w-button text-center rounded-2xl bg-custom-gradient w-full">
              Message us
            </a>
          </div>
          <div className="cta-wrap mt-4">
              <a href={telLink} className="cta w-button text-center rounded-2xl !bg-white ring-1 border-1 ring-slate-100 focusr:ring-sky-100 !text-black hover:!bg-sky-500 hover:!text-white w-full">
                Call us
              </a>
            </div>
          
        </div>

            </div>
            <div className="space-12" />
            <div className={styles.detailCardAuthor}>
             
           
          <div className="detail-card-avatar w-24 h-24 ">
            <BlurImage
              src={contactImage}
              loading="lazy"
              sizes="75px"
              alt={contactName}
              className="image rounded-full"
              height={75}
              width={75}
            />
          </div>
          <div className="text-left block">
            <div className="paragraph-small text-bold">{contactName}</div>
            <p className="paragraph-small">Book a viewing with me!</p>
            <div className="space-04" />
            <Link href={mailtoLink} className="link-block-appointment w-inline-block">
                  <p className="paragraph-small text-color-accent text-custom-gradient">
                    Make an appointment
                  </p>
                </Link>
          </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default DetailCard;


// const DetailCard = ({ property, classes }) => {
//   console.log("PROPERTY ", property) 
//   return (
//     <div className={clsx(classes && classes, styles.absoluteWrapStickyBox)}>
//       <div className={styles.detailCard}>
//         <div className={styles.listItemWrap}>
//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2223720590_hotel-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Property type</p>
//             </div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//               {property.type}
//             </div>
//           </div>

//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0be6720591_shape-2-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>{property.size ? "Property size" : "Square Footage"}</p>
//               {/* <p className={styles.propertyDetailsLeft}>{property.retail?.psf ? "Property SQFT" : "Square Footage"}</p> */}
//             </div>


//             {property?.retail && (
//             <> 
//                <div className={styles.wrapDetailValue}>
//                     <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                     {property.retail?.size && property.retail.size}
//                     </div>
//                     <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                       ft²
//                     </div>
//                   </div></> 
//                 )
            
//             }
            
//             {property.square_feet && (
//               <div className={styles.wrapDetailValue}>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.square_feet}
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   ft²
//                 </div>
//               </div>
//             )}
          
//           </div>

//           {/* PRICE PER SQUARE */}
//           {property?.retail && ( 
//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0be6720591_shape-2-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>{property?.retail ? "Price Per Square Foot" : "Square Footage"}</p>
//               {/* <p className={styles.propertyDetailsLeft}>{property.retail?.psf ? "Property SQFT" : "Square Footage"}</p> */}
//             </div>


           
//             <> <div className={styles.wrapDetailValue}>
//                {property.size &&  <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.retail?.psf && property.retail.psf}
//                 </div>}
//               </div>
//                <div className={styles.wrapDetailValue}>
//                     <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                       {property.retail.psf}
//                     </div>
//                     <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                       PSF
//                     </div>
//                   </div>
//                   </> 
          
//           </div> )
//           }


//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2eeb72058f_home-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Building size</p>
//             </div>
//             <div className={styles.wrapDetailValue}>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property?.buildingSize ? property.buildingSize : "N/A"}
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 m²
//               </div>
//             </div>
//           </div>

//           <div className={styles.detailCardDivider}></div>

//           {property.beds !== undefined && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <div className={styles.icon}>
//                   <img
//                     src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defa1b972058c_hotel-bed-line.svg"
//                     loading="lazy"
//                     alt=""
//                     className={styles.image}
//                   />
//                 </div>
//                 <p className={styles.propertyDetailsLeft}>Bedrooms</p>
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property.beds || "Unspecified"}
//               </div>
//             </div>
//           )}

//           {property.baths !== undefined && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <div className={styles.icon}>
//                   <img
//                     src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def5d6c72058e_hand-sanitizer-line.svg"
//                     loading="lazy"
//                     alt=""
//                     className={styles.image}
//                   />
//                 </div>
//                 <p className={styles.propertyDetailsLeft}>Bathrooms</p>
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property.baths || "Unspecified"}
//               </div>
//             </div>
//           )}

//           {property.parking !== undefined && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <div className={styles.icon}>
//                   <img
//                     src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def366972058d_car-line.svg"
//                     loading="lazy"
//                     alt=""
//                     className={styles.image}
//                   />
//                 </div>
//                 <p className={styles.propertyDetailsLeft}>Parking</p>
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property?.parking ? property.parking : "Unknown"}
//               </div>
//             </div>
//           )}

//           {property.floors !== undefined && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <div className={styles.icon}>
//                   <img
//                     loading="lazy"
//                     alt=""
//                     className={styles.image}
//                     src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                   />
//                 </div>
//                 <p className={styles.propertyDetailsLeft}>Number of floors</p>
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property?.floors ? property.floors : "Unknown"}
//               </div>
//             </div>
//           )}

//           {/* Sales specific fields */}
//           {property.investmentSale && (
//             <>
//               <div className={styles.listItem}>
//                 <div className={styles.detailBlock}>
//                   <div className={styles.icon}>
//                     <img
//                       loading="lazy"
//                       alt=""
//                       className={styles.image}
//                       src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                     />
//                   </div>
//                   <p className={styles.propertyDetailsLeft}>Asset Type</p>
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.investmentSale.assetType || "N/A"}
//                 </div>
//               </div>

//               <div className={styles.listItem}>
//                 <div className={styles.detailBlock}>
//                   <div className={styles.icon}>
//                     <img
//                       loading="lazy"
//                       alt=""
//                       className={styles.image}
//                       src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                     />
//                   </div>
//                   <p className={styles.propertyDetailsLeft}>Investment Price</p>
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   ${property.investmentSale.price || "N/A"}
//                 </div>
//               </div>

//               <div className={styles.listItem}>
//                 <div className={styles.detailBlock}>
//                   <div className={styles.icon}>
//                     <img
//                       loading="lazy"
//                       alt=""
//                       className={styles.image}
//                       src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                     />
//                   </div>
//                   <p className={styles.propertyDetailsLeft}>Size Available</p>
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.investmentSale.sizeAvailable || "N/A"}
//                 </div>
//               </div>

//               <div className={styles.listItem}>
//                 <div className={styles.detailBlock}>
//                   <div className={styles.icon}>
//                     <img
//                       loading="lazy"
//                       alt=""
//                       className={styles.image}
//                       src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                     />
//                   </div>
//                   <p className={styles.propertyDetailsLeft}>Number of Units</p>
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.investmentSale.numberOfUnits || "N/A"}
//                 </div>
//               </div>

//               {/* Add other investment fields as needed */}
//             </>
//           )}

//           <div className={styles.detailCardDivider}></div>

//           {property?.askingPrice && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <p className={styles.propertyDetailsLeft}>Asking price</p>
//               </div>
//               <div className={styles.wrapDetailPrice}>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.askingPrice}</div>
//               </div>
//             </div>
//           )}
          
//           {property?.rates && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <p className={styles.propertyDetailsLeft}>Rent starts</p>
//               </div>
//               <div className={styles.wrapDetailPrice}>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.rates?.daily || property.rates?.monthly}</div>
//               </div>
//             </div>
//           )}

//           <div className="space-24" />
//           <div className="cta-wrap">
//             <a href="/contact" className="cta w-button text-center rounded-2xl bg-custom-gradient w-full">
//               Message us
//             </a>
//           </div>
//           <div className="space-12" />
//           <div className={styles.detailCardAuthor}>
//             <div className="detail-card-avatar w-24 h-24 ">
//               <img
//                 src="/agent-1.webp"
//                 loading="lazy"
//                 sizes="75px"
//                 srcSet="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%25203-p-500.webp  500w,https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%203.webp  500w"
//                 alt=""
//                 className="image"
//               />
//             </div>
//             <div className="text-left block">
//               <div className="paragraph-small text-bold">Real Estate Broker</div>
//               <p className="paragraph-small">Book a viewing with me!</p>
//               <div className="space-04" />
//               <a href="/contact" className="link-block-appointment w-inline-block">
//                 <p className="paragraph-small text-color-accent text-custom-gradient">
//                   Make an appointment
//                 </p>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailCard;



// import React from 'react';
// import styles from './propertyDetailCard.module.css'; // Import the CSS module
// import clsx from 'clsx';

// const DetailCard = ({ property, classes }) => {
//   return (
//     <div className={clsx(classes && classes, styles.absoluteWrapStickyBox)}>
//       <div className={styles.detailCard}>
//         <div className={styles.listItemWrap}>
//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2223720590_hotel-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Property type</p>
//             </div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//               {property.type}
//             </div>
//           </div>

//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0be6720591_shape-2-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>{property.size ? "Property size" : "Square Footage"}</p>
//             </div>

//             {property.size && (
//               <div className={styles.wrapDetailValue}>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.size}
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   m²
//                 </div>
//               </div>
//             )}
//             {property.square_feet && (
//               <div className={styles.wrapDetailValue}>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.square_feet}
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   ft²
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2eeb72058f_home-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Building size</p>
//             </div>
//             <div className={styles.wrapDetailValue}>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property?.buildingSize ? property.buildingSize : "N/A"}
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 m²
//               </div>
//             </div>
//           </div>

//           <div className={styles.detailCardDivider}></div>

//           {property.beds !== undefined && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <div className={styles.icon}>
//                   <img
//                     src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defa1b972058c_hotel-bed-line.svg"
//                     loading="lazy"
//                     alt=""
//                     className={styles.image}
//                   />
//                 </div>
//                 <p className={styles.propertyDetailsLeft}>Bedrooms</p>
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property.beds || "Unspecified"}
//               </div>
//             </div>
//           )}

//           {property.baths !== undefined && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <div className={styles.icon}>
//                   <img
//                     src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def5d6c72058e_hand-sanitizer-line.svg"
//                     loading="lazy"
//                     alt=""
//                     className={styles.image}
//                   />
//                 </div>
//                 <p className={styles.propertyDetailsLeft}>Bathrooms</p>
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property.baths || "Unspecified"}
//               </div>
//             </div>
//           )}

//           {property.parking !== undefined && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <div className={styles.icon}>
//                   <img
//                     src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def366972058d_car-line.svg"
//                     loading="lazy"
//                     alt=""
//                     className={styles.image}
//                   />
//                 </div>
//                 <p className={styles.propertyDetailsLeft}>Parking</p>
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property?.parking ? property.parking : "Unknown"}
//               </div>
//             </div>
//           )}

//           {property.floors !== undefined && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <div className={styles.icon}>
//                   <img
//                     loading="lazy"
//                     alt=""
//                     className={styles.image}
//                     src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                   />
//                 </div>
//                 <p className={styles.propertyDetailsLeft}>Number of floors</p>
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property?.floors ? property.floors : "Unknown"}
//               </div>
//             </div>
//           )}

//           {/* Sales specific fields */}
//           {property.investmentSale && (
//             <>
//               <div className={styles.listItem}>
//                 <div className={styles.detailBlock}>
//                   <div className={styles.icon}>
//                     <img
//                       loading="lazy"
//                       alt=""
//                       className={styles.image}
//                       src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                     />
//                   </div>
//                   <p className={styles.propertyDetailsLeft}>Asset Type</p>
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.investmentSale.assetType || "N/A"}
//                 </div>
//               </div>

//               <div className={styles.listItem}>
//                 <div className={styles.detailBlock}>
//                   <div className={styles.icon}>
//                     <img
//                       loading="lazy"
//                       alt=""
//                       className={styles.image}
//                       src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                     />
//                   </div>
//                   <p className={styles.propertyDetailsLeft}>Investment Price</p>
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   ${property.investmentSale.price || "N/A"}
//                 </div>
//               </div>

//               <div className={styles.listItem}>
//                 <div className={styles.detailBlock}>
//                   <div className={styles.icon}>
//                     <img
//                       loading="lazy"
//                       alt=""
//                       className={styles.image}
//                       src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                     />
//                   </div>
//                   <p className={styles.propertyDetailsLeft}>Size Available</p>
//                 </div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                   {property.investmentSale.sizeAvailable || "N/A"}
//                 </div>
//               </div>

//               {/* Add other investment fields as needed */}
//             </>
//           )}

//           <div className={styles.detailCardDivider}></div>

//           {property?.askingPrice && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <p className={styles.propertyDetailsLeft}>Asking price</p>
//               </div>
//               <div className={styles.wrapDetailPrice}>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.askingPrice}</div>
//               </div>
//             </div>
//           )}
          
//           {property?.rates && (
//             <div className={styles.listItem}>
//               <div className={styles.detailBlock}>
//                 <p className={styles.propertyDetailsLeft}>Rent starts</p>
//               </div>
//               <div className={styles.wrapDetailPrice}>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
//                 <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.rates?.daily || property.rates?.monthly}</div>
//               </div>
//             </div>
//           )}

//           <div className="space-24" />
//           <div className="cta-wrap">
//             <a href="/contact" className="cta w-button text-center rounded-2xl bg-custom-gradient w-full">
//               Message us
//             </a>
//           </div>
//           <div className="space-12" />
//           <div className={styles.detailCardAuthor}>
//             <div className="detail-card-avatar">
//               <img
//                 src="/agent-1.webp"
//                 loading="lazy"
//                 sizes="75px"
//                 srcSet="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%25203-p-500.webp  500w,https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%203.webp  500w"
//                 alt=""
//                 className="image"
//               />
//             </div>
//             <div className="block">
//               <div className="paragraph-small text-bold">Real Estate Broker</div>
//               <p className="paragraph-small">Book an appointment with me!</p>
//               <div className="space-04" />
//               <a href="/contact" className="link-block-appointment w-inline-block">
//                 <p className="paragraph-small text-color-accent text-custom-gradient">
//                   Make an appointment
//                 </p>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailCard;


// import React from 'react';
// import styles from './propertyDetailCard.module.css'; // Import the CSS module
// import clsx from 'clsx';

// const DetailCard = ({property, classes}) => {
//   return (
//     <div className={clsx(classes && classes ,styles.absoluteWrapStickyBox)}>
//       <div className={styles.detailCard}>
//         <div className={styles.listItemWrap}>
//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2223720590_hotel-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Property type</p>
//             </div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//               {property.type}
//             </div>
//           </div>

//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0be6720591_shape-2-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//              <p className={styles.propertyDetailsLeft}>{property.size ? "Property size" :"Square Footage"}</p>
//             </div>
         
//           { property.size &&  <div className={styles.wrapDetailValue}>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//               {property.size}
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 m2
//               </div>
//             </div>}
//             { property.square_feet &&  
//             <div className={styles.wrapDetailValue}>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//               {property.square_feet}
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 m2
//               </div>
//             </div>}
//           </div>

//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2eeb72058f_home-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Building size</p>
//             </div>
//             <div className={styles.wrapDetailValue}>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 {property?.buildingSize ? property.buildingSize : "N/A"}
//               </div>
//               <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//                 m2
//               </div>
//             </div>
//           </div>

//           <div className={styles.detailCardDivider}></div>

//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defa1b972058c_hotel-bed-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Bedrooms</p>
//             </div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//              {property.beds}
//             </div>
//           </div>

//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def5d6c72058e_hand-sanitizer-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Bathrooms</p>
//             </div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//              {property.baths}
//             </div>
//           </div>

//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//                 <img
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def366972058d_car-line.svg"
//                   loading="lazy"
//                   alt=""
//                   className={styles.image}
//                 />
//               </div>
//               <p className={styles.propertyDetailsLeft}>Parking</p>
//             </div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//               {property?.parking ? property.parking : "UNKOWN"}
//             </div>
//           </div>
//           <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//               <img loading="lazy"
//                   alt=""
//                   className={styles.image}
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                  class="image"/>
//               </div>
//               <p className={styles.propertyDetailsLeft}>Number of floors</p>
//             </div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//               {property?.floors ? property.floors : "UNKOWN"}
//             </div>
//           </div>
//           {/* ---- */}
//         {property.rates &&  <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//               <div className={styles.icon}>
//               <img loading="lazy"
//                   alt=""
//                   className={styles.image}
//                   src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def993f72058b_stack-line.svg"
//                  class="image"/>
                
//               </div>
//               <p className={styles.propertyDetailsLeft}>Rates</p>
//             </div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
//               1
//             </div>
//           </div>}

//         <div className={styles.detailCardDivider}></div>

//       {property?.askingPrice &&  <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//             <p className={styles.propertyDetailsLeft}>Asking price</p>
//         </div>
//         <div className={styles.wrapDetailPrice}>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.askingPrice}</div>
//         </div>
//         </div>} 
//         {property?.rates &&  <div className={styles.listItem}>
//             <div className={styles.detailBlock}>
//             <p className={styles.propertyDetailsLeft}>Rent starts</p>
//         </div>
//         <div className={styles.wrapDetailPrice}>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>$</div>
//             <div className={`${styles.paragraphSmall} ${styles.textBold}`}>{property.rates?.dailly ? property.rates.dailly :property.rates?.monthly}</div>
//         </div>
//         </div>}
//           {/* ----- */}
//                 <div className="space-24" />
//                 <div className="cta-wrap">
//                 <a href="/contact" className="cta w-button text-center rounded-2xl bg-custom-gradient w-full">
//                     Message us
//                 </a>
//                 </div>
//                 <div className="space-12" />
//                 <div className={styles.detailCardAuthor}>
//                 <div className="detail-card-avatar">
//                     <img
//                     src="/agent-1.webp"
//                     loading="lazy"
//                     sizes="75px"
//                     srcSet="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%25203-p-500.webp  500w,https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%203.webp  500w"
//                     alt=""
//                     className="image"
//                     />
//                 </div>
//                 <div className="block">
//                     <div className="paragraph-small text-bold">Reale Etstate Broker</div>
//                     <p className="paragraph-small ">Book an appointment with me!</p>
//                     <div className="space-04" />
//                     <a href="/contact" className="link-block-appointemnt w-inline-block">
//                     <p className="paragraph-small text-color-accent text-custom-gradient">
//                         Make an appointment
//                     </p>
//                     </a>
//                 </div>
//           </div>
//         </div>
      
//       </div>
//     </div>
//   );
// };

// export default DetailCard;
