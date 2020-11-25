import React, { FC } from "react";
import { IoIosClock, IoIosMail, IoIosPhonePortrait, IoIosPin } from "react-icons/io";

import { ContactForm, Link, Map, Section } from "../components";

const Contact: FC = () => {
  
  return <>
    <Section fullscreen background="var(--color-grey-bg-2)">
      <div className="heading">
        <h1>Get in Touch</h1>
        <h2 className="h4">Tell us how we can help and we’ll get in touch shortly.</h2>
      </div>
  
      <div className="contact">
        <ContactForm />
        <aside>
          <div className="contact__intro">
            <h3>How can we <em>help</em> you?</h3>
            <p>Wondering if we have any ideas about your challenging project?</p>
            <p>Feel free to contact us with any questions, projects or partnerships.</p>
            <p> Prefer a cup of coffee and a chat? Visit us by appointment in Cape Town, CBD.</p>
      
          </div>
          <div className="contact__details">
            <h3>Cape Town Office</h3>
            <Link href="https://g.page/tellmann-cpt?share">
              <a className="contact-link" target="_blank">
                <i><IoIosPin /></i>
                <p>
                  11th Floor Touchstone House <br />
                  7 Bree Street <br />
                  Cape Town, 8001 <br />
                  South Africa
                </p>
              </a>
            </Link>
            <Link href="tel:0763934356">
              <a className="contact-link" target="_blank">
                <i><IoIosPhonePortrait /></i>
                <p>076 393 4356</p>
              </a>
            </Link>
            <Link href="mailto:info@tellmann.co.za">
              <a className="contact-link" target="_blank">
                <i><IoIosMail /></i>
                <p>info@tellmann.co.za</p>
              </a>
            </Link>
            <span className="contact-link">
              <i><IoIosClock /></i>
              <p>Office Hours: 9:00 - 16:30</p>
            </span>
          </div>
        </aside>
      </div>
    </Section>
    <Map />
    <style jsx>{`

      .heading {
        margin-bottom: 36px;
      }

      .contact {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 48px;

        @media screen and (min-width: 960px) {
          grid-template-columns: 2fr 1fr;

        }
      }

      aside {
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        @media screen and (min-width: 600px) and (max-width: 960px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 36px;
        }
      }

      .contact__details {
        margin-top: 60px;

        @media screen and (min-width: 600px) and (max-width: 960px) {
          margin-top: 0
        }
      }

      h3 {
        font-size: 28px;
        /*margin-bottom: 0;*/

        &:not(:first-of-type) {
          margin-top: 36px;
        }

      }

      .contact-link {
        display: flex;
        text-decoration: none;

        i, p {
          margin: 8px;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.65;
          letter-spacing: unset;

        }

        i {
          font-size: 18px;
        }

      }

      a {
        &:hover, &:focus, &:active {
          color: var(--primary)
        }
      }
    `}</style>
  </>;
};

export default Contact;