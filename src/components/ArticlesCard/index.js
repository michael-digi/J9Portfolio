import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { parseXML } from '../helpers';
import './ArticlesCard.css';

function ArticlesCard(props) {
  {console.log(props)}
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