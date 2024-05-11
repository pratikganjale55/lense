import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BlogPosts from "./pages/BlogPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPosts />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
