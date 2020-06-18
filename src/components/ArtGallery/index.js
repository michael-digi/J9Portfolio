import React, { useEffect } from 'react';
// import axios from 'axios'
import './ArtGallery.css';

function ArtGallery() {
  // const RSS_URL = `https://historytheorymethodology.wordpress.com/category/art-gallery/feed`;
  
  useEffect(() => {
    // fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
    // .then(response => response.text())
    // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    // .then(data => console.log(data))
  }, [])

  return (
    <div id = 'artGalleryContainer'>
      
      <div className='twoTenColumn'>
        <div className='placeholderColumn'> </div>
        <div className='igContainer'>
          <div className='igPost' >
          </div>
          
        </div>

      </div>
      
      <div className='tenFourteenColumn'> </div>
      
      <div className='fourteenEighteenColumn'> </div>
    
    </div>
  )
}

export default ArtGallery;