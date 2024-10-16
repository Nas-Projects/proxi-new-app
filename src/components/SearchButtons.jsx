'use client';

// import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SearchBtns } from "../constants";
import Link from "next/link";

const ButtonCard = ({ name, Icon, index, href }) => {
    return (
        <Link href={href} className="grow4  group hover:shadow-lg ring-1 ring-inset ring-[#4a2f3e] hover:ring-[#da1f88] focus:ring-pink-200 rounded-xl
         placeholder:text-gray-400 focus:ring-2 focus:ring-inset lg:focus:ring-2 lg:focus:ring-pink-300 focus:shadow-2xl">
            <motion.div
                variants={fadeIn('', 'spring', index * 0.2, 0.75)}
                className='cursor-pointer bg-white/60 lg:bg-white/90 shadow-md pt-6 
                pb-6 pl-8 pr-8 items-center justify-center flex
                rounded-md lg:w-[130px] xl:w-[200px] lg:hover:bg-custom-gradient hover:bg-[#c2185b]'
                // style={{ width: '200px', height: '120px' }}
            >
                {/* lg:hover:bg-custom-gradient-indigo */}
                <div className='flex items-center justify-center relative 
                gap-3 flex-col'>
                    <Icon size={30} className='text-main text-[#da1f88] group-hover:!text-white' />

                    <p className="text-[#da1f88] text-[15px] font-semibold group-hover:!text-white">
                        {name}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};


const SearchButtons = () => {
  return (
    <section className="md:min-h-[100px] mx-auto flex items-center relative">
        <div className='items-center w-full mx-auto flex 
        max-w-[86rem]'>
            <div className="flex items-center w-full justify-center">
                <div className='grid grid-cols-3 lg:flex gap-2 items-center'>
                    {SearchBtns.map((item, index) => (
                      <ButtonCard 
                        key={item.id}
                        index={index}
                        href={item.link}
                        name={item.name}
                        Icon={item.Icon}
                      />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
};

export default SearchButtons;
// export default SectionWrapper(SearchButtons, '');