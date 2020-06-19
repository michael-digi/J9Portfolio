import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import './DesignGallery.css';

function ArtGallery() {
  const RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`;
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      setArticles(data.getElementsByTagName('item'))
    })
  }, [])

  return (
    <div id = 'designGalleryContainer'>

      {/* {articles.length > 0 ? console.log(articles[0].getElementsByTagName('content:encoded')[0].textContent.split('<p>')[2].slice(0, 200) + '...') : null} */}
      {articles.length > 0 ? console.log(articles[0].getElementsByTagName('media:content')[1].getAttribute('url')) : null}
      <div className='twoTenColumn'>
        
        
        <div id='postContainer'>
          {articles.length > 0 ?
          <div className='post' >
            <div className='postImage' style={{backgroundImage: `url(${articles[0].getElementsByTagName('media:content')[1].getAttribute('url')})`}}></div>
            <div className='postTitle'> <b> {articles[0].getElementsByTagName('title')[0].textContent} </b>  </div>
            <div className='postParagraph'> {articles[0].getElementsByTagName('description')[0].innerHTML.split('[')[2].slice(0,122)}... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          : null }
          
          {articles.length > 0 ?
          <div className='post' >
            <div className='postImage' style={{backgroundImage: `url(${articles[1].getElementsByTagName('media:content')[1].getAttribute('url')})`}}></div>
            <div className='postTitle'> <b> {articles[1].getElementsByTagName('title')[0].textContent} </b>  </div>
            <div className='postParagraph'> {articles[1].getElementsByTagName('description')[0].innerHTML.split('[')[2].slice(0,122)}... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          : null }
          
          {articles.length > 0 ?
          <div className='post' >
            <div className='postImage' style={{backgroundImage: `url(${articles[2].getElementsByTagName('media:content')[1].getAttribute('url')})`}}></div>
            <div className='postTitle'> <b> {articles[2].getElementsByTagName('title')[0].textContent} </b>  </div> 
            <div className='postParagraph'> {articles[2].getElementsByTagName('description')[0].innerHTML.split('[')[2].slice(0,122)}... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          : null }
        
        </div>
      </div>
      
      <div className='tenFourteenColumn'>
        <div id='postContainer'>
          
        {articles.length > 0 ?
          <div className='post' >
            <div className='postImage' style={{backgroundImage: `url(${articles[3].getElementsByTagName('media:content')[1].getAttribute('url')})`}}></div>
            <div className='postTitle'> <b> {articles[3].getElementsByTagName('title')[0].textContent} </b>  </div> 
            <div className='postParagraph'> {articles[3].getElementsByTagName('description')[0].innerHTML.split('[')[2].slice(0,122)}... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          : null }
          
          {articles.length > 0 ?
          <div className='post' >
            <div className='postImage' style={{backgroundImage: `url(${articles[4].getElementsByTagName('media:content')[1].getAttribute('url')})`}}></div>
            <div className='postTitle'> <b> {articles[4].getElementsByTagName('title')[0].textContent} </b>  </div> 
            <div className='postParagraph'> {articles[4].getElementsByTagName('description')[0].innerHTML.split('[')[2].slice(0,122)}... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          : null }
          
          {articles.length > 0 ?
          <div className='post' >
            <div className='postImage' style={{backgroundImage: `url(${articles[5].getElementsByTagName('media:content')[1].getAttribute('url')})`}}></div>
            <div className='postTitle'> <b> {articles[5].getElementsByTagName('title')[0].textContent} </b>  </div> 
            <div className='postParagraph'> {articles[5].getElementsByTagName('description')[0].innerHTML.split('[')[2].slice(0,122)}... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          : null }
          
        </div>
      </div>
      
      <div className='fourteenEighteenColumn'>
        <div id='postContainer'>
          
        {articles.length > 0 ?
          <div className='post' >
            <div className='postImage' style={{backgroundImage: `url(${articles[6].getElementsByTagName('media:content')[1].getAttribute('url')})`}}></div>
            <div className='postTitle'> <b> {articles[6].getElementsByTagName('title')[0].textContent} </b>  </div> 
            <div className='postParagraph'> {articles[6].getElementsByTagName('description')[0].innerHTML.split('[')[2].slice(0,122)}... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          : null }
          
        {articles.length > 0 ?
          <div className='post' >
            <div className='postImage' style={{backgroundImage: `url(${articles[7].getElementsByTagName('media:content')[1].getAttribute('url')})`}}></div>
            <div className='postTitle'> <b> {articles[7].getElementsByTagName('title')[0].textContent} </b>  </div> 
            <div className='postParagraph'> {articles[7].getElementsByTagName('description')[0].innerHTML.split('[')[2].slice(0,122)}... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          : null }

          {/* <div className='post' >
            <div className='postImage'></div>
            {articles.length > 0 ? <div className='postTitle'> <b> {articles[8].getElementsByTagName('title')[0].textContent} </b>  </div> : null}
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet... </div>
            <div className='readMore'> Continue Reading > </div>
          </div> */}
          
        </div>
      </div>

      <div className='fourthColumn'>
        
      </div>
    
    </div>
  )
}

export default ArtGallery;

{/* <div className='postImage'></div>
            <div className='postTitle'> <b> What on Earth is a Garden?, Hunt </b> </div>
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet...</div>
            <div className='readMore'> Continue Reading ></div> */}