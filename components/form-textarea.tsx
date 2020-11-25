import { FC, TextareaHTMLAttributes } from "react";

type FormTextareaProps = {
  label: string
  id: string
};

export const FormTextarea: FC<FormTextareaProps & TextareaHTMLAttributes<any>> = ({ label, id, ...props }) => {
  return <>
    <label>
      <div className="label">{label}</div>
      <textarea id={id} {...props} />
    </label>
    <style jsx>{`
      label {
        display: flex;
        flex-direction: column;
      }

      .label {
        margin-bottom: 12px;
        color: var(--color-text-faded);
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 500;
      }

      textarea {
        width: 100%;
        resize: none;
        display: flex;
        height: unset;
        min-width: 0;
        padding: 10px 12px;
        border: var(--border);
        border-radius: 5px;
        outline: none;
        background: var(--color-background);
        color: var(--color-text);
        font: inherit;
        font-size: 14px;
        line-height: normal;
        transition: border-color .15s ease;
        appearance: none;

        &:focus {
          border-color: var(--color-text-faded);
        }
      }
    `}</style>
  </>;
};