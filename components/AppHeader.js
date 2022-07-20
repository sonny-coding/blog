import React from "react";
import { Image, useDisclosure } from "@chakra-ui/react";
import { Flex, Spacer, Box, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import AppDrawer from "./AppDrawer";
import ChakraNextLink from "./ChakraLink";

const CustomIconButton = ({ Icon, ...props }) => {
  return <IconButton icon={<Icon />} {...props} size="lg" ml="1rem" />;
};
const HamburgerNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomIconButton
        Icon={HamburgerIcon}
        onClick={onOpen}
      ></CustomIconButton>
      {isOpen && <AppDrawer isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

const Logo = () => {
  const dimension = 70;
  return (
    <ChakraNextLink href="/" chakraLinkProps={{ _focus: { outline: 0 } }}>
      <Image
        src="/profile.jpg"
        alt="logo"
        height={dimension}
        width={dimension}
        borderRadius=".5rem"
      />
    </ChakraNextLink>
  );
};

function AppHeader() {
  return (
    <Box px="2rem" pt="5rem">
      <Flex alignItems="center">
        <Logo />
        <Spacer />
        <CustomIconButton Icon={SearchIcon} />
        {/* <CustomIconButton Icon={HamburgerIcon} /> */}
        <HamburgerNav />
      </Flex>
    </Box>
  );
}

export default AppHeader;
