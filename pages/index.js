import Head from "next/head";
import React from "react";
import { Heading } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader";
import BlogPreviewList from "../components/blog/BlogPreviewList";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sonny</title>
      </Head>
      <AppHeader />
      <BlogPreviewList />
    </>
  );
};

export default Home;
