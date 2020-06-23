import React, { useState, useEffect } from 'react';
import SideNavArticles from '../SideNavArticles';
import ArticlesInfo from '../ArticlesInfo';
import ArticlesList from '../ArticlesList';
import { parseXML } from '../helpers';
import './ArticlesByCategory.css';

function ArticlesByCategory(props) {
  const [articles, setArticles] = useState([])
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    window.scrollTo(0, 0)
    let RSS_URL;
    let type = props.match.params.type
    console.log(type, ' this is type')
    if (type === 'design') RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`
    if (type === 'art') RSS_URL = `https://historytheorymethodology.wordpress.com/category/art-gallery/feed`
    if (type !== 'design' && type !== 'art') RSS_URL = `https://historytheorymethodology.wordpress.com/category/${type}/feed`
    console.log(RSS_URL, ' this is url')

    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => parseXML(data))
      .then(parsed => {
        setTitle(parsed.channel.title)
        setArticles(parsed.channel.item)
  })
}, [props.match.params.type])
  
  return (
    <>
      <SideNavArticles />
      <div id='articlesByCategoryContainer'>
        <ArticlesInfo articleTitle={title}/>
        {/* <ArticlesSideNav articleTitle={'History Theory & Methodology'}/> */}
        <ArticlesList articles={articles} />
      </div>
    </>
  )
}


export default ArticlesByCategory;