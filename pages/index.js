import Head from "next/head";
import React from "react";
import BlogPreviewList from "../components/blog/BlogPreviewList";
import dbConnect from "../mongoose/connectDB";
import getFileNames from "../utils/getFileNames";
import readBlogFiles from "../utils/readBlogFiles";
import matter from "gray-matter";
import readingTime from "reading-time";
import Blog from "../mongoose/models/Blog";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sonny</title>
      </Head>
      <BlogPreviewList />
    </>
  );
};

export const getStaticProps = async () => {
  await dbConnect();

  const fileNames = getFileNames();
  const AllParsedData = fileNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const parsedFile = readBlogFiles(fileName);
    const { data, content } = matter(parsedFile);
    data.readingTime = readingTime(content).text;
    data.slug = slug;
    data.content = content;

    return data;
  });

  const blogBulkUpdateArray = AllParsedData.map((blog) => ({
    updateOne: {
      filter: { customID: blog.customID },
      update: { $set: blog },
      upsert: true,
      setDefaultOnInsert: true,
    },
  }));
  await Blog.bulkWrite(blogBulkUpdateArray);
  return {
    props: {},
  };
};
export default Home;
