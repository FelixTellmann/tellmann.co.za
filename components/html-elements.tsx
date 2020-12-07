/* eslint-disable react/jsx-fragments */
import cn from "classnames";
import { CssProps, useJsxSystem } from "integrated-ui";
import React, { createElement, FC, HTMLAttributes } from "react";
import _JSXStyle from "styled-jsx/style";

type FactoryProps = {
  className?: string
  type?: string
  children?
  forwardRef?
}

export const FactoryWithRef = (as: string): FC<any & FactoryProps & CssProps> => React.forwardRef(({
  type = as,
  className,
  children,
  ...props
}, ref) => {
  const { id, styles, filteredProps } = useJsxSystem(props);
  return <>
    {createElement(type, { className: cn(id ? `jsx-${id}` : "", className), ...filteredProps, ref }, children)}
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <_JSXStyle id={id}>{styles}</_JSXStyle>
  </>;
});

export const Factory = (as: string): FC<any & FactoryProps & CssProps> => ({ type = as, className, children, forwardRef, ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id, styles, filteredProps } = useJsxSystem(props);
  return <>
    {createElement(type, { className: cn(id ? `jsx-${id}` : "", className), ...filteredProps, ref: forwardRef }, children)}
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <_JSXStyle id={id}>{styles}</_JSXStyle>
  </>;
};

type HtmlElementProps = HTMLAttributes<any> & FactoryProps & CssProps

export const ANoRef: FC<HtmlElementProps> = Factory("a");
export const A: FC<HtmlElementProps> = FactoryWithRef("a");
export const Article: FC<HtmlElementProps> = Factory("article");
export const Aside: FC<HtmlElementProps> = Factory("aside");
export const B: FC<HtmlElementProps> = Factory("b");
export const Br: FC<HtmlElementProps> = Factory("br");
export const Blockquote: FC<HtmlElementProps> = Factory("blockquote");
export const Button: FC<HtmlElementProps> = Factory("button");
export const Code: FC<HtmlElementProps> = Factory("code");
export const Div: FC<HtmlElementProps> = Factory("div");
export const Figure: FC<HtmlElementProps> = Factory("figure");
export const Footer: FC<HtmlElementProps> = Factory("footer");
export const Form: FC<HtmlElementProps> = Factory("form");
export const H1: FC<HtmlElementProps> = Factory("h1");
export const H2: FC<HtmlElementProps> = Factory("h2");
export const H3: FC<HtmlElementProps> = Factory("h3");
export const H4: FC<HtmlElementProps> = Factory("h4");
export const H5: FC<HtmlElementProps> = Factory("h5");
export const H6: FC<HtmlElementProps> = Factory("h6");
export const Header: FC<HtmlElementProps> = Factory("header");
export const Hr: FC<HtmlElementProps> = Factory("hr");
export const I: FC<HtmlElementProps> = Factory("i");
export const Input: FC<HtmlElementProps> = Factory("input");
export const Label: FC<HtmlElementProps> = Factory("label");
export const Li: FC<HtmlElementProps> = Factory("li");
export const Main: FC<HtmlElementProps> = Factory("main");
export const Mark: FC<HtmlElementProps> = Factory("mark");
export const Nav: FC<HtmlElementProps> = Factory("nav");
export const Ol: FC<HtmlElementProps> = Factory("ol");
export const P: FC<HtmlElementProps> = Factory("p");
export const Picture: FC<HtmlElementProps> = Factory("picture");
export const Pre: FC<HtmlElementProps> = Factory("pre");
export const Q: FC<HtmlElementProps> = Factory("q");
export const S: FC<HtmlElementProps> = Factory("s");
export const Section: FC<HtmlElementProps> = Factory("section");
export const Select: FC<HtmlElementProps> = Factory("select");
export const Small: FC<HtmlElementProps> = Factory("small");
export const Span: FC<HtmlElementProps> = Factory("span");
export const Strong: FC<HtmlElementProps> = Factory("strong");
export const U: FC<HtmlElementProps> = Factory("u");
export const Ul: FC<HtmlElementProps> = Factory("ul");

