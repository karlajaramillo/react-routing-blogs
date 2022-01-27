import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({blogs}) => {
  console.log(blogs);

  const blogCard = Array.from(blogs).map(blog => {
    return (
      <div className="blog-card" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <h1>{blog.title}</h1>
          <p>{blog.author}</p>
        </Link>
      </div>
    )
  })
    return (
      <div className='blog-list-wrapper'>
        <h1>Welcome to all posts!</h1>
        {blogCard}
      </div>
    )
}

export default BlogList;