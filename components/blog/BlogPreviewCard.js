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

function BlogPreviewCard({
  banner,
  title,
  description,
  slug,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
}) {
  const link = `/blogs/${slug}`;
  return (
    <>
      <VStack as={LinkBox} align="start" spacing="1rem" mb="2rem">
        <Box w="100%">
          <Image
            src={banner}
            alt={altText}
            width={800}
            height={450}
            layout="responsive"
            //   objectFit="cover"
          />
        </Box>
        {/* <Heading>Lorem ipsum dolor sit amet. </Heading> */}
        <ChakraNextLink ChakraComponent={Text} href={link} overlay>
          {title}
        </ChakraNextLink>

        <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
          <Text>{createdAt}</Text>
          <Text>{totalViews} views</Text>
          <Text>{readingTime}</Text>
        </HStack>
        <Text noOfLines={3}>{description}</Text>
        {/* <Button textTransform="uppercase">Read more</Button> */}
        <ChakraButtonLink textTransform="uppercase" href={link}>
          Read more
        </ChakraButtonLink>
      </VStack>
    </>
  );
}

export default BlogPreviewCard;
