import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionCard({itemName, item}) {
    return (
      <Accordion type="single" collapsible className="w-full text-white" >
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full text-slate-100 text-xl">{itemName}</AccordionTrigger>
          {item.map((i, k )=>{
             return  <AccordionContent key={k} className="w-full text-slate-200 text-lg">
                 {i}
                 </AccordionContent>
              }
             )}
       
        </AccordionItem>
      </Accordion>
    )
  }
  