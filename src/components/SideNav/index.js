import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './SideNav.css';

function SideNav() {
  return (
    <div id='sidebar'>
      <Link className='navTab' to='contact'>Contact</Link>
      <Link className='navTab' to='design'>Design Gallery</Link>
      <Link className='navTab' to='art'>Art Gallery</Link>
      <Link className='navTab' to='photos'>Photo Journal</Link>
      <Link className='navTab' to='projects'>Projects</Link>
    </div>
  );
}

export default SideNav