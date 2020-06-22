import React, { useState, useEffect } from 'react';
import ArticlesSideNav from '../ArticlesSideNav'
import ArticlesList from '../ArticlesList'
import { parseXML } from '../helpers';
import './ArticlesByCategory.css';

function ArticlesByCategory(props) {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    window.scrollTo(0, 0)
    let RSS_URL;
    (props.match.params.type) === 'design' 
      ? RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`
      : RSS_URL = `https://historytheorymethodology.wordpress.com/category/art-gallery/feed`
    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => parseXML(data))
      .then(parsed => {
        setArticles(parsed.channel.item)
  })
}, [props.match.params.type])
  
  return (
    <div id='articlesByCategoryContainer'>
      <ArticlesSideNav articleTitle={'History Theory & Methodology'}/>
      <ArticlesList articles={articles} />
    </div>
  )
}

export default ArticlesByCategory;