import { createElement, FC } from "react";
import { CSS, useStyledSystem } from "use-styled-system";
import css from "styled-jsx/css";

type BoxProps = {
  mobile?: boolean
  desktop?: boolean
  id?: string;
  className?: string;
  as?: string | FC<{ className: string }>;
};

export const Box: FC<BoxProps & CSS> = ({ mobile, desktop, as = "div", children, className = "", ...props }) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Space: true, Layout: true, Color: true, Decor: true });
  const { className: cssClass, styles } = css.resolve`${styleJsx}`;
  mobile && (className += " mobile");
  desktop && (className += " desktop");
  
  return (
    <>
      {createElement(as, { className: `${cssClass} ${className}`, ...nonCssProps }, children)}
      {styles}
    </>
  );
};


