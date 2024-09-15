import  React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { signIn } from "next-auth/react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };


export const GoogleButton = ({}) =>{
  return <button onClick={() => signIn('google', { callbackUrl: `dashboard` })}
  type="button"
  className="ipXM0u3 r7gk19A cNh938Y icon-button social-signing-button google-signing-button dXncvpI"
>
  <span
    className="glAQDp5 provider-icon"
    aria-hidden="true"
    style={{ width: '20px', height: '20px' }}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 18 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 7.844v3.463h4.844a4.107 4.107 0 0 1-1.795 2.7v2.246h2.907c1.704-1.558 2.685-3.85 2.685-6.575 0-.633-.056-1.246-.162-1.83H9v-.004Z"
        fill="#3E82F1"
      ></path>
      <path
        d="M9 14.861c-2.346 0-4.328-1.573-5.036-3.69H.956v2.323A9.008 9.008 0 0 0 9 18.42c2.432 0 4.47-.8 5.956-2.167l-2.907-2.247c-.804.538-1.835.855-3.049.855Z"
        fill="#32A753"
      ></path>
      <path
        d="M3.964 5.456H.956a8.928 8.928 0 0 0 0 8.033l3.008-2.318a5.3 5.3 0 0 1-.283-1.699 5.3 5.3 0 0 1 .283-1.699V5.456Z"
        fill="#F9BB00"
      ></path>
      <path
        d="m.956 5.456 3.008 2.317c.708-2.116 2.69-3.69 5.036-3.69 1.32 0 2.508.453 3.438 1.338l2.584-2.569C13.465 1.41 11.427.525 9 .525A9.003 9.003 0 0 0 .956 5.456Z"
        fill="#E74133"
      ></path>
    </svg>
  </span>
  <p>Continue with Google</p>
</button>
}