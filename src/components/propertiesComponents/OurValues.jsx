// import Image from "next/image";
import BlurImage from "../blur-image";
// import { motion, } from 'framer-motion';
// import { fadeIn } from '@/utils/motion';


export const values = [
        {
          icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path></svg>`,
          title: "Customer Service",
          body: "At Proxy, outstanding customer service is our priority. We are dedicated to providing personalized support and addressing your needs promptly. Your satisfaction is our ultimate goal."
        },
        {
          icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"></path></svg>`,
          title: "Collaboration",
          body: "Effective collaboration fuels our success. Our team works closely with you, blending diverse skills and ideas to achieve shared goals. Together, we turn your vision into reality."
        },
        {
          icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M294 240s-21.51 16-38 16-38-16-38-16"></path></svg>`,
          title: "Innovation",
          body: "Innovation is our driving force. We continuously explore new solutions and creative approaches to stay ahead. By embracing change, we deliver advanced and effective results."
        },
        {
          icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96zm0 0v288"></path></svg>`,
          title: "Industry Knowledge",
          body: "We prioritize continuous learning and industry knowledge. Our team stays current with trends and best practices to provide you with accurate insights. Empowering you with the latest expertise is our mission."
        },
        {
          icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h112l48-96 48 160 48-96 32 64h128"></path></svg>`,
          title: "Indomitable Spirit",
          body: "Our indomitable spirit drives us forward. With unwavering tenacity, we tackle challenges and push through obstacles to achieve success. We are committed to delivering exceptional results, no matter the difficulty."
        },
        {
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h112l48-96 48 160 48-96 32 64h128"></path></svg>`,
            title: "Blockchain",
            body: "Our indomitable spirit drives us forward. With unwavering tenacity, we tackle challenges and push through obstacles to achieve success. We are committed to delivering exceptional results, no matter the difficulty."
          }
      ];

      export default function OurValues(){
 
      const ValuesSection = () => {
        return (
          <section className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] mx-auto flex items-center relative valuesSection">
            <div className="items-center w-full mx-auto max-w-[86rem]">
              <div className="md:flex items-center w-full -mb-6">
                 <div class="section-header text-mainText opacity-1">
                    <div data-w-id="c61ae90e-5b42-2ae8-3af4-27a1254fdfcd"
                        className="title-wrap pb-12 max-w-xl lg:max-w-[34vw]"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }} > 
                      <h1 class="!uppercase !text-left text-center py-4 md:pt-8 md:pb-4 lg:pt-4 
                            lg:pb-[-4em] max-[1700px]:text-[63px] text-custom-gradient">
                              Our Values
                        </h1>
                      </div>
                   </div>
               </div>
            <div style={{ opacity: 1 }} className="max-[500px]:h-[320px] max-[500px]:mb-[-8em]  feature-video w-background-video w-background-video-atom">
                <BlurImage 
                  src="/happy_customers_ezg.gif"
                    height="1080"
                  width="1920"
                  autoPlay=""
                  loop=""
                  style={{
                    backgroundImage:
                      'url("/happy_customers_ezg")'
                  }}  data-object-fit="cover"
                />
              </div>

        <div className="mx-auto mt-6 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 xl:mt-20 lg:mt-4 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <article key={value.id}
              className="!group hover:border border-pink-400 relative isolate flex flex-col overflow-hidden rounded-2xl  px-8 pb-0">
                <div className="inline-flex gap-x-4">
                    <div className="mt-[1em] gorup-hover:text-pink-500" dangerouslySetInnerHTML={{ __html: value.icon }} />
                    <h3 className="mt-3 !text-left mainText !text-normal  !text-[22px] leading-[2.1rem]  xl:!text-[23px] font-semibold leading-6 text-white">
                        <a href={value?.href}>
                        <span className="!text-left absolute inset-0" />
                        {value.title}
                        </a>
                    </h3>
                </div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
               <p className="text-left pb-4 lg:pb-4  xl:pb-6 flex">{value.body}</p>
            </article>
          ))}
          </div>
            </div>
          </section>
        );
      };
    return (
         <section className="sm:px-16 -mt-12  max-w-[99vw] mx-auto">  
           <div className="container px-[4%] lg:px-[8%]  pt-14 md:pt-30 pb-90px">
            <ValuesSection/>
          </div>
        </section>
        )
    
  
}

