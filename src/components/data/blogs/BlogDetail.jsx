import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Heading } from "../../common/Heading";

export const BlogDetail = () => {
  const { title } = useParams();
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) return <p>Blog not found</p>;

  return (
    <section className={`blog-detail py-10 px-5 ${blog.styleClass || ""}`}>
      <div className="container">
        <Heading title={blog.title} />
          <img src={blog.extraImage} alt={blog.title} className="blog-image" />
          <div className="text-content">
            <p>{blog.content}</p>
            <div className="text_blog">
          <p>{blog.con}</p>
          <div className="text_blog_2">
          <p>{blog.conn}</p>
          </div>
          </div>
          </div>
          <div className="blog-paragraph">
          <Heading title={blog.title_para} />
          </div>
          <div className="blog-para">
          <p>{blog.paragraph}</p>
          </div>
          <div className="para_2">
          <p>{blog.para}</p>
          </div>
          <div className="text_para">
          <p>{blog.text}</p>
          </div>
          <img src={blog.image} alt="Blog Detail" className="para-image" />
        
      </div>
    </section>
  );
};
