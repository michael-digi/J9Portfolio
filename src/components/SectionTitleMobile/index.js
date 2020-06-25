import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { decodeHTMLEntities } from '../helpers';
import './SectionTitleMobile.css';

function SectionTitleMobile(props) {
  console.log(props.section)
  return (
    <div className='sectionTitle'>
      <h1> {props.section} </h1>
    </div>
  )
}

export default SectionTitleMobile;