"use client";

import React, { useState } from 'react'
import SectionHeading from '../section-heading'
import { useSectionInView } from '@/lib/hooks';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submitBtn';
import toast from 'react-hot-toast';


export default function Contact() {
    const { ref } = useSectionInView('Contact', 0.2);
    const [senderEmail, setSenderEmail] = useState('');
    const [senderMessage, setSenderMessage] = useState('');
    const [senderAttachment, setSenderAttachment] = useState<File | null>(null);


    return (
        <motion.section
            ref={ref}
            id="contact"
            className='mb-28 sm:mb-20 w-[min(100%, 40rem)] scroll-mt-28 '
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact</SectionHeading>
            <p className='text-gray-700'>Please contact me directly on <a className='underline' href='mailto:fmarshall.m@gmail.com'>fmarshall.m@gmail.com</a> or use the form below.</p>
            <form className='flex flex-col mt-10'
                action={async (formData: FormData) => {
                    const { response, error } = await sendEmail(formData);
                    if (error) {
                        toast.error('Something went wrong, please try again later.', {
                            duration: 5000,
                        });
                    } else {
                        setSenderEmail('');
                        setSenderMessage('');
                        setSenderAttachment(null);
                        toast.success('Thank you for your interest in me, I will get back to you as soon as possible. :-)', {
                            duration: 5000,
                        });
                    }
                }}
            >
                <input
                    type="email"
                    value={senderEmail}
                    name='senderEmail'
                    className='bg-gray-100 h-14 rounded-[15px] borderBlack px-4'
                    placeholder='Your name?'
                    required
                    maxLength={500}
                    onChange={e => setSenderEmail(e.target.value)}
                />
                <textarea
                    value={senderMessage}
                    name="senderMessage" id="" className='bg-gray-100 h-52 px-4 my-3 rounded-[15px] borderBlack p-4' placeholder='Tell me the story of a life time...'
                    required
                    maxLength={500}
                    onChange={e => setSenderMessage(e.target.value)}
                />
                {/* <input
                    type="file"
                    name="attachment"
                    className=' my-3 h-14 rounded-[15px] borderBlack px-4'
                    required
                    onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setSenderAttachment(file);
                        }
                    }}
                /> */}
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
