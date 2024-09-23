import React from 'react';
import styles from './propertyDetailCard.module.css'; // Import the CSS module
import clsx from 'clsx';

const DetailCard = ({ property, classes }) => {
  console.log("PROPERTY ", property) 
  return (
    <div className={clsx(classes && classes, styles.absoluteWrapStickyBox)}>
      <div className={styles.detailCard}>
        <div className={styles.listItemWrap}>
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
              {property.type}
            </div>
          </div>

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
              <p className={styles.propertyDetailsLeft}>{property.size ? "Property size" : "Square Footage"}</p>
            </div>

            {property.size && (
              <div className={styles.wrapDetailValue}>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.size}
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  m²
                </div>
              </div>
            )}
            {property.square_feet && (
              <div className={styles.wrapDetailValue}>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.square_feet}
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  ft²
                </div>
              </div>
            )}
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
              <p className={styles.propertyDetailsLeft}>Building size</p>
            </div>
            <div className={styles.wrapDetailValue}>
              <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                {property?.buildingSize ? property.buildingSize : "N/A"}
              </div>
              <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                m²
              </div>
            </div>
          </div>

          <div className={styles.detailCardDivider}></div>

          {property.beds !== undefined && (
            <div className={styles.listItem}>
              <div className={styles.detailBlock}>
                <div className={styles.icon}>
                  <img
                    src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defa1b972058c_hotel-bed-line.svg"
                    loading="lazy"
                    alt=""
                    className={styles.image}
                  />
                </div>
                <p className={styles.propertyDetailsLeft}>Bedrooms</p>
              </div>
              <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                {property.beds || "Unspecified"}
              </div>
            </div>
          )}

          {property.baths !== undefined && (
            <div className={styles.listItem}>
              <div className={styles.detailBlock}>
                <div className={styles.icon}>
                  <img
                    src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def5d6c72058e_hand-sanitizer-line.svg"
                    loading="lazy"
                    alt=""
                    className={styles.image}
                  />
                </div>
                <p className={styles.propertyDetailsLeft}>Bathrooms</p>
              </div>
              <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                {property.baths || "Unspecified"}
              </div>
            </div>
          )}

          {property.parking !== undefined && (
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
                <p className={styles.propertyDetailsLeft}>Parking</p>
              </div>
              <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                {property?.parking ? property.parking : "Unknown"}
              </div>
            </div>
          )}

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

          {/* Sales specific fields */}
          {property.investmentSale && (
            <>
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
                  <p className={styles.propertyDetailsLeft}>Asset Type</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.investmentSale.assetType || "N/A"}
                </div>
              </div>

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
                  <p className={styles.propertyDetailsLeft}>Investment Price</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  ${property.investmentSale.price || "N/A"}
                </div>
              </div>

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
                  <p className={styles.propertyDetailsLeft}>Size Available</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.investmentSale.sizeAvailable || "N/A"}
                </div>
              </div>

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
                  <p className={styles.propertyDetailsLeft}>Number of Units</p>
                </div>
                <div className={`${styles.paragraphSmall} ${styles.textBold}`}>
                  {property.investmentSale.numberOfUnits || "N/A"}
                </div>
              </div>

              {/* Add other investment fields as needed */}
            </>
          )}

          <div className={styles.detailCardDivider}></div>

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
            <a href="/contact" className="cta w-button text-center rounded-2xl bg-custom-gradient w-full">
              Message us
            </a>
          </div>
          <div className="space-12" />
          <div className={styles.detailCardAuthor}>
            <div className="detail-card-avatar">
              <img
                src="/agent-1.webp"
                loading="lazy"
                sizes="75px"
                srcSet="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%25203-p-500.webp  500w,https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deff410720535_team%203.webp  500w"
                alt=""
                className="image"
              />
            </div>
            <div className="block">
              <div className="paragraph-small text-bold">Real Estate Broker</div>
              <p className="paragraph-small">Book an appointment with me!</p>
              <div className="space-04" />
              <a href="/contact" className="link-block-appointment w-inline-block">
                <p className="paragraph-small text-color-accent text-custom-gradient">
                  Make an appointment
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;



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
