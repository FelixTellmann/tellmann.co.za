import LoadingIcon from "public/icons/loading.svg";
import { FC, useState } from "react";
import { Input } from "./input";

export const NewsletterSignup: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = async (e, ref) => {
    setSubmitting(true);
    setErrorMessage("");
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: ref.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
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
        <div className="signup-wrapper">
          <h2 className="h3">Subscribe to our newsletter</h2>
          <p>
            Get emails from us about the latest trends in ecommerce, Shopify and early access to our
            latest articles. We send out a Newsletter 1-2 times per month, and you can unsubscribe
            at any time. No spam guaranteed.
          </p>
          <section>
            {success
              ? <p>Thank you for subscribing, you&apos;ll receive a welcome email shortly.</p>
              : <Input
                  secondary
                  autoComplete="on"
                  button={submitting ? <LoadingIcon style={{ fontSize: `28px` }} /> : `Subscribe`}
                  placeholder="Your email address"
                  submit={submit}
                  submitting={submitting}
                  type="email"
                />}
            {errorMessage ? <p>{errorMessage}</p> : null}
          </section>
        </div>
      </div>
      <style jsx>{`
        .signup {
          padding: 0.1rem;
          border-radius: 0.4rem;
          border: var(--card-border);
          background: var(--card-background);

          &:hover,
          &:focus,
          &:active {
            background: var(--card-background-hover);
            border: var(--card-border-hover);
            box-shadow: var(--card-shadow-hover);
          }
        }

        .signup-wrapper {
          padding: 3.1rem;
        }

        section {
          margin-top: 1.6rem;
          color: var(--color-text);
        }
      `}</style>
    </>
  );
};
