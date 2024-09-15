import { Text, clx } from "@medusajs/ui";
import React, { useState } from "react";

// @ts-nocheck
type AccordionItemProps = {
  title: string;
  subtitle?: string;
  description?: string;
  type?: string;
  className?: string;
  required?: boolean;
  benefits?: Array<any>;
  equipments?: Array<any>;
  tooltip?: string;
  forceMountContent?: true;
  headingSize?: "small" | "medium" | "large";
  customTrigger?: React.ReactNode;
  complete?: boolean;
  active?: boolean;
  triggerable?: boolean;
  children: React.ReactNode;
  product?: Array<any>;
};

type AccordionProps = {
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>;
} = ({ children }) => {
  return <div>{children}</div>;
};

const Item: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  type,
  description,
  children,
  className,
  benefits,
  equipments,
  headingSize = "large",
  customTrigger = undefined,
  forceMountContent = undefined,
  triggerable,
  ...props
}) => {
  const [accordionItem, setAccordionItem] = useState(
    benefits?.map((item) => ({ isOpen: false, ...item })) || []
  );
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    alert('Toggle toggle ' + (isOpen ? 'OPEN' : 'CLOSED'));
    setIsOpen(!isOpen);
  };

  const handleAccordionItem = (index) => {
    setAccordionItem((prevFaqs) =>
      prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return faq;
        }
      })
    );
  };

  console.log("PRODUCT", benefits);

  return (
    <div
      {...props}
      className={clx(
        "border-grey-20 group border-t last:mb-0 last:border-b",
        "py-3",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-4">
          <Text className="text-ui-fg-subtle text-sm">{title}</Text>
        </div>
        <div className="question pb-10 sm:pb-24 px-6 sm:px-24">
          <div>
            {accordionItem.map((item, index) => (
              <div key={index} className="p-4 border rounded">
                <h4
                  className={`flex items-center justify-between cursor-pointer ${
                    item.isOpen ? 'text-green-400 font-medium transition-transform motion-reduce:transform-none' : ''
                  }`}
                  onClick={() => handleAccordionItem(index)}
                >
                  {item.ifo}
                  <svg
                    className="w-5 h-5 text-gray-500 transform transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: item.isOpen ? 'rotate(180deg)' : '' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </h4>
                {item.isOpen && (
                  <div
                    className={clx(
                      "radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open radix-state-closed:pointer-events-none px-1"
                    )}
                  >
                    <div className="inter-base-regular group-radix-state-closed:animate-accordion-close">
                      {description && <Text>{description}</Text>}
                      <div className="w-full">{children}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Accordion.Item = Item;

const MorphingTrigger: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className="text-grey-90 hover:bg-grey-5 active:bg-grey-5 active:text-violet-60 focus:border-violet-60 disabled:text-grey-30 bg-transparent disabled:bg-transparent rounded-rounded group relative p-[6px]">
      <div className="h-5 w-5">
        <span
          className={clx(
            "bg-grey-50 rounded-circle absolute inset-y-[31.75%] left-[48%] right-1/2 w-[1.5px] duration-300",
            { "rotate-90": isOpen }
          )}
        />
        <span
          className={clx(
            "bg-grey-50 rounded-circle absolute inset-x-[31.75%] top-[48%] bottom-1/2 h-[1.5px] duration-300",
            { "rotate-90": isOpen, "left-1/2 right-1/2": isOpen }
          )}
        />
      </div>
    </div>
  );
};

export default Accordion;
