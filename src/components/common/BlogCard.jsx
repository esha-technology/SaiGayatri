import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, slug, id }) => {
  return (
    <Link to={`/blog/${slug}`}>
      <article className="p-3 cursor-pointer bg-white rounded-lg border border-gray-200 shadow-md hover:scale-95 duration-200">
        <div
          className={`border h-56 bg-no-repeat bg-cover rounded-lg`}
          style={{
            backgroundImage: `url('/BlogImages/${id}.webp')`, // Dynamically set the background
          }}
        ></div>
        <div className="m-2">
          <span className=" text-xs font-medium inline-flex items-center ">
            <svg
              className="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clipRule="evenodd"
              ></path>
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
            </svg>
            Article
          </span>
          <h2 className="truncate-heading  mb-4 text-2xl font-bold tracking-tight text-gray-900">
            <a href="#">{title}</a>
          </h2>

          <a
            href="#"
            className="inline-flex items-center    font-medium text-primary-600  hover:underline"
          >
            Read Full Article
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
