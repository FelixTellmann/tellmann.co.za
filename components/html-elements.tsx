/* eslint-disable react/jsx-fragments */
import cn from "classnames";
import { LayoutProps, useJsxSystem } from "integrated-ui";
import React, { ButtonHTMLAttributes, createElement, FC, forwardRef, Fragment } from "react";
import _JSXStyle from "styled-jsx/style";

export type PseudoSelectorProps = {
  _hover?: LayoutProps
  _active?: LayoutProps
  _activeLink?: LayoutProps
  _after?: LayoutProps
  _autofill?: LayoutProps
  _before?: LayoutProps
  _checked?: LayoutProps
  _empty?: LayoutProps
  _even?: LayoutProps
  _expanded?: LayoutProps
  _first?: LayoutProps
  _focus?: LayoutProps
  _focusVisible?: LayoutProps
  _focusWithin?: LayoutProps
  _fullScreen?: LayoutProps
  _grabbed?: LayoutProps
  _hidden?: LayoutProps
  _highlighted?: LayoutProps
  _indeterminate?: LayoutProps
  _invalid?: LayoutProps
  _last?: LayoutProps
  _loading?: LayoutProps
  _notFirst?: LayoutProps
  _notLast?: LayoutProps
  _odd?: LayoutProps
  _placeholder?: LayoutProps
  _pressed?: LayoutProps
  _readOnly?: LayoutProps
  _selected?: LayoutProps
  _selection?: LayoutProps
  _valid?: LayoutProps
  _visited?: LayoutProps
}

export type CssProps = LayoutProps & PseudoSelectorProps

type FactoryProps = {
  className?: string
  type?: string
  children?
  ref?
}

export const Factory = (as: string): FC<any & FactoryProps & CssProps> => forwardRef(({
  type = as,
  className,
  children,
  ...props
}, ref) => {
  const { id, styles, filteredProps } = useJsxSystem(props);
  return <Fragment>
    {createElement(type, { className: cn(id ? `jsx-${id}` : "", className), ...filteredProps, ref }, children)}
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <_JSXStyle id={id}>{styles}</_JSXStyle>
  </Fragment>;
});

export const A: FC<FactoryProps & CssProps> = Factory("a");
export const Article: FC<FactoryProps & CssProps> = Factory("article");
export const Aside: FC<FactoryProps & CssProps> = Factory("aside");
export const B: FC<FactoryProps & CssProps> = Factory("b");
export const Br: FC<FactoryProps & CssProps> = Factory("br");
export const Blockquote: FC<FactoryProps & CssProps> = Factory("blockquote");
export const Button: FC<ButtonHTMLAttributes<any> & FactoryProps & CssProps> = Factory("button");
export const Code: FC<FactoryProps & CssProps> = Factory("code");
export const Div: FC<FactoryProps & CssProps> = Factory("div");
export const Figure: FC<FactoryProps & CssProps> = Factory("figure");
export const Footer: FC<FactoryProps & CssProps> = Factory("footer");
export const Form: FC<FactoryProps & CssProps> = Factory("form");
export const H1: FC<FactoryProps & CssProps> = Factory("h1");
export const H2: FC<FactoryProps & CssProps> = Factory("h2");
export const H3: FC<FactoryProps & CssProps> = Factory("h3");
export const H4: FC<FactoryProps & CssProps> = Factory("h4");
export const H5: FC<FactoryProps & CssProps> = Factory("h5");
export const H6: FC<FactoryProps & CssProps> = Factory("h6");
export const Header: FC<FactoryProps & CssProps> = Factory("header");
export const Hr: FC<FactoryProps & CssProps> = Factory("hr");
export const I: FC<FactoryProps & CssProps> = Factory("i");
export const Input: FC<FactoryProps & CssProps> = Factory("input");
export const Label: FC<FactoryProps & CssProps> = Factory("label");
export const Li: FC<FactoryProps & CssProps> = Factory("li");
export const Main: FC<FactoryProps & CssProps> = Factory("main");
export const Mark: FC<FactoryProps & CssProps> = Factory("mark");
export const Nav: FC<FactoryProps & CssProps> = Factory("nav");
export const Ol: FC<FactoryProps & CssProps> = Factory("ol");
export const P: FC<FactoryProps & CssProps> = Factory("p");
export const Picture: FC<FactoryProps & CssProps> = Factory("picture");
export const Pre: FC<FactoryProps & CssProps> = Factory("pre");
export const Q: FC<FactoryProps & CssProps> = Factory("q");
export const S: FC<FactoryProps & CssProps> = Factory("s");
export const Section: FC<FactoryProps & CssProps> = Factory("section");
export const Select: FC<FactoryProps & CssProps> = Factory("select");
export const Small: FC<FactoryProps & CssProps> = Factory("small");
export const Span: FC<FactoryProps & CssProps> = Factory("span");
export const Strong: FC<FactoryProps & CssProps> = Factory("strong");
export const U: FC<FactoryProps & CssProps> = Factory("u");
export const Ul: FC<FactoryProps & CssProps> = Factory("ul");

