import React, { useState, useEffect } from 'react';
import { makeArticleCards } from '../helpers';
import './ArticlesList.css';

function ArticlesList(props) {
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    console.log(props.type, ' this is props.type')
    let cards = makeArticleCards(props.articles, props.type)
    console.log(cards, ' this is cards')
    setCards(cards)
  }, [props])
  
  return (
    <div id='articlesList'>
      {cards}
    </div>
  )
}

export default ArticlesList;