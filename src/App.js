import React, {Suspense, lazy} from 'react';
import MainScroll from './components/MainScroll';
// import SideNav from './components/SideNav';
// import Projects from './components/Projects';
// import PhotoJournal from './components/PhotoJournal';
// // import DesignGallery from './components/DesignGallery';
import './App.css';

const DesignGallery = React.lazy(() => import('./components/DesignGallery'))

const ArtGallery = React.lazy(() => import('./components/ArtGallery'))

function App() {
  return (
    <>
      <MainScroll />
    </>
  );
}

export default App;
