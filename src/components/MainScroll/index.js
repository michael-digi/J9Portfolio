import React, {Suspense, lazy} from 'react';
import SideNav from '../SideNav';
import Projects from '../Projects';
import './MainScroll.css';

const PhotoJournal= lazy(() => import('../PhotoJournal'))
const DesignGallery = lazy(() => import('../DesignGallery'))
const ArtGallery = lazy(() => import('../ArtGallery'))

function MainScroll() {
  return (
    <>
      <SideNav />
      <Projects />
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoJournal />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <DesignGallery />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ArtGallery />
      </Suspense>
    </>
  );
}

export default MainScroll;