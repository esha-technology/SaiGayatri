import React from "react";
import TopHeading from "../components/common/TopHeading";
import BlogCollection from "../components/Blog/BlogCollection";
import ScrollToTop from "../components/common/ScrollToTop";
const Blog = () => {
  return (
    <>
      <ScrollToTop />

      <div>
        <TopHeading heading={"Our Blogs"} />
        <BlogCollection />
      </div>
    </>
  );
};

export default Blog;
