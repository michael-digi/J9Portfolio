import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './ArticlesCard.css';

function ArticlesCard(props) {
  return (
    <NavLink to={`/articles/${props.type}/${props.title}`} id='articlesCard'> 
      <div id='articlesCardTitle'> {props.title} </div>
      <div id='articlesCardDate'> {props.date} </div>
      <div id='articlesCardDescription'>
        {props.description} . . .
      </div>
    </NavLink>
  )
}

export default ArticlesCard;