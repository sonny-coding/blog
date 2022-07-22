import React from "react";
// import { Image } from "@chakra-ui/react";
import Image from "next/image";
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
import useGetViews from "../../hooks/useGetViews";

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
  const link = `/blog/${slug}`;
  const { data: views } = useGetViews(customID, totalViews);
  return (
    <>
      <VStack as={LinkBox} align="start" spacing="1rem" mb="2rem">
        <Box w="100%">
          <Image
            src={banner}
            width={16}
            height={9}
            layout="responsive"
            alt={altText}
            objectFit="cover"
          />
        </Box>
        {/* <Heading>Lorem ipsum dolor sit amet. </Heading> */}
        <ChakraNextLink ChakraComponent={Text} href={link} overlay>
          {title}
        </ChakraNextLink>

        <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
          <Text>{createdAt}</Text>
          <Text>{views} views</Text>
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
