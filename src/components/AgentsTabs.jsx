import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import clsx from "clsx";

// Example data
const recentlyClosedListings = [
  "123 Main Street - Sold for $500,000",
  "456 Oak Avenue - Sold for $750,000",
  "789 Pine Lane - Sold for $650,000"
];

const activeListings = [
  "101 Maple Drive - $600,000",
  "202 Elm Street - $1,200,000",
  "303 Cedar Court - $900,000"
];

// Define the structure for each tab
const tabs = [
  {
    value: "bio",
    label: "Bio",
    title: "Agent Bio",
    description: "Learn more about the agent.",
    content: (
      <div>
        <p>
          John Doe is an experienced real estate agent with over 10 years in the
          industry. Specializing in luxury properties, John has helped countless
          clients buy and sell homes in the metropolitan area.
        </p>
      </div>
    ),
  },
  {
    value: "recently-closed",
    label: "Recently Closed",
    title: "Recently Closed Listings",
    description: "A list of properties recently sold by the agent.",
    content: (
      <ul>
        {recentlyClosedListings.map((listing, index) => (
          <li key={index} className="py-1  hover:bg-slate-200 hover:text-slate-600 hover:pl-4">
            {listing}
          </li>
        ))}
      </ul>
    ),
  },
  {
    value: "active-listings",
    label: "Active Listings",
    title: "Active Listings",
    description: "Properties currently listed by the agent.",
    content: (
      <ul>
        {activeListings.map((listing, index) => (
          <li key={index} className="py-1 border-y border-1 border-slate-200/50 hover:bg-slate-100 hover:text-sky-400 hover:pl-4">
            {listing}
          </li>
        ))}
      </ul>
    ),
  }
];

function AgentsTabs({bio,agentName}) {
  return (
    <Tabs defaultValue="bio" className="group min-w-[400px] min-h-[50vh] sm:w-full !bg-black mt-4 ring ring-1 pt-[1px] lg:pt-[1px] hover:ring-slate-600  ring-[#1d2128]">
      <TabsList className="grid w-full grid-cols-3 !bg-black border-b border-1 border-pink-200  group-hover:border-pink-400">
        {tabs.map((tab, index) => (
          <TabsTrigger key={index} value={tab.value} data-label={tab.label} className={clsx("data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:bg-[#1d2128] h-12 hover:text-pink-white",
           "text-slate-400 text-md xl:text-xl")}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab, index) => (
        <TabsContent key={tab.value} value={tab.value} className="group !bg-black text-slate-100 pb-12">
          <Card className="border-b-0 !rounded-[0] pb-24">
            <CardHeader className="border-b border-1 border-white !bg-black text-white pt-8 pb-8">
              {/* <CardTitle className="text-pink-100/90 hover:text-pink-400 text-lg">{tab.title}</CardTitle> */}
              {tab.label === "Bio" ? <CardDescription className="text-slate-200 text-lg"> About<span className="px-2 font-bold">{` ${agentName}`}</span></CardDescription> :<CardDescription className="text-slate-200 text-lg"></CardDescription> }
            </CardHeader>
            <CardContent className={clsx(index == 0 && "bg-gray-50  text-gray-500", "hover:bg-white text-lg space-y-2 mt-4 pt-6 pb-12")}>
              {tab.label === "Bio" ? bio : tab.content}
            </CardContent>
            <CardFooter>
              {/* This can be used for any future actions */}
              <Button type="button"  className="bg-white text-black ring-1 ring-black hover:text-white hover:!bg-custom-gradient hover:!text-custom-gradient-2  rounded-sm dark:bg-blue-800 
              dark:text-white antialiased font-bold  dark:hover:border-sky-200 px-4 py-2" to="/contact"  href="/contact" >Learn More</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}



export default AgentsTabs