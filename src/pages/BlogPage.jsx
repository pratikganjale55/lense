import React from "react";
import { blogs } from "../assets/serviceData";
import backgroundImg from "../assets/gradient.jpg";
const BlogPosts = () => {
  return (
    <div
      className="min mt-10 p-2-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        {blogs.map((blog, index) => (
          <section key={index} className="font-sans text-black mt-4 border border-spacing-1 p-2">
            <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full">
                      <img
                        className="h-56 w-48 object-cover"
                        src={blog.image}
                        alt=""
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="p-6 bg-grey">
                <div className="leading-relaxed">
                  <h2 className="leading-tight text-2xl font-bold text-pink-700">
                    {blog.title}
                  </h2>
                  <p className="mt-4 text-3xl font-medium">{blog.content}</p>
                  <p className="mt-4">{blog.description}</p>
                  <p className="mt-4 text-blue-600">
                    <a
                      className=" button button--secondary"
                      href={blog.readMoreLink}
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
