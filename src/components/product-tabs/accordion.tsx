import { Text, clx } from "@medusajs/ui";
import React, { useState, useCallback } from "react";

type AccordionItemProps = {
  title: string;
  subtitle?: string;
  description?: string;
  type?: string;
  className?: string;
  required?: boolean;
  benefits?: Array<{ isOpen?: boolean; ifo: string }>; // Type definition for benefits
  tooltip?: string;
  children: React.ReactNode;
  product?: Array<{ id: string; name: string }>; // Specific type for product
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
  description,
  children,
  className,
  benefits = [], // Default empty array for benefits
  ...props
}) => {
  const [accordionItem, setAccordionItem] = useState(
    benefits.map((item) => ({ isOpen: false, ...item }))
  );

  const handleAccordionItem = useCallback((index: number) => {
    setAccordionItem((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        } else {
          return item;
        }
      })
    );
  }, []);

  return (
    <div
      {...props}
      className={clx(
        "border-grey-20 group border-t last:mb-0 last:border-b py-3",
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
                    item.isOpen
                      ? "text-green-400 font-medium transition-transform"
                      : ""
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
                    style={{ transform: item.isOpen ? "rotate(180deg)" : "" }}
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
                  <div className={clx("px-1")}>
                    <div className="inter-base-regular">
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

export default Accordion;
