'use client';

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'

type projectProps = typeof projectsData[number];

export default function Project({ ...project }: projectProps) {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
    return (
        <motion.div
        
            ref={ref}
            style={{ scale: scaleProgess, opacity: opacityProgess }}
            className='group mb-3 sm:mb-8 last:mb-0'
        >

            <article className=' bg-gray-100 max-w-[60rem] border border-black/5  rounded-lg
           overflow-hidden sm:pr-8 relative sm:h-[25rem]  group-even:pl-8 hover:bg-gray-200 transition'
            >
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full  group-even:ml-[20rem]'>
                    <h3 className='text-2xl font-semibold'>{project.title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>{project.description}</p>
                    <p className='mt-2 font-semibold'><a href={project.projectUrl}>View Project</a></p>
                    <ul className='flex flex-wrap gap-2 py-2 sm:mt-auto'>
                        {project.tags.map((tag: any, index) => (
                            <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image className='absolute top-8 -right-40 w-[32.25rem] rounded-t-lg shadow-2xl 
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-hover:scale-[1.04]

            group-even:group-hover:translate-x-3
            group-even:group-hover:-translate-y-3
            group-even:group-hover:rotate-2

            transition
            group-even:-right-[initial] group-even:-left-40'
                    src={project.imageUrl} alt={project.description} quality={95} />
            </article>
        </motion.div>

    )
}