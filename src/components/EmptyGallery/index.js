import React from 'react';
import Post from '../Post';
import DesignGalleryMobile from '../DesignGalleryMobile'
import './EmptyGallery.css';

function EmptyGallery(props) {

  return (
    <>
    <DesignGalleryMobile articles={props.articles} />
    <div id = 'emptyGalleryContainer'>
      <div className='twoTenColumn'>
       <Post/>
       <Post/>
        </div>
      
      <div className='tenFourteenColumn'>
      <Post/>
       <Post/>
      </div>
      
      <div className='fourteenEighteenColumn'>
      <Post/>
       <Post/>
      </div>
    </div>
    </>
  )
}

export default EmptyGallery;

EmptyGallery.defaultProps = {
  articles: []
}