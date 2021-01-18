import { Element } from "next-styled-system";

/*
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
    {/!* eslint-disable-next-line react/jsx-pascal-case *!/}
    {id ? <_JSXStyle id={id}>{styles}</_JSXStyle> : null}
  </>;
});

export const Factory = (as: string): FC<any & FactoryProps & CssProps> => ({ type = as, className, children, forwardRef, ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id, styles, filteredProps } = useJsxSystem(props);
  return <>
    {createElement(type, { className: cn(id ? `jsx-${id}` : "", className), ...filteredProps, ref: forwardRef }, children)}
    {/!* eslint-disable-next-line react/jsx-pascal-case *!/}
    {id ? <_JSXStyle id={id}>{styles}</_JSXStyle> : null}
  </>;
};

type HtmlElementProps = HTMLAttributes<any> & FactoryProps & CssProps */

export const ANoRef = Element("a");
export const A = Element("a");
export const Article = Element("article");
export const Aside = Element("aside");
export const B = Element("b");
export const Br = Element("br");
export const Blockquote = Element("blockquote");
export const Button = Element("button");
export const Code = Element("code");
export const Div = Element("div");
export const Figure = Element("figure");
export const Footer = Element("footer");
export const Form = Element("form");
export const H1 = Element("h1");
export const H2 = Element("h2");
export const H3 = Element("h3");
export const H4 = Element("h4");
export const H5 = Element("h5");
export const H6 = Element("h6");
export const Header = Element("header");
export const Hr = Element("hr");
export const I = Element("i");
export const Input = Element("input");
export const Label = Element("label");
export const Li = Element("li");
export const Main = Element("main");
export const Mark = Element("mark");
export const Nav = Element("nav");
export const Ol = Element("ol");
export const P = Element("p");
export const Picture = Element("picture");
export const Pre = Element("pre");
export const Q = Element("q");
export const S = Element("s");
export const Section = Element("section");
export const Select = Element("select");
export const Small = Element("small");
export const Span = Element("span");
export const Strong = Element("strong");
export const U = Element("u");
export const Ul = Element("ul");

