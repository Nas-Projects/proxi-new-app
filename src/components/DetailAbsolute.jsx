import { Fragment } from "react";

export default function DetailAbsolute({title, description, tag, image, children}){
    return <Fragment class="absolute bottom-0 inset-x-0 col-start-1 row-start-1 flex flex-col-reverse bg-gradient-to-t from-black/70 via-black/0 
                       p-3 sm:row-start-2 sm:bg-none sm:p-0 md:hidden lg:row-start-1 lg:rounded-lg">
               {title && <h1 class="my-4 text-lg font-semibold text-white sm:text-slate-900 dark:sm:text-white md:text-2xl" style={{"lineHeight": 'normal'}}>{title && title}</h1>}
                {tag &&  <Fragment className="flex"><p class="!flex max-w-10 mb-0 max-h-10 py-1.5 text-sm font-medium leading-4 text-white sm:text-slate-500 bg-black flex rounded-full p-1 px-3">{tag && tag}</p>
                    </Fragment>}
             </Fragment>
}