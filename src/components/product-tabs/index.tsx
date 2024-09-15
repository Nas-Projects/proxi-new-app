"use client";

import React, { useState, useEffect } from "react"; // Import the 'React' module

const ProductTabs = ({ execution = [], equipments }) => {
  const [accordionItems, setAccordionItems] = useState([]);

  useEffect(() => {
    if (execution.length > 0) {
      setAccordionItems(execution.map((item) => ({ ...item, isOpen: false })));
    }
  }, [execution]);

  const handleAccordionItem = (index) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  console.log("PRODUCT_TAB", execution);

  const tabs = [
    {
      label: "Intended Benefits",
      component: <ShippingInfoTab details={execution} />,
    },
  ];

  return (
    <div className="w-full relative h-full">
      <div className="question pb-10 sm:pb-24 absolute top-0 inset-x-0">
        {tabs.map((faq, index) => (
          <div
            key={index}
            className="border-grey-20 group border-t last:mb-0 last:border-b p-4 rounded transform transition-transform duration-300"
          >
            <h4
              className={`flex items-center justify-between cursor-pointer ${
                accordionItems[index]?.isOpen
                  ? "text-green-400 font-medium transition-transform motion-reduce:transform-none"
                  : ""
              }`}
              onClick={() => handleAccordionItem(index)}
            >
              {faq.label}
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-200 transform transition-transform duration-[900ms] ml-2 font-bold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: accordionItems[index]?.isOpen
                    ? "rotate(180deg)"
                    : "",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h4>
            {accordionItems[index]?.isOpen && (
              <div>
                <div className="w-full">{faq.component}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ShippingInfoTab = ({ details }) => {
  console.log("PRODUCT_INFO", details);
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 sm:gap-y-8 bg-[#2b2c2d] px-4 py-6 rounded-xl shadow-xl">
        {details?.map((p, index) => {
          console.log("DETAIL--->: ", p, "INDEX: ", index);
          return (
            <div key={index} className="flex items-start gap-x-2">
              <div>
                <p className="max-w-sm">{p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTabs;
