import React, { useState } from 'react';
import styles from './PropertyNeighborhoodDetails.module.css'; // Import the CSS module
import clsx from 'clsx';

const DetailDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:max-w-[35vw]">
      <div className={styles.detailToggle} onClick={toggleDropdown}>
        <div className={styles.dropdownTitleWrap}>
          <h3 className={styles.headingThreePropertyDetail}>Neighbourhood</h3>
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
        <div className={styles.detailTab}>
          <div className={styles.space24}></div>
       {/* EL -- STARTS */}
         <div className={clsx(`${'flex inline-flex gap-x-4 lg:gap-x-6'}`)}>
            <div className="gap-x-2">
              <div className='flex inline-flex'>
                <img className="h-6 w-6 mr-4"
                  src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def0a30720575_bus-line.svg"
                  loading="lazy"
                  alt=""
                  
                />
                <div className='font-[600] !flex'>Bus stop</div>
              </div>
            </div>
            <div className={styles.tableCell}>
              <img
                src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defcb2d720577_Arrow.svg"
                loading="lazy"
                alt=""
                className={styles.iconRegular}
              />
            </div>
            <div className={styles.tableCell}>
              <div className={styles.wrapMeters}>
                <p>1312.34</p>
                <p>Feet</p>
              </div>
            </div>
            <div className={styles.tableCell}>
              <img
                src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defcb2d720577_Arrow.svg"
                loading="lazy"
                alt=""
                className={styles.iconRegular}
              />
            </div>
            <div className={`${styles.tableCell} ${styles.alignRight}`}>
              <div className={styles.wrapMinutesWalk}>
                <p>5</p>
                <p>mins walk</p>
              </div>
            </div>
          </div>
          {/* ----El end  */}
          <div  className='flex inline-flex  gap-x-4'>
            <div className="gap-x-2">
              <div className='flex inline-flex'>
                <img
                  src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defe75e72058a_train-line.svg"
                  loading="lazy"
                  alt=""
                  className="h-6 w-6 mr-4"
                  />
                <div className={styles.textSemibold}>Train stop</div>
              </div>
            </div>
            <div className={styles.tableCell}>
              <img
                src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defcb2d720577_Arrow.svg"
                loading="lazy"
                alt=""
                className={styles.iconRegular}
              />
            </div>
            <div className={styles.tableCell}>
              <div className={styles.wrapMeters}>
                <p>700</p>
                <p>meters</p>
              </div>
            </div>
            <div className={styles.tableCell}>
              <img
                src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defcb2d720577_Arrow.svg"
                loading="lazy"
                alt=""
                className={styles.iconRegular}
              />
            </div>
            <div className={`${styles.tableCell} ${styles.alignRight}`}>
              <div className={styles.wrapMinutesWalk}>
                <p>10</p>
                <p>mins walk</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailDropdown;

