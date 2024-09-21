import React, { useState } from 'react';

export default function MortgageCalculator() {
  const [contribution, setContribution] = useState('');
  const [ownContribution, setOwnContribution] = useState('');
  const [totalMortgageCost, setTotalMortgageCost] = useState(741000); // Example cost
  const [mortgageRate, setMortgageRate] = useState(3.99); // Example rate
  const [buyingCosts, setBuyingCosts] = useState(5450); // Example buying costs
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = (e) => {
    e.preventDefault();

    // Convert input values to numbers
    const contributionNum = parseFloat(contribution) || 0;
    const ownContributionNum = parseFloat(ownContribution) || 0;

    // Calculate the mortgage amount
    const mortgageAmount = totalMortgageCost - ownContributionNum - contributionNum;

    // Monthly interest rate
    const monthlyInterestRate = mortgageRate / 100 / 12;
    const numberOfPayments = 30 * 12; // Assuming a 30-year mortgage

    // Monthly payment calculation
    const payment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    setMonthlyPayment(payment.toFixed(2)); // Set the result to 2 decimal places
  };

  return (
    <div className="max-w-[50em] text-left mx-4 lg:mx-6">
      <div className="detail">
        <div className="detail-toogle">
          <div className="dropdown-title-wrap">
            <h3 className="heading-three-property-detail text-left">Monthly payments</h3>
            <div className="dropdown-icon-wrap">
              <div className="dropdown-text">
                <div className="show-text" style={{ opacity: 0 }}>
                  <div className="text-bold">Show</div>
                </div>
                <div className="hide-text" style={{ opacity: 1 }}>
                  <div className="text-bold">Hide</div>
                </div>
              </div>
              <div className="dropdown-icon" style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-180deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                <img
                  src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def7ff5720570_arrow_drop_down.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="detail-tab bg-[#ffbed442]" style={{ display: "block", opacity: 1 }}>
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
                    <div className="input-wrap payment w-select">
                      <input
                        className="payment-text-field w-input"
                        maxLength={256}
                        name="Contribution-2"
                        data-name="Contribution 2"
                        placeholder="Contribution"
                        type="text"
                        id="Contribution-2"
                        value={contribution}
                        onChange={(e) => setContribution(e.target.value)}
                      />
                    </div>
                    <div className="input-wrap payment">
                      <input
                        className="payment-text-field w-input w-select px-6 focus:!ring-pink-500"
                        maxLength={256}
                        name="Own-contribution-2"
                        data-name="Own Contribution 2"
                        placeholder="Own contribution"
                        type="text"
                        id="Own-contribution-2"
                        value={ownContribution}
                        onChange={(e) => setOwnContribution(e.target.value)}
                      />
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
      </div>
    </div>
  );
}
