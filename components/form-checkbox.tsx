import { FC, InputHTMLAttributes } from "react";
import { FaCheck } from "react-icons/fa";

type FormCheckboxProps = {
  label: string | { label: string, icon: JSX.Element, background?: string }
};

export const FormCheckbox: FC<FormCheckboxProps & InputHTMLAttributes<any>> = ({ label = "", ...props }) => {
  
  return <>
    <label>
      <input className="hidden" type="checkbox" {...props} />
      <span className="checkbox"><FaCheck /></span>
      {
        typeof label === "string"
        ? <span className="label">{label}</span>
        : <span className="label"><i style={{ background: label.background }}>{label.icon}</i>{label.label}</span>
      }
    </label>
    <style jsx>{`
      label {
        display: flex;
        align-items: center;
        cursor: pointer;
        line-height: 1.6;
      }

      .label {
        display: flex;
        align-items: center;
        margin-left: 16px;
        color: var(--color-text-faded);
        font-size: 16px;
      }

      i {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        border-radius: 100%;
        background: var(--secondary);
        color: var(--color-background);
        font-size: 13px;
      }

      .checkbox {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        border: var(--border);
        border-color: var(--color-text-faded);
        border-radius: 3px;
        background-color: transparent;
        transition: 0.15s ease;

        :global(svg) {
          opacity: 0;
          color: var(--color-background);
          transition: 0.15s ease;
        }
      }

      input:checked + .checkbox {
        border-color: var(--color-text);
        background: var(--color-text);

        :global(svg) {
          opacity: 1;
        }
      }
    `}</style>
  </>;
};