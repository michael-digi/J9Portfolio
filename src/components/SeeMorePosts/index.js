import React from 'react';
import { NavLink } from 'react-router-dom';
import './SeeMorePosts.css';

function SeeMorePosts(props) {
  return (
    <NavLink to={`/articles/${props.type.toLowerCase()}/`} className='post' >
      <div className='postTitle'> <b> See More {props.type} Posts . . . </b>  </div>
    </NavLink>
  )
}

export default SeeMorePosts;