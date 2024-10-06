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
          <li key={index} className="py-1 hover:bg-slate-200 hover:text-slate-600 hover:pl-4">
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

function AgentsTabs({bio}) {
  return (
    <Tabs defaultValue="bio" className="group min-w-[400px] min-h-[35vh] sm:w-full !bg-black mt-4 ring ring-1 pt-4 ring-slate-600  hover:ring-pink-400">
      <TabsList className="grid w-full grid-cols-3 !bg-black border-b border-1 border-pink-200  group-hover:border-pink-400">
        {tabs.map((tab, index) => (
          <TabsTrigger key={index} value={tab.value} className={clsx("data[state-'active']" && "text-pink-400", "text-slate-200")}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab, index) => (
        <TabsContent key={tab.value} value={tab.value} className="group !bg-black text-slate-100 pb-12">
          <Card className="border-b-0 !rounded-[0] pb-24">
            <CardHeader className="border-b border-1 border-white !bg-black text-white">
              <CardTitle className="text-pink-200">{tab.title}</CardTitle>
              <CardDescription className="text-slate-200">{tab.description}</CardDescription>
            </CardHeader>
            <CardContent className={clsx(index ==1 && "text-gray-500", "space-y-2 mt-4 pt-6 pb-12")}>
              {tab.label === "Bio" ? bio : tab.content}
            </CardContent>
            <CardFooter>
              {/* This can be used for any future actions */}
              <Button to="/contact" >Learn More</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}



export default AgentsTabs