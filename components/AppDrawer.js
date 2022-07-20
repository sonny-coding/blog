import {
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ListItem,
  Heading,
  List,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import ChakraNextLink from "./ChakraLink";

import React from "react";

const DrawerList = ({ onClose }) => {
  const listItems = [
    { name: "Home", link: "/main" },
    { name: "Categories", link: "/categories" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <List>
      {listItems.map((item) => {
        return (
          <ChakraNextLink
            key={nanoid()}
            ChakraComponent={ListItem}
            href="/"
            noUnderline
            sx={{ display: "block", mt: 5, fontSize: "lg" }}
            onClick={onClose}
          >
            {item.name}
          </ChakraNextLink>
        );
      })}
    </List>
  );
};

function AppDrawer({ isOpen, onClose }) {
  return (
    <Drawer size="md" placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader py={8}>
            <Heading>Blog</Heading>
          </DrawerHeader>
          <DrawerBody>
            <DrawerList onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default AppDrawer;
