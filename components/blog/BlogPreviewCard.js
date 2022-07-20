import React from "react";
import { Image } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  LinkBox,
  LinkOVerlay,
} from "@chakra-ui/react";
import ChakraNextLink, { ChakraButtonLink } from "../ChakraLink";

function BlogPreviewCard() {
  return (
    <>
      <VStack as={LinkBox} align="start" spacing="1rem" mb="2rem">
        <Box w="100%">
          <Image
            src="/unsplash.jpg"
            alt="pic"
            width={800}
            height={450}
            layout="responsive"
            //   objectFit="cover"
          />
        </Box>
        {/* <Heading>Lorem ipsum dolor sit amet. </Heading> */}
        <ChakraNextLink ChakraComponent={Text} href="/main" overlay>
          Ut elit magna reprehenderit ut reprehenderit.
        </ChakraNextLink>

        <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
          <Text>Thu 18 2001</Text>
          <Text>100 views</Text>
          <Text>4 min read</Text>
        </HStack>
        <Text noOfLines={3}>
          Non adipisicing proident nostrud sit occaecat est mollit esse non
          ipsum. Anim dolor nulla nulla est consectetur aute voluptate magna.
          Ipsum consectetur commodo laborum proident ipsum id eu cillum velit
          nostrud ut cillum enim.
        </Text>
        {/* <Button textTransform="uppercase">Read more</Button> */}
        <ChakraButtonLink textTransform="uppercase" href="/blog">
          Read more
        </ChakraButtonLink>
      </VStack>
    </>
  );
}

export default BlogPreviewCard;
