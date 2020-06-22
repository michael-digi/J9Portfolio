import React, { useState, useEffect } from 'react';
import ArticlesCard from '../ArticlesCard';
import { parseXML, makeArticleCards } from '../helpers';
import './ArticlesList.css';

function ArticlesList(props) {
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    let cards = makeArticleCards(props.articles)
    console.log(cards)
    setCards(cards)
  }, [props])
  
  return (
    <div id='articlesList'>
      {cards}
    </div>
  )
}

export default ArticlesList;