import React, { useState, useEffect } from 'react';
import { parseXML, decodeHTMLEntitiesParagraphs } from '../helpers';
import SideNavArticles from '../SideNavArticles';
import ArticlesInfo from '../ArticlesInfo';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';
// import { useSelector, useDispatch } from 'react-redux'
// import { useRouteMatch } from 'react-router-dom';
import './Article.css';
import { indexOf } from 'lodash';

function Article(props) {
  const [articleBody, setArticleBody] = useState([])
  const [articleTitle, setArticleTitle] = useState('')
  const [articleAuthor, setArticleAuthor] = useState('')
  const [articleDate, setArticleDate] = useState('')
  const [nextTitle, setNextTitle] = useState('')
  const [prevTitle, setPrevTitle] = useState('')
  // const [articleImage, setArticleImage] = useState('')
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  useEffect(() => {
    window.scrollTo(0, 0)
    let RSS_URL;
    let type = props.match.params.type.toLowerCase()
    if (type === 'design') RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`
    if (type === 'art') RSS_URL = `https://historytheorymethodology.wordpress.com/category/art-gallery/feed`
    if (type !== 'design' && type !== 'art') RSS_URL = `https://historytheorymethodology.wordpress.com/feed`
    
      fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => parseXML(data))
      .then(parsed => {
        parsed.channel.item.forEach(item => {
          if (item.title.includes(props.match.params.title)) {
            let indexCurrent = parsed.channel.item.indexOf(item)
            let indexNext, indexPrev;
            if (indexCurrent === parsed.channel.item.length - 1 || indexCurrent === 0) {
              if (indexCurrent === parsed.channel.item.length - 1) {
                indexNext = 0
                indexPrev = indexCurrent - 1
              }
              if (indexCurrent === 0) {
                indexNext = indexCurrent + 1
                indexPrev = parsed.channel.item.length - 1
              }
            }
            else {
              indexNext = indexCurrent + 1;
              indexPrev = indexCurrent - 1
            }
            // let img;
            console.log(indexPrev, indexCurrent, indexNext)
            let date = new Date(item.pubDate)
            let pubDate = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
            let decoded = parse(decodeHTMLEntitiesParagraphs(item['content:encoded']))
            // {item['media:content'][1] !== undefined 
            // ? img = item['media:content'][1]
            // : img = item['media:content'][0]}
            // console.log(img.url)
            setPrevTitle(parsed.channel.item[indexPrev].title)
            setNextTitle(parsed.channel.item[indexNext].title)
            setArticleBody(decoded)
            setArticleTitle(item.title)
            setArticleAuthor(item['dc:creator'])
            setArticleDate(pubDate)
            // setArticleImage(img.url)
          }
        })
    })
  }, [props.match.params.title])

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
        <div id='article'> {articleBody}
          <div id='prevAndNext'>
            <NavLink to={`/articles/${props.match.params.type.toLowerCase()}/${prevTitle}`} id='prevArticle'> 
              <i className='fa fa-angle-left' 
                style={{
                  zIndex: 1, 
                  textAlign:'center', 
                  fontSize: '2.5rem',
                  width: '1%',
                  minWidth: '20px', 
                  borderRadius: '25%', 
                  color: 'gray'}}>
              </i>
            </NavLink>
            <NavLink to={`/articles/${props.match.params.type.toLowerCase()}/${nextTitle}`} id='nextArticle'>
              <i className='fa fa-angle-right' 
                style={{
                  zIndex: 1, 
                  textAlign:'center', 
                  fontSize: '2.5rem',
                  width: '1%',
                  minWidth: '20px', 
                  borderRadius: '25%', 
                  color: 'gray'}}>
              </i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article;