import BlogPreviewCard from "./BlogPreviewCard";
import { Box, Heading } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function BlogPreviewList({ header, blogs }) {
  return (
    <>
      <Box mt={8} mb={16}>
        <Heading sx={{ textTransform: "uppercase", mb: 8, fontSize: "5xl" }}>
          {header}
        </Heading>
        {blogs.map((blog) => (
          <BlogPreviewCard {...blog} key={nanoid()} />
        ))}
      </Box>
    </>
  );
}

export default BlogPreviewList;
