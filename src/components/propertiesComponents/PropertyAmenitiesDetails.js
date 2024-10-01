import React, { useState } from 'react';
import styles from './PropertyNeighborhoodDetails.module.css'; // Import the CSS module
import clsx from 'clsx';
export const amenitiesData = [
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def62e8720573_lightbulb-flash-line.svg',
    alt: 'Low energy consumption',
    label: 'lowEnergyConsumption',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def36a2720572_leaf-line.svg',
    alt: 'Close to nature',
    label: 'closeToNature',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199deffc30720576_paint-brush-line.svg',
    alt: 'Recently renovated',
    label: 'recentlyRenovated',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/your-bus-stop-icon.svg', // Replace with the actual URL
    alt: 'Bus stop nearby',
    label: 'busStopNearby',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/your-accessible-icon.svg', // Replace with the actual URL
    alt: 'Accessible',
    label: 'accessible',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/your-shopping-centre-icon.svg', // Replace with the actual URL
    alt: 'Shopping centre nearby',
    label: 'shoppingCentreNearby',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def62b1720589_book-open-line.svg',
    alt: 'Primary school',
    label: 'primarySchool',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def7f62720578_shopping-cart-line.svg',
    alt: 'Grocery',
    label: 'grocery',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0a30720575_bus-line.svg',
    alt: 'Bus stop',
    label: 'busStop',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defe75e72058a_train-line.svg',
    alt: 'Train stop',
    label: 'trainStop',
  },
];

export const  amenitiesDataForForm = [
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def62e8720573_lightbulb-flash-line.svg',
    alt: 'Low energy consumption',
    label: 'Low energy consumption',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def36a2720572_leaf-line.svg',
    alt: 'Close to nature',
    label: 'Close to nature',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def36a2720572_paint-brush-line.svg',
    alt: 'Recently renovated',
    label: 'Recently renovated',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/your-bus-stop-icon.svg', // Replace with the actual URL
    alt: 'Bus stop nearby',
    label: 'Bus stop nearby',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/your-accessible-icon.svg', // Replace with the actual URL
    alt: 'Accessible',
    label: 'Accessible',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/your-shopping-centre-icon.svg', // Replace with the actual URL
    alt: 'Shopping centre nearby',
    label: 'Shopping centre nearby',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def62b1720589_book-open-line.svg',
    alt: 'Primary school',
    label: 'Primary school',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def7f62720578_shopping-cart-line.svg',
    alt: 'Grocery',
    label: 'Grocery',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0a30720575_bus-line.svg',
    alt: 'Bus stop',
    label: 'Bus stop',
  },
  {
    src: 'https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defe75e72058a_train-line.svg',
    alt: 'Train stop',
    label: 'Train stop',
  },

];
export const amenities = [
  "Wifi",
  "Full kitchen",
  "Washer & Dryer",
  "Free Parking",
  "Hot Tub",
  "24/7 Security",
  "Wheelchair Accessible",
  "Elevator Access",
  "Dishwasher",
  "Gym/Fitness Center",
  "Air Conditioning",
  "Balcony/Patio",
  "Smart TV",
  "Coffee Maker"
];

const PropertyAmenitiesDetails = ({ property }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  console.log("PROPERTY_AMENITIES is", property.amenities);

  return (
    <div className={clsx("lg:max-w-[38em] lg:max-w-[42vw] mx-4 mt-6 lg:mt-10", isOpen ? 'mb-[17em] bg-white/70 rounded-[30px]' : 'mb-4', "px-4 lg:pr-12")}>
      <div className={styles.detailToggle} onClick={toggleDropdown}>
        <div className={styles.dropdownTitleWrap}>
          <h3 className={styles.headingThreePropertyDetail}>Amenities</h3>
          <div className={styles.dropdownIconWrap}>
            <div className={styles.dropdownText}>
              <div className={`${styles.showText} ${isOpen ? styles.hidden : ''}`}>
                <div className={styles.textBold}>Show</div>
              </div>
              <div className={`${styles.hideText} ${isOpen ? '' : styles.hidden}`}>
                <div className={styles.textBold}>Hide</div>
              </div>
            </div>
            <div className={`${styles.dropdownIcon} ${isOpen ? styles.rotate : ''}`}>
              <img
                src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def7ff5720570_arrow_drop_down.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={clsx(isOpen && 'mb-[17em] bg-white', styles.detailTab)}>
          <div className={styles.space24}>
            <div  className={clsx(isOpen && 'z-30 p-[0.5em] pb-4 bg-white rounded-[30px]', 'detail-tag-wrap flex')}>
              {amenitiesData
                .filter(amenity => property.amenities.includes(amenity.label))
                .map((amenity, index) => (
                  <div key={index} className="detail-tag">
                    <img
                      src={amenity.src}
                      loading="lazy"
                      alt={amenity.alt}
                      className="icon-regular"
                    />
                    <div>{amenity.label}</div>
                  </div>
                ))}
              {property.amenities.length === 0 && (
                <div>No amenities available.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyAmenitiesDetails;