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

import BlurImage from "../blur-image"

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
  title: "Community Leads",
  href: "/community-leads",
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
    href: "/virtual-tours",
    description:
      "Take virtual tours of properties to explore them from the comfort of your home.",
  },
  {
    title: "Lawyers",
    href: "/lawyers",
    description:
      "Available lawyers you can use for your real estate services.",
  },
 
]

export function NavigationLeft() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[1.125rem]">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild className="px-0">
                  <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                   href="/blogs/revolutionizing-real-estate-with-blockchain-technology" 
                  >
                    <ChevronDownIcon
                      className="relative top-[1px] px-4 ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                     <BlurImage src="/what-is-blockchain-1.jpeg" 
                         className="h-full w-full z-20 object-cover
                           group-data-[state=open]:rotate-180 h-64 w-24"
                          alt="what-is-blockchain-1.jpeg" 
                          height={34}
                          width={34}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
                         />
                    <Link className="mb-2 mt-4 text-lg font-medium px-4"    href="/blogs/revolutionizing-real-estate-with-blockchain-technology" >
                      Why Proxy
                    </Link>
                    <p className="text-sm leading-tight text-muted-foreground px-4">
                      An elegant real estate solutions use with blockchain technology.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>


              <ListItem href="/about" title="About Proxy"  
              className="hover:text-pink-500 group hover:-mb-4">
                <h4 className="group-hover:p-2 group-hover:rounded-md text-sm text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 ">
                  A real estate company with a property database and an in-house agent network, you might use equivalent items like this:</h4>
              </ListItem>
              <ListItem href="/agents" title="Our Agents"  className="hover:text-pink-500 group hover:-mb-4">
                <h4 className="group-hover:p-2 group-hover:rounded-md text-sm text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 ">Meet our team of experienced real estate professionals.</h4>
              </ListItem>
            
              <ListItem href="/blogs/proxy-s-implementation-of-blockchain-for-real-estate-innovation" title="Blockchain Solution"  className="hover:text-pink-500">
                Learn about our extensive blockhain implimentation for real estate.
              </ListItem>
              <ListItem href="/contact" title="Contact Us"  className="hover:text-pink-500">
                Get in touch with us for inquiries and support.
              </ListItem>
              <ListItem href="/about" title="About Us"  className="hover:text-pink-500 group hover:-mb-4">
                <h4 className="group-hover:p-2 group-hover:rounded-md text-sm text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 ">
                Discover more about our company and mission.</h4>
              </ListItem>
   
              {/* Add more list items based on your `components` array if needed */}
            </ul>
            
          </NavigationMenuContent>

        </NavigationMenuItem>
        <NavigationMenuItem> 
          <NavigationMenuTrigger className="text-[1.125rem]">Properties</NavigationMenuTrigger>
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
        <NavigationMenuItem className="group-hover:p-2 group-hover:rounded-md text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 text-[1.125rem]">
          <Link href="/join" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Join
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="group-hover:p-2 group-hover:rounded-md text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 text-[1.125rem]">
          <Link href="/agents" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Agents
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="group-hover:p-2 group-hover:rounded-md text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 text-[1.125rem]">
          <Link href="/contact"
          legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="group-hover:p-2 group-hover:rounded-md text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 text-[1.125rem]">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="group-hover:p-2 group-hover:rounded-md text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 text-[1.125rem]">
          <Link href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> 
        <NavigationMenuItem className="group-hover:p-2 group-hover:rounded-md text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 text-[1.125rem]">
          <Link href="/lawyers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Lawyers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="group-hover:p-2 group-hover:rounded-md text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 text-[1.125rem]">
          <Link href="/community-leads" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Leads
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      <NavigationMenuItem className="group-hover:p-2 group-hover:rounded-md text-gray-500 font-normal hover:bg-pink-100 group-hover:bg-pink-50 text-[1.125rem]">
          <Link href="/terms" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Terms
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
        <a href={props.href}
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