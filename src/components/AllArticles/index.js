import React, { useState, useEffect } from 'react';
import SideNavArticles from '../SideNavArticles';
import ArticlesList from '../ArticlesList';
import ArticlesInfo from '../ArticlesInfo';
import { parseXML } from '../helpers';
import './AllArticles.css';

function AllArticles() {
  const [articles, setArticles] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    let RSS_URL = `https://historytheorymethodology.wordpress.com/feed`;

    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => parseXML(data))
      .then(parsed => {
        setTitle(parsed.channel.title)
        setArticles(parsed.channel.item)
  })
}, [])
  
  return (
    <>
      <SideNavArticles />
      <div id='articlesByCategoryContainer'>
        <ArticlesInfo articleTitle={title}/>
        <ArticlesList articles={articles} />
      </div>
    </>
  )
}

export default AllArticles;