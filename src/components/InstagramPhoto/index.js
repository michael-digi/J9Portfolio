import React from 'react';
import './InstagramPhoto.css';

function InstagramPhoto(props) {
  return (
    <div 
      className='instagramPhoto' 
      onClick={() => window.open('https://www.instagram.com/janineteeneightynine/', '_blank')} 
      style={{backgroundImage: `url(${props.img})`}}>
    </div>
  )
}

export default InstagramPhoto;