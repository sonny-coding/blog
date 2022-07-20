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
      <LinkComponent {...chakraLinkProps}>
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

export { ChakraButtonLink };
export default ChakraNextLink;
