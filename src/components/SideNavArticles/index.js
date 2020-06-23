import React from 'react';
import { nimateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import './SideNavArticles.css';

function SideNavArticles() {
  return (
    <div id='sidebar'>
      <Link className='navTab' to='/articles/design'>Design Gallery</Link>
      <Link className='navTab' to='/articles/art'>Art Gallery</Link>
      <Link className='navTab' to='/articles/all'>All Articles</Link>
      <Link className='navTab' to='/'>j1989</Link>
      {/* <Link className='navTab' to='projects'>Projects</Link> */}
    </div>
  );
}

export default SideNavArticles;