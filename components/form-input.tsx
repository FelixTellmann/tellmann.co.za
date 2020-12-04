import cn from "classnames";
import { FC, forwardRef, InputHTMLAttributes } from "react";
import { FiAlertCircle } from "react-icons/fi";

type FormInputProps = {
  label: string
  id: string
  error?: boolean
  ref?
};

export const FormInput: FC<FormInputProps & InputHTMLAttributes<any>> = forwardRef(({ label, id, error = false, type, required, ...props }, ref) => {
  let errorMessage = "";
  let inputType = type;
  switch (type) {
    case "email": {
      errorMessage = `Please enter a valid Email`;
      break;
    }
    case "website" : {
      errorMessage = `Please enter a valid URL`;
      inputType = "text";
      break;
    }
    default: {
      errorMessage = `Please enter ${label.toLowerCase()}`;
    }
  }
  
  return <>
    <label>
      <div className={cn("label", { required })}>{label}</div>
      <div className={cn("error", { active: error })}><i><FiAlertCircle /></i><span><b>Error:</b> {errorMessage}</span></div>
      <input id={id} ref={ref} type={inputType} {...props} />
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
        font-weight: 500;
        text-transform: uppercase;

        &.required {
          &:after {
            display: inline-block;
            padding-left: 4px;
            content: '*';
            color: red;
          }
        }
      }

      input {
        order: 1;
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
});