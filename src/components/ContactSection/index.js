import React from 'react';
// import ig1 from './ig1.svg';
import ig1 from './ig2.svg';
import li1 from './li1.svg';
import li2 from './li2.svg'

import './ContactSection.css';

function ContactSection() {
  return (
    <div id='contactSection'>
      <div id='contactInfo'>
        <div id='contactBox'>
          <div id='contactTitle'> Contact Janine </div>
          <div id='socialMediaLinks' >
            <div id='ig'> Follow  <img src={ig1}/> </div>
            <div id='linkedIn'> Link Up <img src={li1}/>  </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;