import React from "react";
import dbConnect from "../../mongoose/connectDB";
import Blog from "../../mongoose/models/Blog";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import BlogHead from "../../components/BlogHead";
import MdxComponents from "../../components/MDX/MdxComponent";

function BlogPage({ mdxSource, blogData }) {
  return (
    <>
      <BlogHead {...blogData} />
      <MDXRemote {...mdxSource} components={MdxComponents} />;
    </>
  );
}

export const getStaticProps = async ({ params: { slug } }) => {
  await dbConnect();
  // projection
  const project = {
    _id: 0,
    _v: 0,
  };
  const result = await Blog.findOne({ slug }, project);
  const { content, createdAt, ...blogData } = result.toObject();
  const mdxSource = await serialize(content);
  blogData.createdAt = createdAt.toDateString();
  return {
    props: { mdxSource, blogData },
  };
};
export const getStaticPaths = async () => {
  await dbConnect();
  const slugs = await Blog.find({}, "slug");
  const paths = slugs.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export default BlogPage;
