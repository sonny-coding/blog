import React from "react";
import { Center, Container, Text } from "@chakra-ui/react";
import AppHeader from "./AppHeader";
import ToggleColorModeButton from "./ToggleColorModeButton";

function PageLayout({ children }) {
  return (
    <>
      <AppHeader />
      <Container px={4} maxW="5xl">
        {children}
      </Container>
      <Center m="2rem 0">
        <Text>Copyright Sonny Blog 2022</Text>
      </Center>
      <ToggleColorModeButton />
    </>
  );
}

export default PageLayout;
