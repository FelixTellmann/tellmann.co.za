import cn from "classnames";
import { FC, forwardRef, SelectHTMLAttributes, useState } from "react";
import { FiAlertCircle, FiChevronDown } from "react-icons/fi";

type FormSelectProps = {
  label: string
  options: string[]
  error?: boolean
  ref?
};

export const FormSelect: FC<FormSelectProps & SelectHTMLAttributes<any>> = forwardRef(({ label, required, error, options = [], ...props }, ref) => {
  const [selected, setSelected] = useState(options[0]);
  const errorMessage = "Please choose an Option";
  
  return <>
    <label>
      <div className={cn("label", { required })}>{label}</div>
      <div className={cn("error", { active: error })}><i><FiAlertCircle /></i><span><b>Error:</b> {errorMessage}</span></div>
      <div className="select">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <select {...props} ref={ref} onChange={(e) => { setSelected(e.target.value); }} value={selected}>
          {options.map((opt) => (
            <option key={opt} value={opt} disabled={opt === "Please Select"}>{opt}</option>
          ))}
        </select>
        <FiChevronDown />
      </div>
    
    </label>
    <style jsx>{`
      label {
        display: flex;
        flex-direction: column;
      }

      .error {
        display: none;
        align-items: center;
        padding: 12px 4px;
        color: red;
        font-size: 14px;;
        font-weight: 500;
        line-height: 1.4;
        order: 2;

        b {
          font-weight: 700;
        }

        i {
          display: flex;
          align-items: center;
          margin-right: 8px;
          font-size: 16px;
        }
      }

      .error.active {
        display: flex;

        & + input {
          border-color: red;
        }
      }

      .label {
        margin-bottom: 12px;
        color: var(--color-text-faded);
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 500;

        &.required {
          &:after {
            display: inline-block;
            padding-left: 4px;
            content: '*';
            color: red;
          }
        }
      }

      .select {
        display: flex;
        align-items: center;
        position: relative;

        :global(svg) {
          position: absolute;
          right: 12px;
          user-select: none;
          pointer-events: none;
        }
      }

      select {
        width: 100%;
        min-width: 0;
        height: 40px;
        display: inline-flex;
        padding: 0 36px 0 12px;
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
});