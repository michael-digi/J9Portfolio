import React, { useState, useEffect } from 'react';
import { parseXML, decodeHTMLEntitiesParagraphs } from '../helpers';
import SideNavArticles from '../SideNavArticles';
import ArticlesInfo from '../ArticlesInfo';
import ArticlesNavMobile from '../ArticlesNavMobile';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';
import './Article.css';

function Article(props) {
  const [articleData, setArticleData] = useState({
    articleBody: [],
    articleTitle: '',
    articleAuthor: '',
    articleDate: '',
    nextTitle: '',
    prevTitle: ''
  })
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
        parsed.channel.item.forEach((item, index) => {
          if (item.title.includes(props.match.params.title)) {
            let length = parsed.channel.item.length
            let indexCurrent = index;
            let indexNext = (indexCurrent + 1) % (length);
            let indexPrev = (indexCurrent - 1) % (length)
            if (indexPrev === -1) indexPrev = length - 1

            let date = new Date(item.pubDate)
            let pubDate = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
            let decoded = decodeHTMLEntitiesParagraphs(item['content:encoded'])
            console.log(decoded)
            let parseDecoded = parse(decoded)
            let articleData = {
              articleBody: parseDecoded,
              articleTitle: item.title,
              articleAuthor: item['dc:creator'],
              articleDate: pubDate,
              nextTitle: parsed.channel.item[indexNext].title,
              prevTitle: parsed.channel.item[indexPrev].title
            }
            setArticleData(articleData)
          }
        })
    })
    return function cleanup() {
      console.log('unmounted')
      let articleData = {
        articleBody: [],
        articleTitle: '',
        articleAuthor: '',
        articleDate: '',
        nextTitle: '',
        prevTitle: ''
      }
      setArticleData(articleData)
    }
  }, [props.match.params.title])

  return (
    <>
      <ArticlesNavMobile />
      <SideNavArticles type={props.match.params.type.toLowerCase()} />
      <div id='articleContainer'>
        <ArticlesInfo 
          articleTitle={articleData.articleTitle} 
          articleAuthor={articleData.articleAuthor}
          articleDate={articleData.articleDate}
        />
        <div id='article'> {articleData.articleBody}
            <NavLink to={`/articles/${props.match.params.type.toLowerCase()}/${articleData.nextTitle}`} id='nextArticleMobile'> 
              <i className='fa fa-angle-right'  
                style={{
                  zIndex: 1, 
                  textAlign:'center', 
                  // backgroundColor: 'black', 
                  position: 'fixed', 
                  top: '50%',
                  left: '90vw',
                  fontSize: '2.5rem',
                  width: '1%',
                  minWidth: '20px', 
                  borderRadius: '25%', 
                  color: 'gray'}}></i>
            </NavLink>
            <NavLink to={`/articles/${props.match.params.type.toLowerCase()}/${articleData.prevTitle}`} id='prevArticleMobile'> 
              <i className='fa fa-angle-left' 
                style={{
                  zIndex: 1, 
                  textAlign:'center', 
                  // backgroundColor: 'black', 
                  position: 'fixed',
                  fontSize: '2.5rem',
                  top: '50%',
                  left: '3.5vw',
                  width: '1%',
                  minWidth: '20px', 
                  borderRadius: '25%', 
                  color: 'gray'}}></i>
            </NavLink>
          {/* </div> */}
          <div id='prevAndNext'>
            <NavLink to={`/articles/${props.match.params.type.toLowerCase()}/${articleData.prevTitle}`} id='prevArticle'> 
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
            <NavLink to={`/articles/${props.match.params.type.toLowerCase()}/${articleData.nextTitle}`} id='nextArticle'>
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