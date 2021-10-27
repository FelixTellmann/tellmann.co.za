import cn from "classnames";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import validator from "validator";
import scrollTo from "../lib/scrollTo";
import Loading from "../public/icons/loading.svg";
import { Button } from "./button";
import { FormCheckboxGroup } from "./form-checkbox-group";
import { FormInput } from "./form-input";
import { FormSelect } from "./form-select";
import { FormTextarea } from "./form-textarea";

export const ContactForm: FC = () => {
  const message = useRef(null);
  const name = useRef(null);
  const source = useRef(null);
  const email = useRef(null);
  const website = useRef(null);
  const [formData, setFormData] = useState({ email: "" });
  const [validatorActive, setValidatorActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateFormData = ({ currentTarget: { value, id, type, checked } }) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (e) => {
    e.preventDefault();
    setValidatorActive(true);
    return !!(
      validator.isEmail(email.current.value) &&
      !validator.isEmpty(name.current.value) &&
      (validator.isURL(website.current.value) || validator.isEmpty(website.current.value))
    );
  };

  useEffect(() => {
    document
      .getElementById("contact")
      .querySelectorAll("input, textarea, select")
      .forEach((item) => {
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
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.log("Fetch: ", err);
      }
    }
    setSubmitting(false);
    if (res && res.status === 200) {
      setSubmitted(true);
      scrollTo(400, document.getElementById("contact-section").offsetTop);
    }
  };

  return (
    <>
      <div className="card-form">
        <form className="form" id="contact" onSubmit={submitForm}>
          <main className={cn({ submitted })}>
            <div className="form-group form-group--grid">
              <FormInput
                ref={name}
                required
                autoComplete="on"
                error={validatorActive && validator.isEmpty(name?.current?.value)}
                id="name"
                label="Your Name"
                type="text"
                onBlur={updateFormData}
              />
              <FormInput
                ref={email}
                required
                autoComplete="on"
                error={validatorActive && !validator.isEmail(email?.current?.value)}
                id="email"
                label="Your Email"
                type="email"
                onBlur={updateFormData}
              />
              <FormInput
                autoComplete="on"
                id="company"
                label="Company name"
                type="text"
                onBlur={updateFormData}
              />
              <FormSelect
                ref={source}
                required
                error={validatorActive && source?.current?.value === "Please Select"}
                id="source"
                label="How did You here about us?"
                options={[
                  `Please Select`,
                  `Google`,
                  `Shopify Partners list`,
                  `Facebook/Instagram`,
                  `Referral`,
                  `Other`,
                ]}
                onBlur={updateFormData}
              />
            </div>

            <div className="form-group form-group--border">
              <FormCheckboxGroup
                id="interest"
                label="Interest"
                options={[
                  `Basic Shopify Site`,
                  `Pro Shopify Site`,
                  `Pro+ Shopify Site`,
                  `Vend POS Integration`,
                  "Migrating Site",
                  "App Integrations",
                  `Maintenance Plan`,
                  `E-Mail Marketing`,
                  `Custom Design`,
                  `Custom Functionality`,
                  `Page Review & Analysis`,
                  `Sales Channel Setup`,
                  `Support`,
                  `General Question`,
                ]}
                onChange={updateFormData}
              />
            </div>

            <div className="form-group form-group--grid">
              <FormInput
                ref={website}
                error={
                  validatorActive &&
                  !validator.isURL(website.current.value) &&
                  !validator.isEmpty(website.current.value)
                }
                id="website"
                label="Current Website"
                type="website"
                onBlur={updateFormData}
              />
              <FormSelect
                id="current-platform"
                label="Current e-commerce platform"
                options={[
                  `Please Select`,
                  `I don't have a site yet.`,
                  `Shopify`,
                  `BigCommerce`,
                  `Magento`,
                  `PrestaShop`,
                  `WooCommerce`,
                  `Volusion`,
                  `Other`,
                ]}
                onBlur={updateFormData}
              />
              <FormSelect
                id="budget"
                label="Budget"
                options={[
                  `Please Select`,
                  `less than R15,000`,
                  `R15,000 - R25,000`,
                  `R25,000 - R50,000`,
                  `R50,000 - R75,000`,
                  `R75,000 +`,
                ]}
                onBlur={updateFormData}
              />
              <FormSelect
                id="timeline"
                label="Timeline"
                options={[
                  `Please Select`,
                  `Yesterday!`,
                  `0 - 2 Weeks`,
                  `2 - 4 Weeks`,
                  `4 - 8 Weeks`,
                  `+8 Weeks`,
                ]}
                onBlur={updateFormData}
              />
            </div>

            <div className="form-group">
              <FormTextarea
                ref={message}
                required
                error={validatorActive && validator.isEmpty(message.current.value)}
                id="message"
                label="Send a Message"
                rows={5}
                spellCheck="false"
                onBlur={updateFormData}
              />
            </div>
          </main>
          <footer className="card-form__footer">
            {submitted
              ? <p style={{ flex: 1 }}>Thank you for your Message.</p>
              : <>
                  <p>
                    You can also email us directly at{" "}
                    <Link href="mailto:info@tellmann.co.za">info@tellmann.co.za</Link>
                  </p>
                  <Button branded medium secondary type="submit">
                    <i className={cn({ submitting })}>
                      <Loading />
                    </i>
                    <span className={cn({ submitting })}>Submit</span>
                  </Button>
                </>}
          </footer>
        </form>
      </div>
      <style jsx>{`
        main {
          max-height: 1800px;
          transition: max-height ease 0.4s 0s, padding ease 0.2s 0.2s;
          height: auto;
          padding: 24px;

          &.submitted {
            max-height: 0px;
            padding: 0 24px;
          }
        }

        .card-form {
          overflow: hidden;
          margin-bottom: auto;
          border-radius: 5px;
          background-color: var(--color-background);
          box-shadow: 0 30px 60px rgba(var(--color-text-rgb), 0.12);
        }

        footer {
          position: relative;
          z-index: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 24px;
          background-color: var(--primary);
          text-align: center;

          i {
            position: absolute;
            opacity: 0;
            display: flex;
            align-items: center;
            font-size: 26px;

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

        .form-group--grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
          grid-gap: 24px;
        }

        .form-group:not(:last-of-type) {
          margin-bottom: 24px;
        }

        .form-group--border {
          padding: 24px 0;
          border-top: var(--border);
          border-bottom: var(--border);
        }
      `}</style>
    </>
  );
};
