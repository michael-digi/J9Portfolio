import React from 'react';
import './SliderDot.css'

function SliderDot(props) {
  return (
    <div className={props.className} onClick={()=> props.dotClick(props.index)}> </div>
  )
}

export default SliderDot;