'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { fadeIn } from '@utils/motion';
import { SearchBtns } from "@constants";

const ButtonCard = ({ name, Icon, index }) => {
    return (
        <div className="grow4 hover:shadow-lg">
            <motion.div
                variants={fadeIn('', 'spring', index * 0.2, 0.75)}
                className='cursor-pointer bg-white shadow-md pt-6 
                pb-6 pl-8 pr-8 items-center justify-center flex
                rounded-md'
                style={{ width: '200px', height: '120px' }}
            >
                <div className='flex items-center justify-center relative 
                gap-3 flex-col'>
                    <Icon size={30} className='text-main' />

                    <p className="text-main text-[15px] font-semibold">
                        {name}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};


const SearchButtons = () => {
  return (
    <section className="md:min-h-[100px]
    mx-auto flex items-center relative">
        <div className='items-center w-full mx-auto flex 
        max-w-[86rem]'>
            <div className="flex items-center w-full justify-center">
                <div className='flex gap-6 items-center'>
                    {SearchBtns.map((item, index) => (
                      <ButtonCard 
                        key={item.id}
                        index={index}
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

export default SectionWrapper(SearchButtons, '');