import React from 'react';
import Card from './Card'; // Import the reusable Card component
const sectionArray = [
    {
      title: "View our properties",
      description: "Become a member and join a growing community of people looking for building. Share your stories and be paid.",
      href: '/properties',
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
    {
      title: "Call us",
      description: "Feel free to call us in working hours Mon - Fri (8:00 - 16:00 EST). Our team will be happy to help answer your questions.",
      cta: "+1 776 336 733",
      icon: "arrow-topblue",
      bg:"bg-custom-gradient",
      txtColor:"text-white"
    }
  ];
  
const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sectionArray.map((item, index) => (
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
      ))}
    </div>
  );
};

export default CardGrid;



