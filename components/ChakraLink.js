import Link from "next/link";

import {
  Link as ChakraLink,
  Text,
  Button,
  Box,
  LinkOverlay,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

const ChakraNextLink = ({
  href,
  ChakraComponent = Box,
  noUnderline,
  children,
  overlay,
  color,
  chakraLinkProps = {},
  ...props
}) => {
  const LinkComponent = overlay ? LinkOverlay : ChakraLink;

  if (noUnderline) {
    chakraLinkProps._hover = chakraLinkProps._hover || {}; // same as chakraLinkProps = {_hover: {}}
    chakraLinkProps._hover.textDecoration = "none";
  }
  return (
    <Link href={href} passHref>
      <LinkComponent color={color} {...chakraLinkProps}>
        <ChakraComponent {...props}>{children}</ChakraComponent>
      </LinkComponent>
    </Link>
  );
};
const ChakraButtonLink = (props) => (
  <ChakraNextLink
    ChakraComponent={Button}
    noUnderline
    {...props}
  ></ChakraNextLink>
);
const ChakraTextLink = (props) => {
  const { colorMode } = useColorMode();
  return (
    <ChakraLink
      ChakraComponent={Text}
      {...props}
      color={`teal.${colorMode === "light" ? 500 : 200}`}
    />
  );
};

export { ChakraButtonLink, ChakraTextLink };
export default ChakraNextLink;
