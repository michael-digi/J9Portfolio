import React, { useState, useEffect } from 'react';
import { descriptions }  from '../Projects/projectDescriptions'
import Fade from 'react-reveal/Fade';
import './SlideImage.css';

function SlideImage(props) {
  const [loaded, makeLoaded] = useState(false)
  useEffect(() => {
    makeLoaded(props.loaded)
    console.log(navigator.userAgent)
  },[props.loaded])

  return (
      <Fade key={props.index}>
        <div className='item'>
        {loaded ?  null : <div className='loader'></div>}
          <img id='slideImage'
            style={loaded ? {} : {display: 'none'} }
            onLoad={() => {
              makeLoaded(true)
            }} src={props.img} />
         {typeof InstallTrigger !== 'undefined' ? null : <div id='description'> {descriptions[props.project]} </div>}
        </div>
      </Fade>
  );
}

export default SlideImage