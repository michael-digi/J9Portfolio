import React, { useState, useEffect } from 'react';
import { parseXML } from '../helpers';
import './ArticlesCard.css';

function ArticlesCard(props) {
  
  return (
    <div id='articlesCard'> 
      <div id='articlesCardTitle'> {props.title} </div>
      <div id='articlesCardDate'> {props.date} </div>
      <div id='articlesCardDescription'>
        {props.description} . . .
      </div>
    </div>
  )
}

export default ArticlesCard;