import Head from "next/head";
import React from "react";
import BlogPreviewList from "../components/blog/BlogPreviewList";

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

export default Home;
