import React, { useState, useEffect } from 'react';
import ArticlesNavMobile from '../ArticlesNavMobile';
import SideNavArticles from '../SideNavArticles';
import ArticlesInfo from '../ArticlesInfo';
import ArticlesList from '../ArticlesList';
import { parseXML } from '../helpers';
import './ArticlesByCategory.css';

function ArticlesByCategory(props) {
  const [articles, setArticles] = useState([])
  const [title, setTitle] = useState('')
  const [articleType, setType] = useState('')
  
  useEffect(() => {
    window.scrollTo(0, 0)
    let RSS_URL;
    let type = props.match.params.type.toLowerCase()
    
    if (type === 'design') RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`
    if (type === 'art') RSS_URL = `https://historytheorymethodology.wordpress.com/category/art-gallery/feed`
    if (type === 'all') RSS_URL = `https://historytheorymethodology.wordpress.com/feed`
    if (type !== 'design' && type !== 'art' && type !== 'all') RSS_URL = `https://historytheorymethodology.wordpress.com/category/${type}/feed`
    setType(type)

    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => parseXML(data))
      .then(parsed => {
        console.log(parsed, ' this is parsed category')
        setArticles(parsed.channel.item)
        if (parsed.channel.title.split(/\u2013|\u2014/g).length > 1) {
          let title = parsed.channel.title.split(/\u2013|\u2014/g)[1].trim()
          title = title + ' of ' + type[0].toUpperCase() + type.slice(1, type.length)
          setTitle(title)
        }
        else {
          setTitle(parsed.channel.title)
        }
  })
  return function cleanup() {
    console.log('unmounted')
    setArticles([])
    setTitle('')
    setType('')
  }
}, [props.match.params.type])
  
  return (
    <>
      <ArticlesNavMobile />
      <SideNavArticles type={props.match.params.type} />
      <div id='articlesByCategoryContainer'>
        <ArticlesInfo articleTitle={title}/>
        <ArticlesList articles={articles} type={articleType} />
      </div>
    </>
  )
}


export default ArticlesByCategory;