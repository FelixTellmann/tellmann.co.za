import cn from "classnames";
import { FC } from "react";
import { FiX } from "react-icons/fi";
import { A, Button, Div, Span } from "./html-elements";
import { Link } from "./link";

type HeaderBannerProps = {
  title: (string | JSX.Element) | (string | JSX.Element) []
  href: string
  onClose: (e) => void
  showMobileNav: boolean
};

export const HeaderBanner: FC<HeaderBannerProps> = ({ title, href, onClose, showMobileNav }) => {
  return <>
    <Div w="100%"
         h={40}
         d="flex"
         bg={showMobileNav ? `--color-text` : `--color-grey-bg-2`}
         color={showMobileNav ? "--color-grey-bg-2" : `--color-text`}
         transition="0.2s background ease, 0.2s borderBottom ease, 0.2s color ease"
         borderBottom={showMobileNav ? `1px solid var(--color-text)` : `--border`}
         align="center"
         justify="center"
         mx="auto"
         px="--section-x-padding"
         className={cn("banner", { showMobileNav })}>
  
      {Array.isArray(title)
       ? title.map((item, i) => (
          <Link key={i} href={href}>
            <A fontSize={14}
               d={i === 0 ? ["flex", "none"] : ["none", "flex"]}
               align="center"
               justifySelf={i === 0 ? "flex-start" : "center"}
               mr={i === 0 ? "auto" : "unset"}
               textDecoration="none"
               fontWeight={600}
               whiteSpace="nowrap">{item}
              <Span d={["none", "inline-flex"]}
                    align="center"
                    pl={12}
                    ml={12}
                    borderLeft="--border"
              >Read →</Span>
            </A>
          </Link>
        ))
       : <Link href={href}><a>{title} <span>Read &nbsp;→</span></a></Link>}
      <Button position="absolute"
              right={0}
              px="--section-x-padding"
              fontSize={18}
              d="flex"
              align="center"
              cursor="pointer"
              color="inherit"
              _hover={{ color: `--nav-color` }}
              aria-label="Close Banner" type="button" onClick={onClose}><FiX /></Button>
      {/* </div> */}
    </Div>
  </>;
};