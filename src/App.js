import React, {Suspense, lazy} from 'react';
import SideNav from './components/SideNav';
import Projects from './components/Projects';
import PhotoJournal from './components/PhotoJournal';
// import DesignGallery from './components/DesignGallery';
import './App.css';

const DesignGallery = React.lazy(() => import('./components/DesignGallery'))

const ArtGallery = React.lazy(() => import('./components/ArtGallery'))

function App() {
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

export default App;
