'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@utils/motion';
import { aboutimg } from "@public/assets";
import { layout } from "@styles/styles";
import Image from "next/image";

const About = () => {
  return (
    <section className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative">
        <div className='items-center w-full mx-auto flex flex-col 
        max-w-[86rem]'>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="flex items-center w-full md:mb-12 ss:mb-8 
            mb-8">
                <h1 className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
                    Who are we?
                </h1>
                <motion.div variants={fadeIn('down', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-main w-full h-[2px]' />
                </motion.div>
            </motion.div>
            
            <motion.div variants={fadeIn('down', 'tween', 0.2, 0.5)}
            className="flex md:flex-row ss:flex-row flex-col md:gap-10 
            ss:gap-10 gap-12 w-full aboutimage">
                <motion.div variants={textVariant()}
                className={`${layout.sectionInfo}`}>
                    <p className='text-main md:text-[17px] ss:text-[14px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[400px]  
                    md:leading-[22px]'>
                        The world of commercial real estate is evolving 
                        rapidly, led by a vanguard of dedicated pioneers 
                        who are disrupting conventional methods to 
                        revolutionize your real estate journey.
                    </p>

                    <p className='text-main md:text-[17px] ss:text-[14px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[400px] 
                    md:mt-5 ss:mt-5 mt-5 md:leading-[22px]'>
                        Armed with two decades of industry wisdom, we 
                        are focused on combining these insights with the 
                        prowess of modern technology, delivering 
                        outcomes that not only meet but exceed your 
                        expectations.
                    </p>    

                    <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-5 ss:gap-5 
                    gap-3 items-center buttonfull'>
                        <button
                            className='grow4 bg-custom-gradient border-none buttonhalf
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5
                            ss:py-3 py-3 md:px-24 ss:px-3 px-3 text-white 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer'
                        >
                            Join Us
                        </button>

                        <button
                            className='border-[1px] grow4 border-gradient 
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5 
                            ss:py-3 py-3 md:px-20 ss:px-10 px-6 text-custom-gradient 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium bg-transparent cursor-pointer
                            buttonhalf'
                        >
                            Contact Us
                        </button>
                    </div>
                </motion.div>

                <motion.div 
                    variants={fadeIn('down', 'tween', 0.2, 0.5)}>
                    <Image src={aboutimg} alt='about'
                    className='md:h-[300px] ss:h-[300px] w-auto'
                    />
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(About, 'about');