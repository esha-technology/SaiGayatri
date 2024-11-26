import React from "react";
import BlogCard from "../common/BlogCard";
import BlogData from "../../Data/BlogsData";

const BlogCollection = () => {
  const solarBlogs = BlogData;

  return (
    <section className=" border bg-gray-200 m-8 -mt-48  z-50 relative px-6 py-10  rounded-xl shadow-2xl">
      <div className="grid gap-8 lg:grid-cols-3 ">
        {solarBlogs.map((item) => (
          <BlogCard
            title={item.title}
            id={item.id}
            key={item.id}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogCollection;
