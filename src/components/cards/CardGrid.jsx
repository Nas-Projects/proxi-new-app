import React from 'react';
import Card from './Card'; // Import the reusable Card component
const sectionArray = [
    {
      title: "View our properties",
      description: "Become a member and join a growing community of people looking for building. Share your stories and be paid.",
      href: '/#',
      cta: "View now",
      icon: "button",
      btnColor: "bg-custom-gradient",
      btntxtColor:"!text-white"

    },
    {
      title: "Mail us",
      description: "No need to filling forms. Jump on your email and mail us with whatever you need. We are here to help you.",
      href: "/contact",
      cta: "info@proxy.com",
      icon: "arrow-topblue"
    },
    // {
    //   title: "Call us",
    //   description: "Feel free to call us in working hours Mon - Fri (8:00 - 16:00 EST). Our team will be happy to help answer your questions.",
    //   cta: "+1 776 336 733",
    //   // icon: "arrow-topbWhite",
    //   bg:"bg-custom-gradient",
    //   href:'/contact',
    //   // btnColor:"!bg-white",
    //   txtColor:"!text-white",
    //   // btntxtColor:"!text-white"
      
    // }
  ];
  
const CardGrid = () => {
  return ( <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
       
            <div class="bg-white   text-left shadow-md rounded-md p-6"><div class="flex flex-col items-start"><h2 class="text-xl font-bold mb-2">View our properties</h2><p class="text-base mb-4">Become a member and join a growing community of people looking for building. Share your stories and be paid.</p><a class="bg-custom-gradient card-link  underline" href="/#"><button class=" !text-white py-4 px-8">View now</button></a></div></div>
            <div class="bg-white   text-left shadow-md rounded-md p-6"><div class="flex flex-col items-start"><h2 class="text-xl font-bold mb-2">Mail us</h2><p class="text-base mb-4">No need to filling forms. Jump on your email and mail us with whatever you need. We are here to help you.</p><a class="text-blue-500 card-link  underline" href="/contact"><img src="/arrow-topblue.svg" loading="lazy" alt="" class="icon-cta"/></a></div></div>
                  
          <div class="bg-custom-gradient  !text-white text-left shadow-md rounded-md p-6 mt-2 lg:mt-0"><div class="flex flex-col items-start"><h2 class="text-xl font-bold mb-2 text-white">Call us</h2><p class="text-base mb-4">Feel free to call us in working hours Mon - Fri (8:00 - 16:00 EST). Our team will be happy to help answer your questions.</p><a class="text-blue-500 card-link  underline" href="/contact"><a class="inlne-flex" href="/contact"><button class="!text-white  py-4 px-8">+1 776 336 733</button>;</a></a></div></div>
      </div>
  
  );
};

export default CardGrid;




    {/* {sectionArray.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          href={item.href}
          cta={item.cta}
          icon={item.icon}
          bg={item?.bg ? item.bg : ""}
          btnColor={item.btnColor ? item.btnColor : ""}
          txtColor={item.txtColor ? item.txtColor : ""}
          btntxtColor={item.btntxtColor ? item.btntxtColor : ""}
        />
      ))} */}