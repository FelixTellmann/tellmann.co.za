import cn from "classnames";
import { FC } from "react";
import { FiX } from "react-icons/fi";
import { A, Button, Div, Span } from "./html-elements";
import { Link } from "./link";

type HeaderBannerProps = {
  href: string;
  onClose: (e) => void;
  showMobileNav: boolean;
  title: (string | JSX.Element) | (string | JSX.Element)[];
};

export const HeaderBanner: FC<HeaderBannerProps> = ({ title, href, onClose, showMobileNav }) => {
  return (
    <>
      <Div
        align="center"
        bg={showMobileNav ? `--color-text` : `--color-grey-bg-2`}
        borderBottom={showMobileNav ? `1px solid var(--color-text)` : `--border`}
        className={cn("banner", { showMobileNav })}
        color={showMobileNav ? "--color-grey-bg-2" : `--color-text`}
        d="flex"
        h={40}
        justify="center"
        mx="auto"
        px="--section-x-padding"
        transition="0.2s background ease, 0.2s borderBottom ease, 0.2s color ease"
        w="100%"
      >
        {Array.isArray(title)
          ? title.map((item, i) => (
              <Link key={i} href={href}>
                <A
                  align="center"
                  d={i === 0 ? ["flex", "none"] : ["none", "flex"]}
                  fontSize={14}
                  fontWeight={600}
                  justifySelf={i === 0 ? "flex-start" : "center"}
                  mr={i === 0 ? "auto" : "unset"}
                  textDecoration="none"
                  whiteSpace="nowrap"
                >
                  {item}
                  <Span
                    align="center"
                    borderLeft="--border"
                    d={["none", "inline-flex"]}
                    ml={12}
                    pl={12}
                  >
                    Read →
                  </Span>
                </A>
              </Link>
            ))
          : <Link href={href}>
              <a>
                {title} <span>Read &nbsp;→</span>
              </a>
            </Link>}
        <Button
          _hover={{ color: `--nav-color` }}
          align="center"
          aria-label="Close Banner"
          color="inherit"
          cursor="pointer"
          d="flex"
          fontSize={18}
          position="absolute"
          px="--section-x-padding"
          right={0}
          type="button"
          onClick={onClose}
        >
          <FiX />
        </Button>
        {/* </div> */}
      </Div>
    </>
  );
};
