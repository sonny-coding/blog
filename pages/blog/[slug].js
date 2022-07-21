import React from "react";
import dbConnect from "../../mongoose/connectDB";
import Blog from "../../mongoose/models/Blog";

function BlogPage() {
  return <div>BlogPage</div>;
}

export const getStaticProps = async () => {
  return {
    props: {},
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
  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
export default BlogPage;
