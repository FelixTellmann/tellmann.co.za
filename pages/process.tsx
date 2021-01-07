import { LayoutProps, PseudoSelectorProps } from "next-styled-system";
import { FC, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react";

const Box: ForwardRefExoticComponent<LayoutProps & PseudoSelectorProps & HTMLAttributes<any> & { as?: string } & RefAttributes<unknown>>;

type ProcessProps = {};

export const Process: FC<ProcessProps> = (props) => {
  return <>
    <Box as="section" d="flex" p={4} minH="60vh" py={8} justify="center" direction="column" textAlign="center">
      <Box as="h1" fz={["23vw", 128]} weight={800} letterSpacing="-.08em">Develop.</Box>
      <Box as="h1" fz={["23vw", 128]} weight={800} letterSpacing="-.08em">Preview.</Box>
      <Box as="h1" fz={["23vw", 128]} weight={800} letterSpacing="-.08em">Ship.</Box>
    </Box>
    <Box as="section" d="flex" align="center" justify="center" pb={8} flexWrap={[`wrap`, `nowrap`]}>
      <Box as="button"
           transition="all 0.2s ease 0s"
           py={4}
           px={6}
           fz={3}
           color="white"
           weight={500}
           letterSpacing="0.03em"
           border="1px solid transparent"
           borderRadius={1}
           m={3}
           whiteSpace="nowrap"
           bgc="black"
           w={[`100%`, `auto`]}
           _hfa={{
             bgc: `white`,
             border: `1px solid black`,
             color: `black`
           }}>Start Deploying</Box>
      <Box as="button"
           transition="all 0.2s ease 0s"
           py={4}
           px={6}
           fz={3}
           color="#666"
           weight={500}
           letterSpacing="0.03em"
           border="1px solid #eaeaea"
           borderRadius={1}
           whiteSpace="nowrap"
           w={[`100%`, `auto`]}
           m={3}
           _hfa={{
             border: `1px solid black`,
             color: `black`
           }}>Get a Demo</Box>
    </Box>
  </>;
};

export default Process;