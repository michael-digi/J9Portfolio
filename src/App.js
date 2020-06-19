import React, {Suspense, lazy} from 'react';
import SideNav from './components/SideNav';
import Projects from './components/Projects';
import PhotoJournal from './components/PhotoJournal';
import ArtGallery from './components/ArtGallery';
// import DesignGallery from './components/DesignGallery';
import './App.css';

const DesignGallery = React.lazy(() => import('./components/DesignGallery'))

function App() {
  return (
    <>
      <SideNav />
      <Projects />
      {/* <PhotoJournal /> */}
      {/* <ArtGallery /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <DesignGallery />
      </Suspense>
    </>
  );
}

export default App;
