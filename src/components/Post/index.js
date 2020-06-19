import React from 'react';
import './Post.css';

function Post(props) {
  
  return (
    <div className='post' >
      <div className='postImage' style={{backgroundImage: `url(${props.img})`}}></div>
      <div className='postTitle'> <b> {props.title} </b>  </div>
      <div className='postParagraph'> 
        {props.paragraph}...
      </div>
      <div className='readMore'> Continue Reading > </div>
    </div>
  )
}

export default Post;