"use server";

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('senderMessage');
    // const senderFile = formData.get('senderAttachment');

    if(!validateString(senderEmail, 100)){
        return {
            error: 'Invalid form data'
        };
    }

    if( !validateString(message, 500)){
        return {
            error: 'Invalid form data'
        };
    }

    let response;
    try {
       response = resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'fmarshall.m@gmail.com',
            subject: 'marshallfungai.github.io',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                 senderEmail : senderEmail as string,
                 message: message as string,
                //  senderFile: senderFile as File,
                }),
        });
    } catch (error: unknown) {   
        
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        response
    }
}