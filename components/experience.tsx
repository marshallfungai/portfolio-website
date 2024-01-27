'use client';

import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data'
import { TfiLocationPin, TfiWrite } from "react-icons/tfi";
import { BsBuildings } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Experience() {
    const { ref } = useSectionInView('Experience', 0.2);
    


    return (
        <section
            ref={ref}
            id="experience"
            className='mb-28 max-w-[75rem]  scroll-mt-28 sm:mb-40'
        >
            <SectionHeading>Experience</SectionHeading>
            <div className="">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/4 mt-2 md:mt-12 px-1">
                        <p className="ml-2 text-yellow-600 uppercase tracking-loose flex items-center"><TfiWrite className='mr-2' /> Charles Bukowski</p>
                        <p className="text-xl md:text-2xl leading-normal md:leading-relaxed mb-2">Going all the way</p>
                        <p className="leading-8 text-gray-500 text-justify italic opacity-3 mb-4">
                            <span className='text-3xl'>“</span> If you're going to try, go all the way. Otherwise, don't even start.
                            This could mean losing girlfriends, wives, relatives and maybe even your mind. <br /><br />
                            It could mean not eating for three or four days. It could mean freezing on a park bench.
                            It could mean jail. It could mean derision.
                            It could mean mockery--isolation. Isolation is the gift.
                            All the others are a test of your endurance, of how much you really want to do it.
                            And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. <br /><br />
                            If you're going to try, go all the way.
                            There is no other feeling like that.
                            You will be alone with the gods, and the nights will flame with fire.
                            You will ride life straight to perfect laughter.
                            It's the only good fight there is. <span className='text-3xl'>”</span>
                        </p>

                    </div>
                    <div className="ml-0 md:ml-2 lg:w-3/4 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div className="absolute left-[50%] h-full border-2 border-yellow-500 border-solid"></div>

                                <div className="absolute left-[50%] h-full border-2 border-yellow-500 border-solid"></div>
                                {experiencesData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1 , y: 0}}
                                        transition={{duration: 1, delay: index * 0.2}}
                                        viewport={{once: true}}
                                        className="mb-8 flex justify-between items-center w-full right-timeline even:flex-row-reverse even:ml-8">
                                        <div className="order-1 w-5/12"></div>

                                        <div className="order-1  w-5/12 flex flex-col px-1 py-4">
                                            <p className="mb-1 flex items-center text-base text-yellow-700"><FaRegCalendarAlt className='mr-2' /> {item.date}</p>
                                            <h3 className="mb-1 flex items-center text-gray-500 font-bold text-lg capitalize text-left"><BsBuildings className='mr-2' /> {item.company}</h3>
                                            <h4 className="mb-3 flex items-center font-semibold text-sm text-gray-500 capitalize"><TfiLocationPin className='mr-2' /> {item.location}</h4>
                                            <h4 className="mb-1 flex items-center font-semibold capitalize"><IoPersonAddOutline className='mr-2' /> {item.title}</h4>
                                            <p className="text-sm leading-6 text-gray-400 text-opacity-100">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
