import React from "react";
import BlogCard from "../common/BlogCard";
import BlogData from "../../Data/BlogsData";

const BlogCollection = () => {
  const solarBlogs = BlogData;

  return (
    <div className="relative grid gap-8 lg:grid-cols-3 px-4 -mt-56 z-20 ">
      {solarBlogs.map((item) => (
        <BlogCard
          title={item.title}
          id={item.id}
          key={item.id}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

export default BlogCollection;
