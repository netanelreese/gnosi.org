import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><a href="http://your-service-1">Service 1</a></li>
        <li><a href="http://your-service-2">Service 2</a></li>
        <li><a href="http://your-service-3">Service 3</a></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
