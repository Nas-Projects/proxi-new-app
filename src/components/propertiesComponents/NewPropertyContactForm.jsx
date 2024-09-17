import React from 'react';
import styles from './NewPropertyContactForm.module.css'; // Import the CSS module

const NewPropertyContactForm = () => {
  return (
    <div className={`${styles.section} ${styles.backgroundBlue}`}>
      <div className={styles.mainContainer}>
        <div className={styles.contactBlock}>
          <div className={styles.contactFormWrap}>
            <div className={styles.formTitleWrap}>
              <h5 className={styles.textColorAccent}>Contact Agent</h5>
              <div className={styles.space08}></div>
              <h3>Property request</h3>
              <div className={styles.limit360}>
                <p className={styles.paragraphBig}>
                  Avg. responding time is 8 working hours. Our working time Mon - Fri (8:00 - 16:00)
                </p>
              </div>
            </div>
            <div className={styles.formBlock}>
              <form
                id="email-form"
                name="email-form"
                method="get"
                aria-label="Email Form"
              >
                <div className={styles.formInputGrid}>
                  <div className={styles.inputWrap}>
                    <input className={`${styles.textField} ${styles.wInput}`} placeholder="Name" type="text" id="name-2" />
                  </div>
                  <div className={styles.inputWrap}>
                    <input className={`${styles.textField} ${styles.wInput}`} placeholder="Surname" type="text" id="Surname-2" />
                  </div>
                </div>
                <div className={styles.inputWrap}>
                  <input className={`${styles.textField} ${styles.wInput}`} placeholder="Email address" type="email" id="Email-2" />
                </div>
                <div className={styles.inputWrap}>
                  <input className={`${styles.textField} ${styles.wInput}`} placeholder="Phone Number" type="tel" id="Phone-Number-2" />
                </div>
                <div className={styles.inputWrap}>
                  <textarea placeholder="Example Text" id="field-2" name="field-2" className={`${styles.textArea} ${styles.wInput}`}></textarea>
                </div>
                <div className={styles.checkboxWrap}>
                  <label className={`${styles.wCheckbox} ${styles.checkboxField}`}>
                    <div className={`${styles.wCheckboxInput} ${styles.wCheckboxInputCustom} ${styles.checkbox}`}></div>
                    <input type="checkbox" id="checkbox-2" name="checkbox-2" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} />
                    <span className={styles.checkboxLabel} htmlFor="checkbox-2">
                      By clicking on “Send message” you agree with our Terms and Conditions, meaning you agree to get back in touch with you based on provided information.
                    </span>
                  </label>
                </div>
                <div className={styles.ctaWrap}>
                  <input type="submit" className={`${styles.cta} ${styles.wButton}`} value="Contact Agent" />
                </div>
              </form>
              <div className={styles.wFormDone} role="region" aria-label="Email Form success">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className={styles.wFormFail} role="region" aria-label="Email Form failure">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className={styles.contactWrap}>
            <div className={styles.contactImage}>
              <img src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defc974720559_Contact%20Image.webp" loading="lazy" alt="" className={styles.image} />
            </div>
            <div className={styles.contactQuoteWrap}>
              <p className={styles.quoteText}>Meet Anne</p>
              <p className={styles.paragraphSmall}>
                “As your agent I am ready to help you find your future living. There are no barriers. I will find your dream house for you.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPropertyContactForm;
