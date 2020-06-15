import React from 'react';
import Fade from 'react-reveal/Fade';
import './SlideImage.css';

function SlideImage(props) {
  return (
      <Fade key={props.index}>
        <div className='item'>
          <img onLoad={console.log('loaded')} src={props.img}></img>
        </div>
    </Fade>
  );
}

export default SlideImage