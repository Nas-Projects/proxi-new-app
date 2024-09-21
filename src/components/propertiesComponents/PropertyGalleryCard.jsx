// components/Gallery.js
import React from 'react';
import styles from './PropertyGalleryCard.module.css';

const PropertyGalleryCard = ({ images }) => {
  return (
    <div className={styles.galleryWrap}>
      <div  className={styles.galleryButtonWrap}>
        <div className={styles.ctaSecondary}>
          <img
            src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def517b72056f_search.svg"
            loading="lazy"
            alt=""
            className={styles.iconSmall}
          />
           <div className="gallery-button-wrap">
        <div className="cta secondary">
            <img
            src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def517b72056f_search.svg"
            loading="lazy"
            alt=""
            className="icon-small"
            />
            <div>View gallery</div>
        </div>
        </div>
        </div>
      </div>
      <div className={styles.listWrapperCmsGallery}>
        {images.length ? (
          <div role="list" className={styles.listCmsGallery}>
            {images.map((image, index) => (
              <div role="listitem" className={styles.wDynItem} key={index}>
                <div className={styles.detailGalleryCell}>
                  <a
                    href="#"
                    className={styles.lightboxGallerySmall}
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <img
                      loading="lazy"
                      alt=""
                      src={image.src}
                      sizes={image.sizes}
                      srcSet={image.srcSet}
                      className={styles.image}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.wDynEmpty}>No items found.</div>
        )}
      </div>
    </div>
  );
};

export default PropertyGalleryCard;
