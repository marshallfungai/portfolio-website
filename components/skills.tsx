'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0.05 * index,
        transition: {
            delay: 0.09 * index,
        }
    })
}

export default function Skills() {
    const { ref } = useSectionInView('Skills', 0.4);
    return (
        <section
            ref={ref}
            id='skills'
            className='mb-28 max-w-[60rem] text-center scroll-mt-28 sm:mb-40'
        >
            <SectionHeading className='text-center'>Skills</SectionHeading>
            <ul className='flex flex-wrap gap-2 justify-center text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
                        key={index}
                        variants={fadeInAnimationVariants}
                        custom={index}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once: true
                        }}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
