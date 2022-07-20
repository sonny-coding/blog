import React from "react";
import { Image } from "@chakra-ui/react";
import { Flex, Spacer, Box, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

const CustomIconButton = ({ Icon, ...props }) => {
  return <IconButton icon={<Icon />} {...props} size="lg" ml="1rem" />;
};

const Logo = () => {
  const dimension = 70;
  return (
    <Image src="/profile.jpg" alt="logo" height={dimension} width={dimension} />
  );
};

function AppHeader() {
  return (
    <Box px="2rem" pt="5rem">
      <Flex alignItems="center">
        <Logo />
        <Spacer />
        <CustomIconButton Icon={SearchIcon} />
        <CustomIconButton Icon={HamburgerIcon} />
      </Flex>
    </Box>
  );
}

export default AppHeader;
