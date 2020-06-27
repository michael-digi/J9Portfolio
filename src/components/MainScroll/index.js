import React, {Suspense, lazy, useState, useEffect} from 'react';
// import SideNav from '../SideNav';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Projects from '../Projects';
import './MainScroll.css';
import { cleanup } from '@testing-library/react';

// const Projects = lazy(() => import('../Projects'))
const PhotoJournal= lazy(() => import('../PhotoJournal'))
const DesignGallery = lazy(() => import('../DesignGallery'))
const ArtGallery = lazy(() => import('../ArtGallery'))
const ContactSection = lazy(() => import('../ContactSection'))

function MainScroll() {
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
      console.log(currentScrollPos, prevScrollpos)
      if (prevScrollpos > currentScrollPos || currentScrollPos <= '100') {
      // setScrollClass('navMobile')
      document.getElementById('navMobile').style.top = '0'
      } else {
    // setScrollClass('navMobileHidden')
      document.getElementById('navMobile').style.top = '-50px'
      }
      prevScrollpos = currentScrollPos;
    }
  }
  

useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
    
    return function cleanup() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
  })

  function showDropdown() {
    let dropdown = document.getElementById('dropdown')
    let compStyles = window.getComputedStyle(dropdown);
    let px = compStyles.getPropertyValue('top')
    if (px === '-200px') document.getElementById('dropdown').style.top = '0px'
    if (px === '0px') document.getElementById('dropdown').style.top = '-200px'
  }

  const navTabReached = {
    backgroundColor: '#f7f3a9',
    cursor: 'pointer',
    color: 'black'
  }

  return (
    <>
      <div id='navMobile' onClick={() => showDropdown()}>
        <div className='navDot'></div>
        <div className='navDot'></div>
        <div className='navDot'></div>
      </div>
      <div id='dropdown'>
        <Link className='navTab' activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={1000}>Projects</Link>
        <Link className='navTab' activeClass='active' to='photos' spy={true} smooth={true} offset={0} duration={1000}>Photo Journal</Link>
        <Link className='navTab' activeClass='active' to='art' spy={true} smooth={true} offset={-100} duration={1000}>Art Gallery</Link>
        <Link className='navTab' activeClass='active' to='design' spy={true} smooth={true} offset={-100} duration={1000}>Design Gallery</Link>
        <Link className='navTab' activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={1000}>Contact</Link>
      </div>
      <div id='sidebar'>
        <Link className='navTab' activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={1000}>Contact</Link>
        <Link className='navTab' activeClass='active' to='design' spy={true} smooth={true} offset={0} duration={1000}>Design Gallery</Link>
        <Link className='navTab' activeClass='active' to='art' spy={true} smooth={true} offset={0} duration={1000}>Art Gallery</Link>
        <Link className='navTab' activeClass='active' to='photos' spy={true} smooth={true} offset={0} duration={1000}>Photo Journal</Link>
        <Link className='navTab' activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={1000}>Projects</Link>
      </div>
      <Element name='projects' className='element'>
        <Projects />
      </Element>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Element name='photos' className='elementPhotoJournal'>
          <PhotoJournal />
        </Element>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Element name='art' className='elementArt'>
          <ArtGallery />
        </Element>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Element name='design' className="elementDesign">
          <DesignGallery />
        </Element>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Element name='contact' className='element'>
          <ContactSection />
        </Element>
      </Suspense>
    </>
  );
}

export default MainScroll;