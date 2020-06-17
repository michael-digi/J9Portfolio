import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner'
import Fade from 'react-reveal/Fade';
import './SlideImage.css';
import { cleanup } from '@testing-library/react';

function SlideImage(props) {
  const [loaded, makeLoaded] = useState(false)

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
            }} src={props.img}></img>
        </div>
      </Fade>
  );
}

export default SlideImage