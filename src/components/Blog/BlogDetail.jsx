// import React from "react";
// import TopHeading from "../common/TopHeading";
// import { useParams } from "react-router-dom";
// import BlogData from "../../Data/BlogsData";
// import ScrollToTop from "../common/ScrollToTop";

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const blog = BlogData.find((blog) => blog.slug === slug);

//   return (
//     <>
//       <ScrollToTop />

//       <div>
//         {blog ? (
//           <>
//             <TopHeading heading={blog.heading} />
//           </>
//         ) : (
//           <p>Blog not found</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default BlogDetail;

import React from "react";
import TopHeading from "../common/TopHeading";
import { Link, useParams } from "react-router-dom";
import BlogData from "../../Data/BlogsData";
import ScrollToTop from "../common/ScrollToTop";
import "./BlogDetail.css"; // Custom styles for the component

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = BlogData.find((blog) => blog.slug === slug);
  const sideBlogs = BlogData.slice(0, 5); // Example: Get the first 5 blogs for the sidebar

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <ScrollToTop />
      <TopHeading />
      <div className="blog-detail-container">
        {/* Main Blog Content */}
        <div className="blog-detail-main">
          {/* Blog Heading */}
          {/* Heading Image */}
          <h1>{blog.heading}</h1>
          <img
            src={`/BlogImages/${blog.id}.webp`} // Fallback image if headingImage is not available
            alt={blog.heading}
            className="blog-heading-image"
          />

          {/* Blog Content */}
          <div className="blog-content">
            <p>{blog.content}</p> {/* Replace with your actual content */}
          </div>
        </div>

        {/* Side Blog Cards - Each card in a separate div */}
        <div className="blog-detail-top">
          <div className="blog-detail-sidebar">
            <h3>Our Blogs</h3>
            <div className="side-blog-cards">
              {sideBlogs.map((sideBlog) => (
                <Link to={`/blog/${sideBlog.slug}`}>
                  <div className="side-blog-container" key={sideBlog.slug}>
                    <div className="card">
                      <img
                        src={`/BlogImages/${sideBlog.id}.webp`} // Fallback image if headingImage is not available
                        alt={blog.heading}
                        className="card-image"
                      />
                      <div className="card-content">
                        <div className="card-article">Article</div>
                        <p className="card-para">{sideBlog.heading}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
