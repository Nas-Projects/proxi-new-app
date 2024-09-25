"use client"
// import { ChevronDown } from "../icons"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

// Define the components array without TypeScript annotations
const components = [
 { title: "Property Leasing",
 href: "/properties/search-results?location=&propertyType=",
  description: "Browse and explore available rental properties.",
},
{
  title: "Properties Sales",
  href: "/properties/search-results?location=&propertyType=sale",
  description: "Explore properties available for sale.",
},
{
  title: "Investment Opportunities",
  href: "/properties/search-results?location=&propertyType=sale",
  description:
    "Discover lucrative investment opportunities and potential returns in real estate.",
},
  {
    title: "Market Trends",
    href: "market-trends",
    href:"/blogs/the-future-of-real-estate-trends-to-watch-in-2024",
    description:
      "View the latest market trends and insights for different real estate sectors.",
  },
 
  {
    title: "Virtual Tours",
    href: "/properties",
    description:
      "Take virtual tours of properties to explore them from the comfort of your home.",
  },
  {
    title: "Client Reviews",
    href: "/client-reviews",
    description:
      "Read reviews and testimonials from clients who have used our real estate services.",
  },
 
]

export function NavigationLeft() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <ChevronDownIcon
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                     <image src="/assets/what-is-blockchain-1.jpeg" 
                      className="h-full w-full z-20 object-cover group-data-[state=open]:rotate-180"
                          alt="what-is-blockchain-1.jpeg" 
                         />
                    <Link href="/about" className="mb-2 mt-4 text-lg font-medium">
                      About Proxy
                    </Link>
                    <p className="text-sm leading-tight text-muted-foreground">
                      An elegant real estate solutions use with blockchain technology.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              For a real estate company with a property database and an in-house agent network, you might use equivalent items like this:


              <ListItem href="/agents" title="Our Agents"  className="hover:text-pink-500 group hover:-mb-4">
                <h4 className="group-hover:p-2 group-hover:rounded-md text-sm text-gray-500 font-normal group-hover:bg-pink-100 ">Meet our team of experienced real estate professionals.</h4>
              </ListItem>
            
              <ListItem href="/agents" title="Agent Network"  className="hover:text-pink-500">
                Learn about our extensive network of in-house real estate agents.
              </ListItem>
              <ListItem href="/contact" title="Contact Us"  className="hover:text-pink-500">
                Get in touch with us for inquiries and support.
              </ListItem>
              <ListItem href="/about" title="About Us"  className="hover:text-pink-500">
                Discover more about our company and mission.
              </ListItem>

              {/* Add more list items based on your `components` array if needed */}
            </ul>
            
          </NavigationMenuContent>

        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Properties</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem className="hover:text-pink-500"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/agents" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Agents
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default ListItem