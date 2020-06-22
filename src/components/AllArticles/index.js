import React, { useState, useEffect } from 'react';
import ArticlesSideNav from '../ArticlesSideNav';
import ArticlesList from '../ArticlesList';
import { parseXML } from '../helpers';
import './AllArticles.css';

function AllArticles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    let RSS_URL = `https://historytheorymethodology.wordpress.com/feed`;

    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => parseXML(data))
      .then(parsed => {
        setArticles(parsed.channel.item)
  })
}, [])
  
  return (
    <div id='articlesByCategoryContainer'>
      <ArticlesSideNav articleTitle={'History Theory & Methodology'}/>
      <ArticlesList articles={articles} />
    </div>
  )
}

export default AllArticles;