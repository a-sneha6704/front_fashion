import React from "react";
import { Heading } from "../common/Heading";
import { fashionBlogs } from "../data/dummydata";
import { useNavigate } from "react-router-dom";

export const StyleTips = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.title}`, { state: { blog } });
  };

  return (
    <>
      <section className="fashionBlogs">
        <div className="container">
          <Heading title="Fashion & Lifestyle Blog" className = "img-tit" />
          <div className="content grid3">
            {fashionBlogs.map((blog, index) => (
              <div className="blog-box" key={index}>
                <img src={blog.image} alt={blog.title} className="blog-image"/>
                <div className="blog-content">  
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  </div>
                  <div className="read-more">
                  <button 
                    onClick={() => handleReadMore(blog)} 
                    
                  >
                    Read More
                  </button>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
