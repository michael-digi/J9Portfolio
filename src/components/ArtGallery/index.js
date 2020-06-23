import React, { useState, useEffect } from 'react';
import Post from '../Post';
import SeeMorePosts from '../SeeMorePosts';
import { setArtArticles } from '../../actions';
import { useSelector, useDispatch } from 'react-redux'
import { parseXML } from '../helpers';
import '../DesignGallery/DesignGallery.css';

function ArtGallery() {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.currentArticles.artArticles)
  const RSS_URL = `https://historytheorymethodology.wordpress.com/category/art-gallery/feed`;
  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => parseXML(data))
    .then(parsed => dispatch(setArtArticles(parsed.channel.item)))
  }, [])

  return (
    <div id = 'designGalleryContainer'>
      <div className='twoTenColumn'>
        <div id='postContainer'>
          {articles.length >= 1 ?
          <Post
            type={'art'}
            key={articles[0].title}
            link={articles[0].link} 
            categories={articles[0].category} 
            img={articles[0]['media:content'][1].url}
            title={articles[0].title}
            paragraph={articles[0].description} />
          : null }
          
          {articles.length >= 2 ?
          <Post 
            type={'art'}
            key={articles[1].title}
            link={articles[1].link} 
            categories={articles[1].category}
            img={articles[1]['media:content'][1].url}
            title={articles[1].title}
            paragraph={articles[1].description} />
          : null }
          
          {articles.length >= 3 ?
          <Post 
            type={'art'}
            key={articles[2].title}
            link={articles[2].link} 
            categories={articles[2].category}
            img={articles[2]['media:content'][1].url}
            title={articles[2].title}
            paragraph={articles[2].description} />
          : null }
          
          {articles.length >= 4 ?
          <Post 
            type={'art'}
            key={articles[3].title}
            link={articles[3].link} 
            categories={articles[3].category}
            img={articles[3]['media:content'][1].url}
            title={articles[3].title}
            paragraph={articles[3].description} />
          : null }
        
        </div>
      </div>
      
      <div className='tenFourteenColumn'>
        <div id='postContainer'>
          
          
          {articles.length >= 5 ?
          <Post 
            type={'art'}
            key={articles[4].title}
            link={articles[4].link} 
            categories={articles[4].category}
            img={articles[4]['media:content'][1].url}
            title={articles[4].title}
            paragraph={articles[4].description} />
          : null }
          
          {articles.length >= 6 ?
          <Post 
            type={'art'}
            key={articles[5].title}
            link={articles[5].link} 
            categories={articles[5].category}
            img={articles[5]['media:content'][1].url}
            title={articles[5].title}
            paragraph={articles[5].description} />
          : null }
          
          {articles.length >= 7 ?
          <Post 
            type={'art'}
            key={articles[6].title}
            link={articles[6].link} 
            categories={articles[6].category}
            img={articles[6]['media:content'][1].url}
            title={articles[6].title}
            paragraph={articles[6].description} />
          : null }
          
          {articles.length >= 8 ?
          <Post
            type={'art'}
            key={articles[7].title}
            link={articles[7].link} 
            categories={articles[7].category} 
            img={articles[7]['media:content'][1].url}
            title={articles[7].title}
            paragraph={articles[7].description} />
          : null }
          
        </div>
      </div>
      
      <div className='fourteenEighteenColumn'>
        <div id='postContainer'>
          
        {articles.length >= 9 ?
          <Post 
            type={'art'}
            key={articles[8].title}
            link={articles[8].link} 
            categories={articles[8].category}
            img={articles[8]['media:content'].url}
            title={articles[8].title}
            paragraph={articles[8].description} />
          : null }
        
        <SeeMorePosts type='Art'/>
        
        </div>
      </div>
    
    </div>
  )
}

export default ArtGallery;