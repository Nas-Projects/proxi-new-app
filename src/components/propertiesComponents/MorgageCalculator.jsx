import React, { useState } from 'react';
import styles from './PropertyNeighborhoodDetails.module.css'; //
export default function MortgageCalculator() {
  const [contribution, setContribution] = useState('');
  const [ownContribution, setOwnContribution] = useState('');
  const [totalMortgageCost, setTotalMortgageCost] = useState(); // Example cost
  const [mortgageRate, setMortgageRate] = useState(); // Example rate
  const [buyingCosts, setBuyingCosts] = useState(); // Example buying costs
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [isOpen, setIsOpen] = useState(true); // State to track dropdown

  const calculateMortgage = (e) => {
    e.preventDefault();

    const contributionNum = parseFloat(contribution) || 0;
    const ownContributionNum = parseFloat(ownContribution) || 0;
    const mortgageAmount = totalMortgageCost - ownContributionNum - contributionNum;
    setTotalMortgageCost(741000)
    setMortgageRate(3.99)
    setBuyingCosts(5450)
    const monthlyInterestRate = mortgageRate / 100 / 12;
    const numberOfPayments = 30 * 12; // Assuming a 30-year mortgage

    const payment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    
    setMonthlyPayment(payment.toFixed(2));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[46em] lg:mx-6 text-left  lg:mx-12 px-4 lg:px-6">
      <div className="detail">
      <div className={styles.detailToggle} onClick={toggleDropdown}>
        <div className={styles.dropdownTitleWrap}>
          <h3 className={styles.headingThreePropertyDetail}>Morgage Calculator</h3>
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
          <div className="detail-tab bg-[#ffbed442] rounded-2xl">
            <div className="space-24" />
            <div className="payment-card !bg-[#ffbed442]">
              <div className="block">
                <h4>Calculate your mortgage rate</h4>
                <div className="space-08" />
                <p className="pt-2 pb-4 lg:pb-6">
                  Integer porta, nunc sit amet maximus venenatis, urna metus sollicitudin elit, in auctor lorem velit laoreet mi. Nunc luctus vel ante ut ullamcorper.
                </p>
              </div>
              <div className="payment-divider" />
              <div className="payment-form">
                <div className="form-block w-form">
                  <form
                    id="email-form-2"
                    name="email-form-2"
                    data-name="Email Form 2"
                    onSubmit={calculateMortgage}
                    aria-label="Email Form 2"
                  >
                    <div className="w-layout-grid form-input-grid payment">
                 
                      <div className="input-wrap payment">
                        <input
                          className="payment-text-field w-input-morgage px-6 focus:!ring-pink-500"
                          maxLength={256}
                          name="Contribution-2"
                          data-name="Contribution 2"
                          placeholder="Contribution"
                          type="text"
                          id="Contribution-2"
                          value={contribution}
                          onChange={(e) => setContribution(e.target.value)}
                        />
                      <div className="input-icon-morgage">
                        <div className="input-icon-text ">$</div>
                      </div>

                      </div>
                      <div className="input-wrap payment">
                        <input
                          className="payment-text-field w-input-morgage px-6 focus:!ring-pink-500"
                          maxLength={256}
                          name="Own-contribution-2"
                          data-name="Own Contribution 2"
                          placeholder="Own contribution"
                          type="text"
                          id="Own-contribution-2"
                          value={ownContribution}
                          onChange={(e) => setOwnContribution(e.target.value)}
                        />
                     <div className="input-icon-morgage">
                        <div className="input-icon-text ">$</div>
                      </div>

                      </div>
                    </div>
                    <div className="w-layout-grid rate-grid xl:!grid-cols-3">
                      <div className="block">
                        <p className="paragraph-small">Total mortgage cost</p>
                        <p className="text-bold">${totalMortgageCost}</p>
                      </div>
                      <div className="block">
                        <p className="paragraph-small">Rate of the mortgage</p>
                        <p className="text-bold">Fixed {mortgageRate}%</p>
                      </div>
                      <div className="block">
                        <p className="paragraph-small">Buying costs</p>
                        <p className="text-bold">${buyingCosts}</p>
                      </div>
                    </div>
                    <div className="space-24" />
                    <div className="cta-wrap rounded-xl">
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        className="cta w-button bg-custom-gradient rounded-xl"
                        defaultValue="Submit"
                      />
                    </div>
                  </form>
                  {monthlyPayment && (
                    <div className="result">
                      <p className="text-bold">Estimated Monthly Payment: ${monthlyPayment}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
