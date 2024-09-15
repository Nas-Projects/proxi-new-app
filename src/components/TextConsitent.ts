// import { VariantProps } from "class-variance-authority";
// import * as React from "react";
// declare const textVariants: (props?: ({
//     size?: "base" | "large" | "small" | "xlarge" | "xsmall" | null | undefined;
//     weight?: "regular" | "plus" | null | undefined;
//     family?: "sans" | "mono" | null | undefined;
//     leading?: "normal" | "compact" | null | undefined;
// } & ({
//     class: import("clsx").ClassValue;
//     className?: undefined;
// } | {
//     class?: undefined;
//     className: import("clsx").ClassValue;
// } | {
//     class?: undefined;
//     className?: undefined;
// })) | undefined) => string;
// interface TextProps extends React.ComponentPropsWithoutRef<"p">, VariantProps<typeof textVariants> {
//     asChild?: boolean;
//     as?: "p" | "span" | "div";
// }
// declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement>>;
// export { Text };

// const H1 = ({}) =>{

// }

// const H2 = ({text}) =>{
//     return <div className="t">
//           <h2 className="font-sans font-medium h2-core text-3xl leading-10 text-ui-fg-base">{text}</h2>
//         </div>
// }
// const H3 = ({text}) =>{
//     return <div className="">
//           <h3 className="font-sans font-medium h3-core text-2xl leading-8 text-ui-fg-base">{text}</h3>
//         </div>
// }

// const H4 = ({text}) =>{

//     return <h4 className=" flex items-center justify-between cursor-pointer text-green-400 font-medium transition-transform motion-reduce:transform-none">
//    {text}</h4>
// }