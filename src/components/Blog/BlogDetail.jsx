import React from "react";
import TopHeading from "../common/TopHeading";
import { useParams } from "react-router-dom";
import BlogData from "../../Data/BlogsData";
import ScrollToTop from "../common/ScrollToTop";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = BlogData.find((blog) => blog.slug === slug);

  return (
    <>
      <ScrollToTop />

      <div>
        {blog ? (
          <>
            <TopHeading heading={blog.heading} />
          </>
        ) : (
          <p>Blog not found</p>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
