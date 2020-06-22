import React from 'react';
import { NavLink } from 'react-router-dom';
import { decodeHTMLEntities } from '../helpers';
import './Post.css';

function Post(props) {
  let paragraph = decodeHTMLEntities(props.paragraph)
  return (
    <NavLink to={`/articles/${props.type}/${props.title}`} className='post' >
      <div className='postImage' style={{backgroundImage: `url(${props.img})`}}></div>
      <div className='postTitle'> <b> {props.title} </b>  </div>
      <div className='postParagraph'> 
        {paragraph} . . . 
      </div>
      <div className='readMore'> Continue Reading > </div>
    </NavLink>
  )
}

export default Post;