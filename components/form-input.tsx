import { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string
  id: string
};

export const FormInput: FC<FormInputProps & InputHTMLAttributes<any>> = ({ label, id, ...props }) => {
  return <>
    <label>
      <div className="label">{label}</div>
      <input id={id} {...props} />
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

      input {
        width: 100%;
        min-width: 0;
        height: 40px;
        display: inline-flex;
        padding: 0 12px;
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