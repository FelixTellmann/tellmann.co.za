import cn from "classnames";
import { FC, forwardRef, TextareaHTMLAttributes } from "react";
import { FiAlertCircle } from "react-icons/fi";

type FormTextareaProps = {
  label: string
  id: string
  error: boolean
  ref
};

export const FormTextarea: FC<FormTextareaProps & TextareaHTMLAttributes<any>> = forwardRef(({ label, id, error, ...props }, ref) => {
  const errorMessage = `Please enter a message or question`;
  
  return <>
    <label>
      <div className="label">{label}</div>
      <div className={cn("error", { active: error })}><i><FiAlertCircle /></i><span><b>Error:</b> {errorMessage}</span></div>
      <textarea id={id} ref={ref} {...props} />
    </label>
    <style jsx>{`
      label {
        display: flex;
        flex-direction: column;
      }

      .error {
        display: none;
        align-items: center;
        order: 2;
        padding: 12px 4px;
        color: red;
        font-size: 14px;;
        font-weight: 500;
        line-height: 1.4;

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

        & + textarea {
          border-color: red;
        }
      }

      .label {
        margin-bottom: 12px;
        color: var(--color-text-faded);
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
      }

      textarea {
        width: 100%;
        min-width: 0;
        height: unset;
        display: flex;
        order: 1;
        padding: 10px 12px;
        border: var(--border);
        border-radius: 5px;
        outline: none;
        background: var(--color-background);
        resize: none;
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