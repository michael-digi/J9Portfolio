import React, {Suspense, lazy} from 'react';
import SideNav from '../SideNav';
import Projects from '../Projects';
import PhotoJournal from '../PhotoJournal';
// import DesignGallery from './components/DesignGallery';
import './MainScroll.css';

const DesignGallery = React.lazy(() => import('../DesignGallery'))

const ArtGallery = React.lazy(() => import('../ArtGallery'))

function MainScroll() {
  return (
    <>
      <SideNav />
      <Projects />
      {/* <PhotoJournal /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <ArtGallery />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <DesignGallery />
      </Suspense>
    </>
  );
}

export default MainScroll;