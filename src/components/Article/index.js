import React, { useState, useEffect } from 'react';
import { parseXML, decodeHTMLEntitiesParagraphs } from '../helpers';
import parse from 'html-react-parser';
// import { useSelector, useDispatch } from 'react-redux'
// import { useRouteMatch } from 'react-router-dom';
import './Article.css';

function Article(props) {
  const [articleBody, setArticleBody] = useState([])
  const [articleTitle, setArticleTitle] = useState('')
  const [articleAuthor, setArticleAuthor] = useState('')
  const [articleDate, setArticleDate] = useState('')
  const months = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
  
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
        parsed.channel.item.forEach(item => {
          if (item.title.includes(props.match.params.title)) {
            let date = new Date(item.pubDate)
            let pubDate = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
            let decoded = parse(decodeHTMLEntitiesParagraphs(item['content:encoded']))
            setArticleBody(decoded)
            setArticleTitle(item.title)
            setArticleAuthor(item['dc:creator'])
            setArticleDate(pubDate)
          }
        })
    })
  }, [])

  return (
    <>
      <div id='articleContainer'>
        <div id='articleTitleContainer'>
          <div id='articleTitle'> {articleTitle} </div>
          <div id='articleAuthorAndDate'> 
            <div id='author'>
              {articleAuthor 
              ? `Posted by ${articleAuthor}` 
              : null}
            </div>
            <div id='date'>
              {articleDate}
            </div>
          </div>
        </div>
        <div id='article'> {articleBody} </div>
      </div>
    </>
  )
}

export default Article;