export default function SectionTestimonial() {
    return (
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
              className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <div className="flex gap-x-4 text-white">
                <img alt="" src="/assets/contact.png" 
              className="h-12 w-12 rounded-full" />
              <span className="text-xl py-2">Grassroot Move Co</span>
                </div>
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <p>
                    “Working with Proxy has been a game-changer for my real estate investments. Their innovative use of blockchain technology has streamlined the buying process and ensured transparency every step of the way. I feel secure knowing that my transactions are backed by a reliable and efficient system. The team at Proxy truly understands the market and provides exceptional support, making my experience smooth and rewarding.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Judith Sailor</div>
                  <div className="mt-1">CEO of Grassroot Move Co</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <TestimonialSection2/>
      </div>
    )
  }
  



  const TestimonialSection2 = () => {
    return (
    <div className="grid grid-cols-2  customers-halves my-12 mx-4  lg:mx-8">
    <div id="w-node-texstimonial" className="px-8 limit-560 customers-limit py-16 lg:px-12 lg:py-24 xl:py-32"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d"
      }}
   
    >
      <h3>Made for real people</h3>
      <p className="paragraph-big">
      At Proxy, we are committed to transforming lives by matching the perfect homes with the ideal tenants.
      </p>
      <div className="group cta-link-wrap py-4 xm:py-8 lg:py-12 ">
        <a href="#" className=" cta blue-link w-inline-block bg-custom-gradient">
          <div className="group-hover:!text-white">Why Nordi Living</div>
          <img
            src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defcec7720558_CTA%20Icon.svg"
            loading="lazy"
            alt=""
            className="icon-cta"
          />
        </a>
      </div>
    </div>
    <div
      id="w-node-_12b25364-80e8-ad15-598c-20bb85ec3e90-327204e2"
      data-w-id="12b25364-80e8-ad15-598c-20bb85ec3e90"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d"
      }}
      className="customer-image-wrap"
    >
      <div
        id="w-node-_7ad3d09c-758b-689a-c101-29823b540691-327204e2"
        className="customer-image"
      >
        <img
          src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2b80720537_Real%20People%201.webp"
          loading="lazy"
          sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, 560px"
          srcSet="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2b80720537_Real%2520People%25201-p-500.jpg  500w,https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2b80720537_Real%2520People%25201-p-800.jpg  800w,https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2b80720537_Real%2520People%25201-p-1080.jpg  1080w,https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2b80720537_Real%20People%201.webp  1120w"
          alt=""
          className="image"
        />
      </div>
      <div
        data-w-id="efbb0216-d027-fdbb-0f17-10daef8c5a03"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d"
        }}
        className="customer-image-card"
      >
        <p className="paragraph-big text-bold">
         Proxy really changed our lifes
        </p>
        <p>
        Proxy has truly transformed our lives. With the help of their dedicated team, we found an amazing house at an unbeatable price—something we couldn’t find anywhere else..
        </p>
        <a href="/blog" className="bg-custom-gradient cta blue-link w-inline-block">
          <div>Read Study</div>
        </a>
      </div>
    </div>
    </div>
   )
  
  }