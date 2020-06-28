import React from 'react';
import './SectionTitleMobile.css';

function SectionTitleMobile(props) {
  return (
    <div className='sectionTitle'>
      <h1> {props.section} </h1>
    </div>
  )
}

export default SectionTitleMobile;