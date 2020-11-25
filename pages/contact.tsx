import React, { FC } from "react";

import { ContactForm, Section } from "../components";

const Contact: FC = () => {
  
  return <>
    <Section fullscreen background="var(--color-grey-bg-2)">
      <div className="heading">
        <h1>Get in Touch</h1>
        <h2 className="h4">Tell us how we can help and we’ll get in touch shortly.</h2>
      </div>
      
      <div className="content">
        <ContactForm />
        <aside>sidebar content</aside>
      </div>
    
    </Section>
    <style jsx>{`

      .heading {
        margin-bottom: 36px;
      }

      .content {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 24px;

        @media screen and (min-width: 960px) {
          grid-template-columns: 2fr 1fr;

        }
      }
    `}</style>
  </>;
};

export default Contact;