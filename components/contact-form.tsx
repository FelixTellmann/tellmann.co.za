import cn from "classnames";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { FaShopify } from "react-icons/fa";
import validator from "validator";
import Loading from "../public/icons/loading.svg";
import { Button } from "./button";
import { FormCheckboxGroup } from "./form-checkbox-group";
import { FormInput } from "./form-input";
import { FormSelect } from "./form-select";
import { FormTextarea } from "./form-textarea";

export const ContactForm: FC = () => {
  
  const textarea = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const website = useRef(null);
  const [formData, setFormData] = useState({ email: "" });
  const [validatorActive, setValidatorActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const updateFormData = ({ currentTarget: { value, id, type, checked } }) => {
    setFormData((currentFormData) => (
      { ...currentFormData, [id]: type === "checkbox" ? checked : value }
    ));
  };
  
  const validateForm = (e) => {
    e.preventDefault();
    setValidatorActive(true);
    return !!(validator.isEmail(email.current.value) && !validator.isEmpty(name.current.value) && (validator.isURL(website.current.value) || validator.isEmpty(website.current.value)));
  };
  
  useEffect(() => {
    document.getElementById("contact").querySelectorAll("input, textarea, select").forEach((item) => {
      const e = { currentTarget: item };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      updateFormData(e);
    });
  }, []);
  
  const submitForm = async (e) => {
    e.preventDefault();
    let res;
    if (validateForm(e)) {
      setSubmitting(true);
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
    }
    setSubmitting(false);
    if (res && res.status === 200) {
      setSubmitted(true);
    }
  };
  
  return <>
    <div className="card-form">
      <form id="contact" className="form" onSubmit={submitForm}>
        <main>
          <div className="form-group form-group--grid">
            <FormInput id="email"
                       label="Your Email"
                       type="email"
                       autoComplete="on"
                       onBlur={updateFormData}
                       error={validatorActive && !validator.isEmail(email?.current?.value)}
                       ref={email} />
            <FormInput id="name"
                       label="Your Name"
                       type="text"
                       autoComplete="on"
                       onBlur={updateFormData}
                       error={validatorActive && validator.isEmpty(name?.current?.value)}
                       ref={name} />
            <FormInput id="website"
                       label="Current Website"
                       type="website"
                       onBlur={updateFormData}
                       error={validatorActive && !validator.isURL(website.current.value) && !validator.isEmpty(website.current.value)}
                       ref={website} />
            <FormSelect id="budget" label="Budget" options={["R20,000 - R40,000", "R40,000+"]} onBlur={updateFormData} />
          </div>
          <div className="form-group form-group--border">
            <FormCheckboxGroup label="Interest" id="interest"
                               options={[{ label: "Shopify", icon: <FaShopify /> }, "Integrations", "other"]} onChange={updateFormData} />
          </div>
          <div className="form-group">
            <FormTextarea id="message"
                          label="Send a Message"
                          spellCheck="false"
                          rows={5}
                          onBlur={updateFormData}
                          error={validatorActive && validator.isEmpty(textarea.current.value)} ref={textarea} />
          </div>
        </main>
        <footer className="card-form__footer">
          
          
          {submitted
           ? <p style={{ flex: 1 }}>Thank you for your Message.</p>
           : <>
             <p>You can also email us directly at <Link href="mailto:info@tellmann.co.za">info@tellmann.co.za</Link></p>
             <Button type="submit"
                     secondary
                     branded
                     medium><i className={cn({ submitting })}><Loading /></i><span className={cn({ submitting })}>Submit</span></Button></>}
        </footer>
      </form>
    </div>
    <style jsx>{`

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

        i {
          position: absolute;
          font-size: 26px;
          opacity: 0;
          display: flex;
          align-items: center;

          &.submitting {
            opacity: 1;
          }
        }

        span {
          opacity: 1;

          &.submitting {
            opacity: 0;
          }
        }

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
        grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
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