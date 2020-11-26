import { FC, useState } from "react";
import { FormInput } from "./form-input";

export const NewsletterSignup: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  
  const submit = async (e, ref) => {
    setSubmitting(true);
    setErrorMessage("");
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: ref.current.value
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });
    
    setSubmitting(false);
    
    const { error } = await res.json();
    if (error) {
      setErrorMessage(error.replace(/(^\["|"]$)/gi, ""));
      return;
    }
    setSuccess(true);
  };
  
  return (
    <>
      <div className="signup">
        <h2 className="h3">Subscribe to my newsletter</h2>
        <p>Get emails from me about web development, tech, and early access to new articles.</p>
        <section>
          {
            success
            ? <p>
              Thank you for subscribing, you'll receive a welcome email shortly.
            </p>
            : <FormInput
              label="Email Address"
              id="email"
              placeholder="Your email address"
              type="email"
              autoComplete="on" />
          }
          {errorMessage
           ? <p>{errorMessage}</p>
           : null}
        </section>
      </div>
      <style jsx>{`
        .signup {
          padding: 3.2rem;
          border-radius: 0.4rem;
          border: 1px solid var(--color-card-highlight-border);
          background-color: var(--color-card-highlight);
        }

        section {
          margin-top: 1.6rem;
          color: var(--color-text);
        }
      `}</style>
    </>
  );
};
