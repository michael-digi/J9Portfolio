import React, { useEffect } from 'react';
// import axios from 'axios'
import './DesignGallery.css';

function ArtGallery() {
  const RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`;
  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => console.log(data))
  }, [])

  return (
    <div id = 'designGalleryContainer'>
      
      <div className='twoTenColumn'>
        
        
        <div id='postContainer'>
          <div className='post' >
            <div className='postImage'></div>
            <div className='postTitle'> <b> What on Earth is a Garden?, Hunt </b>  </div>
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          <div className='post' >
            <div className='postImage'></div>
            <div className='postTitle'> <b> What on Earth is a Garden?, Hunt </b>  </div>
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          <div className='post' >
            <div className='postImage'></div>
            <div className='postTitle'> <b> What on Earth is a Garden?, Hunt </b>  </div>
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
        </div>
      </div>
      
      <div className='tenFourteenColumn'>
        <div id='postContainer'>
          
          <div className='post' >
            <div className='postImage'></div>
            <div className='postTitle'> <b> What on Earth is a Garden?, Hunt </b>  </div>
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          <div className='post' >
            <div className='postImage'></div>
            <div className='postTitle'> <b> What on Earth is a Garden?, Hunt </b>  </div>
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          
        </div>
      </div>
      
      <div className='fourteenEighteenColumn'>
        <div id='postContainer'>
          
          <div className='post' >
            <div className='postImage'></div>
            <div className='postTitle'> <b> What on Earth is a Garden?, Hunt </b>  </div>
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet... </div>
            <div className='readMore'> Continue Reading > </div>
          </div>
          
        </div>
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