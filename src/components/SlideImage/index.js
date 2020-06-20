import React, { useState, useEffect } from 'react';
import { descriptions }  from '../Projects/projectDescriptions'
import Fade from 'react-reveal/Fade';
import './SlideImage.css';

function SlideImage(props) {
  const [loaded, makeLoaded] = useState(false)
  console.log(descriptions)
  useEffect(() => {
    makeLoaded(props.loaded)
  },[])

  return (
      <Fade key={props.index}>
        <div className='item'>
        {loaded ?  null : <div className='loader'></div>}
          <img
            style={loaded ? {} : {display: 'none'} }
            onLoad={() => {
              makeLoaded(true)
              console.log('loaded')
            }} src={props.img} />
          <div id='description'> {descriptions[props.project]} </div>
        </div>
      </Fade>
  );
}

export default SlideImage