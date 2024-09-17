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
  {
    title: "Property Leasing",
    href: "/docs/real-estate/property-listings",
    description:
      "Browse and explore available properties with detailed descriptions and images.",
  },
  {
    title: "Properties Sales",
    href: "/docs/real-estate/neighborhood-insights",
    description:
      "Get detailed information about different neighborhoods and their amenities.",
  },
  {
    title: "Market Trends",
    href: "/docs/real-estate/market-trends",
    description:
      "View the latest market trends and insights for different real estate sectors.",
  },
  {
    title: "Investment Opportunities",
    href: "/docs/real-estate/investment-opportunities",
    description:
      "Discover lucrative investment opportunities and potential returns in real estate.",
  },
  {
    title: "Virtual Tours",
    href: "/docs/real-estate/virtual-tours",
    description:
      "Take virtual tours of properties to explore them from the comfort of your home.",
  },
  {
    title: "Client Reviews",
    href: "/docs/real-estate/client-reviews",
    description:
      "Read reviews and testimonials from clients who have used our real estate services.",
  },
  // {
  //   title: "Alert Dialog",
  //   href: "/docs/primitives/alert-dialog",
  //   description:
  //     "A modal dialog that interrupts the user with important content and expects a response.",
  // },
  // {
  //   title: "Hover Card",
  //   href: "/docs/primitives/hover-card",
  //   description:
  //     "For sighted users to preview content available behind a link.",
  // },
  // {
  //   title: "Progress",
  //   href: "/docs/primitives/progress",
  //   description:
  //     "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  // },
  // {
  //   title: "Scroll-area",
  //   href: "/docs/primitives/scroll-area",
  //   description: "Visually or semantically separates content.",
  // },
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  // },
  // {
  //   title: "Tooltip",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <ChevronDownIcon
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      About Proxy
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      "An elegant real estate solutions with blockchain technology..."
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              For a real estate company with a property database and an in-house agent network, you might use equivalent items like this:


              <ListItem href="/agents" title="Our Agents">
                Meet our team of experienced real estate professionals.
              </ListItem>
            
              <ListItem href="/agent-network" title="Agent Network">
                Learn about our extensive network of in-house real estate agents.
              </ListItem>
              <ListItem href="/contact" title="Contact Us">
                Get in touch with us for inquiries and support.
              </ListItem>
              <ListItem href="/about" title="About Us">
                Discover more about our company and mission.
              </ListItem>

              {/* Add more list items based on your `components` array if needed */}
            </ul>
            
          </NavigationMenuContent>

        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Properties</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
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
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
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