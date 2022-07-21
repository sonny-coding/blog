import Head from "next/head";
import React from "react";
import BlogPreviewList from "../components/blog/BlogPreviewList";
import dbConnect from "../mongoose/connectDB";
import getFileNames from "../utils/getFileNames";
import readBlogFiles from "../utils/readBlogFiles";
import matter from "gray-matter";
import readingTime from "reading-time";
import Blog from "../mongoose/models/Blog";

const Home = ({ topBlogs, recentBlogs }) => {
  console.log(topBlogs, recentBlogs);
  return (
    <>
      <Head>
        <title>Sonny</title>
      </Head>
      <BlogPreviewList header="Top Blogs" blogs={topBlogs} />
      <BlogPreviewList header="Recent Blogs" blogs={recentBlogs} />
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
  /* save all blogs */
  const blogBulkUpdateArray = AllParsedData.map((blog) => ({
    updateOne: {
      filter: { customID: blog.customID },
      update: { $set: blog },
      upsert: true,
      setDefaultOnInsert: true,
    },
  }));
  await Blog.bulkWrite(blogBulkUpdateArray);

  /* find the top blogs by views */
  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };
  const topBlogResult = await Blog.find({}, project)
    .sort("-totalViews")
    .limit(10);
  const recentBlogResult = await Blog.find({}, project)
    .sort("-createdAt")
    .limit(10);

  const topBlogs = topBlogResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });
  const recentBlogs = recentBlogResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });

  // console.log(topBlogs, recentBlogs);
  return {
    props: { topBlogs, recentBlogs },
  };
};
export default Home;
