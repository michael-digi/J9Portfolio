import React, {Suspense, lazy, useEffect} from 'react';
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

  const navTabReached = {
    backgroundColor: '#f7f3a9',
    cursor: 'pointer',
    color: 'black'
  }

  return (
    <>
      {/* <SideNav /> */}
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
        <Element name='photos' className='element'>
          <PhotoJournal />
        </Element>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Element name='art' className='element'>
          <ArtGallery />
        </Element>
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Element name='design' className="element">
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