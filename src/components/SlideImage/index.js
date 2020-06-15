import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import './SlideImage.css';

function SlideImage(props) {
  const [loaded, makeLoaded] = useState(false)
  
  return (
      <Fade key={props.index}>
        <div className='item'>
          <img
            style={!loaded ? {display: 'none'} : {}}
            onLoad={() => makeLoaded(true)} src={props.img}></img>
        </div>
    </Fade>
  );
}

export default SlideImage