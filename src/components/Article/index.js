import React, { useState, useEffect } from 'react';
import { parseXML, decodeHTMLEntitiesParagraphs } from '../helpers';
import SideNavArticles from '../SideNavArticles';
import ArticlesInfo from '../ArticlesInfo';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';
// import { useSelector, useDispatch } from 'react-redux'
// import { useRouteMatch } from 'react-router-dom';
import './Article.css';

function Article(props) {
  const [articleBody, setArticleBody] = useState([])
  const [articleTitle, setArticleTitle] = useState('')
  const [articleAuthor, setArticleAuthor] = useState('')
  const [articleDate, setArticleDate] = useState('')
  // const [articleImage, setArticleImage] = useState('')
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
            // console.log(item)
            // let img;
            let date = new Date(item.pubDate)
            let pubDate = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
            let decoded = parse(decodeHTMLEntitiesParagraphs(item['content:encoded']))
            // {item['media:content'][1] !== undefined 
            // ? img = item['media:content'][1]
            // : img = item['media:content'][0]}
            // console.log(img.url)
            setArticleBody(decoded)
            setArticleTitle(item.title)
            setArticleAuthor(item['dc:creator'])
            setArticleDate(pubDate)
            // setArticleImage(img.url)
          }
        })
    })
  }, [])

  return (
    <>
      <SideNavArticles />
      <div id='articleContainer'>
        <ArticlesInfo 
          articleTitle={articleTitle} 
          articleAuthor={articleAuthor}
          articleDate={articleDate}
          // articleImage={articleImage}
        />
        <div id='article'> {articleBody} </div>
      </div>
    </>
  )
}

export default Article;