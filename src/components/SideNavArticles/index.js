import React from 'react';
import { nimateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import './SideNavArticles.css';

function SideNavArticles() {
  return (
    <div id='sidebar'>
      <Link className='navTab' to='/articles/design'>Design Articles</Link>
      <Link className='navTab' to='/articles/art'>Art Articles</Link>
      <Link className='navTab' to='/articles'>All Articles</Link>
      <Link className='navTab' to='/'>Main Page</Link>
      {/* <Link className='navTab' to='projects'>Projects</Link> */}
    </div>
  );
}

export default SideNavArticles;