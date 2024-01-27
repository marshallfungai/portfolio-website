import React from 'react'
import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Heading,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import {Tailwind} from "@react-email/tailwind"; 

type ContactFormEmailProps = {
    message: string,
    senderEmail: string,
    // senderFile: File | null
}

export default function ContactFormEmail({message, senderEmail}: ContactFormEmailProps) {
  return (
    <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Tailwind>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              hey dude, check this message out
            </Heading>
            <Text>{message}</Text>
            <Hr />
       
            <Hr />
            <Text>The sender's email is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
  );

}
