import scrollTo from "lib/scrollTo";
import NextLink, { LinkProps } from "next/link";
import { Children, cloneElement, FC, isValidElement } from "react";

type LinkPropsAddons = {
  scrollDuration?: number;
  scrollOffset?: number;
};

export const Link: FC<LinkPropsAddons & LinkProps> = ({
  children,
  href,
  scrollOffset = 0,
  scrollDuration = 1000,
  ...props
}) => {
  let anchorElement = children;

  if (typeof href === "string" && (href.charAt(0) === "#" || href.includes("#"))) {
    const anchorReactElement = Children.only(children);
    const { onClick } = !isValidElement(anchorReactElement) || anchorReactElement.props;
    anchorElement = cloneElement(isValidElement(anchorReactElement) && anchorReactElement, {
      tabIndex: 0,
      role: "link",
      onClick: (e) => {
        onClick && onClick(e);
        if (document.getElementById(href?.replace(/^.*?#/, ""))) {
          e.preventDefault();
          const to = document.getElementById(href?.replace(/^.*?#/, ""))?.offsetTop || 0;
          scrollTo(scrollDuration, to + scrollOffset);
        }
      },
    });
  }

  return (
    <>
      <NextLink passHref href={href} {...props}>
        {anchorElement}
      </NextLink>
    </>
  );
};
