import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { parseXML, prepareArticle } from '../helpers';
import SideNavArticles from '../SideNavArticles';
import ArticlesInfo from '../ArticlesInfo';
import ArticlesNavMobile from '../ArticlesNavMobile';
import { NavLink } from 'react-router-dom';
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

  function scrollToTop() {
    scroll.scrollToTop({duration: 500})
  }
  
  useEffect(() => {
    // window.scrollTo({top: 0, left:0, behavior: 'smooth'})
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
            let articleData = prepareArticle(parsed.channel.item, item, index)
            setArticleData(articleData)
          }
        })
    })
    scrollToTop()
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
                  left: '93vw',
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