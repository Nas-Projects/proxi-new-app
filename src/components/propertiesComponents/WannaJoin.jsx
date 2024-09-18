export default function WannaJoin() {
    return <section className="px-[2%] md:min-h-[750px] bg-white mt-4 sm:mt-8 lg:mt-24  ss:min-h-[600px] 
    min-h-[850px] mx-auto lg:!mx-[4%] flex items-center relative joinSection">
    <div className="w-full block lg:grid lg:grid-cols-2">
     <div className="items-center  mx-auto max-w-[86rem] px-4 lg:p-8 xl:p-12 ">
       <div
         className="flex items-center w-full md:mb-16 ss:mb-8  mb-16"
         style={{ opacity: 1, transform: "none", willChange: "auto" }}
       >
         <h1 className="text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
           Want to join the team?
         </h1>
         <div
           className="flex-1 relative items-center justify-center"
           style={{ opacity: 1, transform: "none", willChange: "auto" }}
         >
           <div className="bg-main w-full h-[2px]" />
         </div>
       </div>
       <div
         className="w-full"
         style={{ opacity: 1, transform: "none", willChange: "auto" }}
       >
         <div
           className="flex1 flex justify-center items-start flex-col"
           style={{ opacity: 1, transform: "none", willChange: "auto" }}
         >
           <div className="joinContainer -mt-4 xl:-mt-12">
             <div className="joinText text-left">
               <p>
                 Join our dynamic, team and unleash your full earning potential in
                 a company that's revolutionizing real estate. Our cutting-edge
                 technology ensures you’re always ahead of the curve, and our
                 lucrative referral program offers additional income opportunities.
                 Don't just work in real estate—thrive in it. Join us today and
                 transform your career!
               </p>
             </div>
             <a href="/join" className="pt-12">
               <button className="grow4 bg-custom-gradient buttonhalf md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5 ss:py-3 py-3 md:px-24 ss:px-3 px-3 text-white  md:rounded-[6px] ss:rounded-[3px] rounded-[3px]  font-medium font-manier cursor-pointer">
                 Join Us
               </button>
             </a>
           </div>
         </div>
       </div>
     </div>
     <div class="w-full">
        <image src="/public/IMG_8204.png" alt="founder"/></div>
     </div> 
   </section>
   
}