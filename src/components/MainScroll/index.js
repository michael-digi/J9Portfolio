import React, {Suspense, lazy, useEffect} from 'react';
import { Link, Element, Events, scrollSpy} from 'react-scroll'
import SectionTitleMobile from '../SectionTitleMobile';
import LandingPage from '../LandingPage';
import Projects from '../Projects';
import EmptyGallery from '../EmptyGallery';
import './MainScroll.css';

// const Projects = lazy(() => import('../Projects'))
const PhotoJournal= lazy(() => import('../PhotoJournal'))
const DesignGalleryContainer = lazy(() => import('../DesignGalleryContainer'))
const ArtGalleryContainer = lazy(() => import('../ArtGalleryContainer'))
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
      
      if (prevScrollpos > currentScrollPos || currentScrollPos <= '100') {
        document.getElementById('navMobile').style.top = '0'
      } else {
        document.getElementById('navMobile').style.top = '-50px'
      }
      prevScrollpos = currentScrollPos;
    }
  }
  

useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
    });
 
    Events.scrollEvent.register('end', function(to, element) {
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
      {/* <LandingPage /> */}
      <Element name='projects' className='element'>
        <SectionTitleMobile section='Projects' />
        <Projects />
      </Element>
      
      <Suspense fallback={<EmptyGallery />}>
        <Element name='photos' className='elementPhotoJournal'>
          <PhotoJournal />
        </Element>
      </Suspense>

      <Suspense fallback={<EmptyGallery />}>
        <Element name='art' className='elementArt'>
          <ArtGalleryContainer />
        </Element>
      </Suspense>

      <Suspense fallback={<EmptyGallery />}>
        <Element name='design' className="elementDesign">
          <DesignGalleryContainer />
        </Element>
      </Suspense>

      <Suspense fallback={<EmptyGallery />}>
        <Element name='contact' className='element'>
          <ContactSection />
        </Element>
      </Suspense>
    </>
  );
}

export default MainScroll;