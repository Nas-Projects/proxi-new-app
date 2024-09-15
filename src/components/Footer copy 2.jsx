'use client';

import SectionWrapperAlt from '@hoc/SectionWrapperAlt';
import { motion } from 'framer-motion';
import { textVariant } from '@utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '@constants';
import { logoalt } from '@public/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='w-full md:min-h-[500px] ss:min-h-[300px] 
    min-h-[300px] flex items-center sm:px-16 px-6 bg-main2'>
        <div className='flex mx-auto items-center w-full relative 
        flex-col justify-center max-w-[86rem] '>
            <div className='flex items-center w-full relative'>
                <motion.div variants={textVariant()} 
                className='flex flex-col w-full'>
                    <div className='flex flex-col w-full md:gap-6 ss:gap-5 gap-5'>
                        <Image 
                            src={logoalt} 
                            alt='logo' 
                            width={300}
                            height={'auto'}
                        />

                        <p className='text-main md:text-[17px] ss:text-[14px] 
                        text-[12px] md:leading-[22px] ss:leading-[22px] leading-[18px]'>
                        Proxy is a real estate giant and armed with two decades of 
                        industry wisdom, we are focused on combining these 
                        insights with the prowess of modern technology, delivering 
                        outcomes that not only meet but exceed your expectations.
                        </p>
                    
                        <div className='flex md:gap-5 ss:gap-5 gap-3 items-center'>
                            {socialMedia.map((social, index) => (
                                <a target='_blank' href={social.link} rel="noreferrer" key={index}>
                                    <Image 
                                        src={social.Icon}
                                        alt={social.id}
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                
                    <div className='flex md:flex-row ss:flex-row flex-col 
                    md:mt-8 ss:mt-8 mt-6'>
                        {footerLinks.map((footerLink, index) => (
                            <div key={index} className='flex mr-8'>
                                <h4 className='md:text-[17px] navsmooth
                                ss:text-[15px] text-[14px] text-main
                                cursor-pointer hover:text-custom-gradient'>
                                    {footerLink.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div variants={textVariant()} className='flex flex-col w-full'>
                <div className='flex md:mt-10 ss:mt-10 mt-8 border-t-[1px] 
                border-main md:pt-8 ss:pt-8 pt-6 items-center'>
                    <BiCopyright className='sm:mr-2 mr-1 md:text-[20px] 
                    ss:text-[18px] text-[15px] md:mt-1 ss:mt-1 mt-0 text-main' />

                    <p className='md:text-[15px] ss:text-[16px] text-[12px] 
                    text-main md:mt-1 ss:mt-1 mt-0.5'>
                        2024 Proxy Real Estate Ltd. All Rights Reserved.
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapperAlt(Footer, '');