import { CSSProperties, FC, InputHTMLAttributes } from "react";
import { FormCheckbox } from "./form-checkbox";

type FormCheckboxGroupProps = {
  label: string
  options: (string | { label: string, icon: JSX.Element, background?: string })[]
  style?: CSSProperties
};

export const FormCheckboxGroup: FC<FormCheckboxGroupProps & InputHTMLAttributes<any>> = ({ label, options = [], style = {}, ...props }) => {
  style["--grid-rows"] = Math.ceil(options.length / 2);
  style["--grid-rows-total"] = options.length;
  
  return <>
    <div>{label}</div>
    <ul style={style}>
      {
        options.map((opt, i) => (
          <li key={i}><FormCheckbox label={opt} {...props} /></li>
        ))
      }
    </ul>
    <style jsx>{`
      div {
        grid-column: 1/-1;
        color: var(--color-text-faded);
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 12px;
      }

      ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        grid-template-rows: repeat(auto-fill, 1fr);
        grid-gap: 24px;
        grid-auto-flow: row;
      }

      li {
        min-width: 260px;
      }
    `}</style>
  </>;
};