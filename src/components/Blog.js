import React from 'react';
import Sidebar from './Sidebar';

function Blog() {
  return (
    <div className="blog">
      <Sidebar />
      <div className="content">
        <h1>Blog</h1>
        <p>Here you can post and read blog posts.</p>
      </div>
    </div>
  );
}

export default Blog;
