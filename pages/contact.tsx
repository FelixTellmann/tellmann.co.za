import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa";
import { Button, FormCheckboxGroup, FormInput, FormSelect, FormTextarea, Section } from "../components";

const Contact: FC = () => {
  
  const [formData, setFormData] = useState({ email: "" });
  
  const updateFormData = ({ currentTarget: { value, id, type, checked } }) => {
    setFormData((currentFormData) => (
      { ...currentFormData, [id]: type === "checkbox" ? checked : value }
    ));
  };
  
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(e);
    let res;
    try {
      res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.log("Fetch: ", err);
    }
    console.log(res);
  };
  
  const validateForm = () => {
  
  };
  
  useEffect(() => {
    document.getElementById("contact").querySelectorAll("input, textarea, select").forEach((item) => {
      const e = { currentTarget: item };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      updateFormData(e);
    });
  }, []);
  
  return <>
    <Section fullscreen background="var(--color-grey-bg-2)">
      <div className="heading">
        <h1>Get in Touch</h1>
        <h2 className="h4">Tell us how we can help and we’ll get in touch shortly.</h2>
      </div>
      
      <div className="card-form">
        <form id="contact" className="form" onSubmit={submitForm}>
          <main>
            <div className="form-group form-group--grid">
              <FormInput id="email" label="Your Email" type="email" autoComplete="on" required onBlur={updateFormData} />
              <FormInput id="name" label="Your Name" type="text" autoComplete="on" required onBlur={updateFormData} />
              <FormInput id="website" label="Current Website" type="text" onBlur={updateFormData} />
              <FormSelect id="budget" label="Budget" options={["R20,000 - R40,000", "R40,000+"]} onBlur={updateFormData} />
            </div>
            <div className="form-group form-group--border">
              <FormCheckboxGroup label="Interest" id="interest"
                                 options={[{ label: "Shopify", icon: <FaShopify /> }, "Integrations", "other"]} onChange={updateFormData} />
            </div>
            <div className="form-group">
              <FormTextarea id="message" label="Send a Message" spellCheck="false" rows={5} onBlur={updateFormData} />
            </div>
          </main>
          <footer className="card-form__footer">
            <p>You can also email us directly at <Link href="mailto:info@tellmann.co.za">info@tellmann.co.za</Link></p>
            <Button type="submit" secondary branded medium>Submit</Button>
          </footer>
        </form>
      </div>
    
    </Section>
    <style jsx>{`

      .heading {
        margin-bottom: 36px;
      }

      .card-form {
        background-color: var(--color-background);
        border-radius: 5px;
        box-shadow: 0 30px 60px rgba(var(--color-text-rgb), 0.12);
        overflow: hidden;
      }

      footer {
        background-color: var(--secondary);
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        position: relative;
        z-index: 0;

        p {
          font-size: 15px;
          font-weight: 500;
        }

        @media screen and (min-width: 600px) {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

        }
      }

      main {
        padding: 24px;
      }

      .form-group--grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        grid-gap: 24px;
      }

      .form-group:not(:last-of-type) {
        margin-bottom: 24px;
      }

      .form-group--border {
        border-top: var(--border);
        border-bottom: var(--border);
        padding: 24px 0;
      }
    `}</style>
  </>;
};

export default Contact;