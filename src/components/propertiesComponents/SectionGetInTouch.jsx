export default function SectionGetInTouch(){
 return (<section className="relative">
          <div className="bg-white py-12  lg:py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                  <div>
                    <h2 className="mt-9 text-3xl font-bold tracking-tight text-gray-900">Contacts</h2>
                    <p className="text-lg mt-4 leading-7 text-gray-600 px-4 ">
                    Get in touch with us. We&apos;re here to help with expert guidance and personalized support.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-gray-50 p-10">
                      <h3 className="text-2xl font-semibold leading-7 text-gray-900">Front Desk</h3>
                      <dl className="mt-3 space-y-1 text-lg leading-6 text-gray-600">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>
                            <a href="mailto:collaborate@proxyre.io" className="font-semibold text-pink-600">
                            Hello@proxyre.io
                            </a>
                          </dd>
                        </div>
                        <div className="mt-1">
                        <a href="tel:+1347.987.0210" className="hover:text-gray-900">
                          +1 347.987.0210
                        </a>
                          {/* <dt className="sr-only">Phone number</dt>
                          <dd>+1 (347).987.0210</dd> */}
                        </div>
                      </dl>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-10">
                      <h3 className="text-2xl font-semibold leading-7 text-gray-900">Join our team</h3>
                      <dl className="mt-3 space-y-1 text-lg leading-6 text-gray-600">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>
                            <a href="mailto:Hello@proxyre.io" className="font-semibold text-pink-600">
                              hello@proxyre.io
                            </a>
                          </dd>
                        </div>
                        <div className="mt-1">
                          <dt className="sr-only">Phone number</dt>
                          {/* <dd>1 347.987.0210</dd> */}
                          <a href="tel:+1347.987.0210" className="hover:text-gray-900">
                              +1 347.987.0210
                            </a>
                        </div>
                      </dl>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      }
      
