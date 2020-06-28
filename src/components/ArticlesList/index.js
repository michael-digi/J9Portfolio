import React, { useState, useEffect } from 'react';
import { makeArticleCards } from '../helpers';
import './ArticlesList.css';

function ArticlesList(props) {
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    let cards = makeArticleCards(props.articles)
    setCards(cards)
  }, [props])
  
  return (
    <div id='articlesList'>
      {cards}
    </div>
  )
}

export default ArticlesList;