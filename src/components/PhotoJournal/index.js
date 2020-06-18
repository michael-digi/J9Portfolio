import React, { useEffect } from 'react';
import axios from 'axios'
import photo1 from './imagesPhotoJournal/j9ig1.png'
import './PhotoJournal.css';

function PhotoJournal() {
  // const RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`;
  
  useEffect(() => {
  }, [])

  return (
    <div id = 'photoJournalContainer'>
      
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

export default PhotoJournal;