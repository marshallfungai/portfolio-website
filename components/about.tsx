'use client';

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';


export default function About() {
    const { ref } = useSectionInView('About');
   
    return (
        <motion.section className='mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        id="about"
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}
        >
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
                Individual with a solid foundation as a <span className='font-medium'>full stack application developer</span>. Embarking on a balance into the field of cybersecurity and software development.{" "}
                 I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with LLMs and Python, to go ahead of the curve in terms of AI systems{" "}
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                travelling, and just a good social time with friends and family. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning new languanges, {" "}
                <span className="font-medium">turkish, and zulu</span>. I'm also
                learning how to play the guitar.
            </p>
        </motion.section>
    )
}
