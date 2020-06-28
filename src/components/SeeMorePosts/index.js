import React from 'react';
import { NavLink } from 'react-router-dom';
import './SeeMorePosts.css';

function SeeMorePosts(props) {
  return (
    <NavLink to={`/articles/${props.type.toLowerCase()}/`} className='post' id='seeMore' >
      <div className='postTitle'> <b> More {props.type} Content </b>  </div>
    </NavLink>
  )
}

export default SeeMorePosts;