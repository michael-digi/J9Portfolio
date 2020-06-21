import React, {Suspense, lazy} from 'react';
import SideNav from '../SideNav';
import Projects from '../Projects';
//import PhotoJournal from '../PhotoJournal';
import './MainScroll.css';

const DesignGallery = lazy(() => import('../DesignGallery'))

const ArtGallery = lazy(() => import('../ArtGallery'))

function MainScroll() {
  return (
    <>
      <SideNav />
      <Projects />
      {/* <PhotoJournal /> */}
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