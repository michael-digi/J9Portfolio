import React, { useState, useEffect } from 'react';
import { fadeIn } from 'react-animations'
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import './SlideImage.css';

let transitions = {
  appear: false,
  enter: true,
  exit: true,
};

function SlideImage(props) {
  const [index, setIndex] = useState()
  console.log(props.img)
  
  return (
      <Fade key={props.index}>
        <div className='item'>
          <img src={props.img}></img>
        </div>
    </Fade>
  );
}

export default SlideImage