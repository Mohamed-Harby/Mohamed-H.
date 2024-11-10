// src/pages/Blog/Blog.jsx
import React from 'react';
import { BlogPost } from '../../components/BlogPost/BlogPost';
import blogData from '../../data/blogPosts';
// import './Blog.scss';

const Blog = () => (
  <div className="blog-page">
    {blogData.map((post) => (
      <BlogPost key={post.slug} {...post} />
    ))}
  </div>
);

export default Blog;