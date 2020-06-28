import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import ig1 from './ig1.svg';
import ig1 from './ig2.svg';
import li1 from './li1.svg';
import li2 from './li2.svg'

import './ContactSection.css';

function ContactSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const templateParams =  {
    from_name: email,
    reply_to: email,
    to_name: 'Janine',
    message_html: message
  }

  function sendEmail(e) {
    e.preventDefault();
    // emailjs.send('gmail', 'template_9eQqbgqQ', templateParams, 'user_oXT93Zat58wpBbUU1Pfxs')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }
  
  function handleEmail(event) {
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  
  function handleMessage(event) {
    console.log(event.target.value)
    setMessage(event.target.value)
  }
  
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
      <div id='inputSection'>
        <form className='contact-form' onSubmit={sendEmail}>
          {/* <div id='email'> */}
          <input name='user_email' onChange = {handleEmail} value={email} id='email' type='text' placeholder='Email'></input>
        {/* </div> */}
        {/* <div id='textArea'> */}
          <textarea name='message' onChange = {handleMessage} value={message} id='message' placeholder='Start a conversation'></textarea>
        {/* </div> */}
          <button type='submit' id='button'> Send </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection;