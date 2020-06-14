import React from 'react';
import SliderDot from '../SliderDot';
import './SliderDots.css'

function SliderDots(props) {
  console.log(props.dots)
  return (
    <div id='dots'>
      {props.dots}
    </div>
  )
}

export default SliderDots;
