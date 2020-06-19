import React, { useState, useEffect } from 'react';
import Post from '../Post';
// import axios from 'axios'
import './ArtGallery.css';

function ArtGallery() {
  const RSS_URL = `https://historytheorymethodology.wordpress.com/category/art-gallery/feed`;
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
      {articles.length > 0 ? console.log(articles[0].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]) : null}
      <div className='twoTenColumn'>

        <div id='postContainer'>
          {articles.length >= 1 ?
          <Post 
            img={articles[0].getElementsByTagName('media:content')[1].getAttribute('url')}
            title={articles[0].getElementsByTagName('title')[0].textContent}
            paragraph={articles[0].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} />
          : null }
          
          {articles.length >= 2 ?
          <Post 
            img={articles[1].getElementsByTagName('media:content')[1].getAttribute('url')}
            title={articles[1].getElementsByTagName('title')[0].textContent}
            paragraph={articles[1].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} /> 
          : null }
          
          {articles.length >= 3 ?
          <Post 
            img={articles[2].getElementsByTagName('media:content')[1].getAttribute('url')}
            title={articles[2].getElementsByTagName('title')[0].textContent}
            paragraph={articles[2].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} />
          : null }
        
        </div>
      </div>
      
      <div className='tenFourteenColumn'>
        <div id='postContainer'>
          
        {articles.length >= 4 ?
          <Post 
            img={articles[3].getElementsByTagName('media:content')[1].getAttribute('url')}
            title={articles[3].getElementsByTagName('title')[0].textContent}
            paragraph={articles[3].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} /> 
          : null }
          
          {articles.length >= 5 ?
          <Post 
            img={articles[4].getElementsByTagName('media:content')[1].getAttribute('url')}
            title={articles[4].getElementsByTagName('title')[0].textContent}
            paragraph={articles[4].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} />
          : null }
          
          {articles.length >= 6 ?
          <Post 
            img={articles[5].getElementsByTagName('media:content')[1].getAttribute('url')}
            title={articles[5].getElementsByTagName('title')[0].textContent}
            paragraph={articles[5].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]}/> 
          : null }
          
        </div>
      </div>
      
      <div className='fourteenEighteenColumn'>
        <div id='postContainer'>
          
        {articles.length >= 7 ?
          <Post 
            img={articles[6].getElementsByTagName('media:content')[1].getAttribute('url')}
            title={articles[6].getElementsByTagName('title')[0].textContent}
            paragraph={articles[6].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]}/> 
          : null }
          
        {articles.length >= 8 ?
          <Post 
            img={articles[7].getElementsByTagName('media:content')[1].getAttribute('url')}
            title={articles[7].getElementsByTagName('title')[0].textContent}
            paragraph={articles[7].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} /> 
          : null }
        
        {articles.length >= 9 ?
          <Post 
            img={articles[8].getElementsByTagName('media:content')[0].getAttribute('url')}
            title={articles[8].getElementsByTagName('title')[0].textContent}
            paragraph={articles[8].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} /> 
          : null }
        
        </div>
      </div>
    
    </div>
  )
}

export default ArtGallery;