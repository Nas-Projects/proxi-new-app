export default function MorgageCalculator() {
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
        <div
          className="dropdown-icon"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-180deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        >
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
        <p className="pt-2 pb-4  lg:pb-6">
          Integer porta, nunc sit amet maximus venenatis, urna metus
          sollicitudin elit, in auctor lorem velit laoreet mi. Nunc luctus vel
          ante ut ullamcorper.
        </p>
      </div>
      <div className="payment-divider" />
      <div className="payment-form">
        <div className="form-block w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            method="get"
            data-wf-page-id="63c93770199deff77b7204e9"
            data-wf-element-id="a763d88d-605b-5960-fb19-85b22eb0fce2"
            aria-label="Email Form 2"
          >
            <div className=" w-layout-grid form-input-grid payment">
              <div className="input-wrap payment .w-select">
                <input
                  className="payment-text-field w-input"
                  maxLength={256}
                  name="Contribution-2"
                  data-name="Contribution 2"
                  placeholder="Contribution"
                  type="text"
                  id="Contribution-2"
                />
                {/* <div className="input-icon">
                  <div className="input-icon-text">$</div>
                </div> */}
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
                />
                {/* <div className="input-icon">
                  <div className="input-icon-text ">$</div>
                </div> */}
              </div>
            </div>
            <div className="w-layout-grid rate-grid xl:!grid-cols-3">
              <div
                id="#w_node_ "
                className="block"
              >
                <p className="paragraph-small">Total mortgage cost</p>
                <p className="text-bold">$741.000</p>
              </div>
              <div
                id="w-node-a763d88d-605b-5960-fb19-85b22eb0fcf4-7b7204e9"
                className="block"
              >
                <p className="paragraph-small">Rate of the mortgage</p>
                <p className="text-bold">Fixed 3,99%</p>
              </div>
              <div
                id="w-node-a763d88d-605b-5960-fb19-85b22eb0fcf9-7b7204e9"
                className="block"
              >
                <p className="paragraph-small">Buying costs</p>
                <p className="text-bold">$5.450</p>
              </div>
            </div>
            <div className="space-24" />
            <div className="cta-wrap rouded-xl">
              <input
                type="submit"
                data-wait="Please wait..."
                className="cta w-button bg-custom-gradient rouded-xl"
                defaultValue="Submit"
              />
            </div>
          </form>
          <div
            className="w-form-done"
            tabIndex={-1}
            role="region"
            aria-label="Email Form 2 success"
          >
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div
            className="w-form-fail"
            tabIndex={-1}
            role="region"
            aria-label="Email Form 2 failure"
          >
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}