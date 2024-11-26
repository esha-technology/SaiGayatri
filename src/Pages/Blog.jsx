import React from "react";
import TopHeading from "../components/common/TopHeading";
import BlogCollection from "../components/Blog/BlogCollection";
import ScrollToTop from "../components/common/ScrollToTop";
const Blog = () => {
  return (
    <>
      <ScrollToTop />

      <div className="relative">
        <TopHeading heading={" Blogs"} img={"/Icons/Blogs.svg"} />
        <BlogCollection />
      </div>
    </>
  );
};

export default Blog;
