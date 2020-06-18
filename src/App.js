import React from 'react';
import SideNav from './components/SideNav';
import Projects from './components/Projects';
import PhotoJournal from './components/PhotoJournal';
import ArtGallery from './components/ArtGallery';
import DesignGallery from './components/DesignGallery';
import './App.css';

function App() {
  return (
    <>
      <SideNav />
      <Projects />
      {/* <PhotoJournal /> */}
      {/* <ArtGallery /> */}
      <DesignGallery />
    </>
  );
}

export default App;
