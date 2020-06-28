import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArticlesNavMobile.css';

function ArticlesNavMobile() {
  let prevScrollpos = window.pageYOffset;
  useEffect(() => {
    window.addEventListener('scroll', pageScroll)
    
    return () => {
      window.removeEventListener('scroll', pageScroll)
    }
  },[])

  function pageScroll() {
    let dropdown = document.getElementById('dropdown')
    if (dropdown !== null ) {
      let compStyles = window.getComputedStyle(dropdown);
      let px = compStyles.getPropertyValue('top')
      if (px === '0px') return
      let currentScrollPos = window.pageYOffset;
      
      if (prevScrollpos > currentScrollPos || currentScrollPos <= '100') {
        document.getElementById('navMobile').style.top = '0'
      } else {
        document.getElementById('navMobile').style.top = '-50px'
      }
      prevScrollpos = currentScrollPos;
    }
  }

  function showDropdown() {
    let dropdown = document.getElementById('dropdown')
    let compStyles = window.getComputedStyle(dropdown);
    let px = compStyles.getPropertyValue('top')
    if (px === '-200px') document.getElementById('dropdown').style.top = '0px'
    if (px === '0px') document.getElementById('dropdown').style.top = '-200px'
  }

  return (
    <div id='articleNav' onClick={() => showDropdown()}>
      <div id='navMobile' >
        <div className='navDot'></div>
        <div className='navDot'></div>
        <div className='navDot'></div>
      </div>
      <div id='dropdown'>
        <Link className='navTab' to='/'>j1989</Link>
        <Link className='navTab' to='/articles/all'>All Content</Link>
        <Link className='navTab' to='/articles/art'>Art Gallery</Link>
        <Link className='navTab' to='/articles/design'>Design Gallery</Link>
      </div>
    </div>
  )
}

export default ArticlesNavMobile;