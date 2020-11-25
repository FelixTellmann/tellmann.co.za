import { FC, SelectHTMLAttributes, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type FormSelectProps = {
  label: string
  options: string[]
};

export const FormSelect: FC<FormSelectProps & SelectHTMLAttributes<any>> = ({ label, options = [], ...props }) => {
  const [selected, setSelected] = useState(0);
  
  return <>
    <label>
      <div className="label">{label}</div>
      <div className="select">
        <select {...props} onSelect={(e) => { setSelected(1); }}>
          {options.map((opt, i) => (
            <option key={opt} value={opt} selected={i === selected}>{opt}</option>
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

      .label {
        margin-bottom: 12px;
        color: var(--color-text-faded);
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 500;
      }

      .select {
        display: flex;
        align-items: center;
        position: relative;

        :global(svg) {
          position: absolute;
          right: 12px;
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
};