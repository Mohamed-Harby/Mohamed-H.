// src/components/BlogPost/BlogPost.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.scss';

export const BlogPost = ({ title, date, description, slug }) => (
  <Link to={`/blog/${slug}`} className="blog-post">
    <h2>{title}</h2>
    <p className="date">{date}</p>
    {description && <p className="description">{description}</p>}
  </Link>
);
