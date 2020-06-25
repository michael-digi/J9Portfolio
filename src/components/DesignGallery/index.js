import React, { useEffect } from 'react';
import { setDesignArticles } from '../../actions';
import { useSelector, useDispatch } from 'react-redux'
import { parseXML } from '../helpers';
import Post from '../Post';
import DesignGalleryMobile from '../DesignGalleryMobile'
import SeeMorePosts from '../SeeMorePosts';
import './DesignGallery.css';

function DesignGallery() {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.currentArticles.designArticles)
  const RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`;
  // const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => parseXML(data))
    .then(parsed => {
      dispatch(setDesignArticles(parsed.channel.item))
    })
  }, [])

  return (
    <>
    <DesignGalleryMobile />
    <div id = 'designGalleryContainer'>
      <div className='twoTenColumn'>

        <div id='postContainer'>
          {articles.length >= 1 ?
          <Post
            type={'design'}
            key={articles[0].title}
            link={articles[0].link} 
            categories={articles[0].category}
            img={articles[0]['media:content'][1].url}
            title={articles[0].title}
            paragraph={articles[0].description}
            // content={articles[0]['content:encoded']} 
          />
          : null }
          
          {articles.length >=2 ?
          <Post 
            type={'design'}
            key={articles[1].title}
            link={articles[1].link} 
            categories={articles[1].category}
            img={articles[1]['media:content'][1].url}
            title={articles[1].title}
            paragraph={articles[1].description}
            // content={articles[1]['content:encoded']} 
          />
          : null }
          
          {articles.length >= 3 ?
          <Post 
            type={'design'}
            key={articles[2].title}
            link={articles[2].link} 
            categories={articles[2].category}
            img={articles[2]['media:content'][1].url}
            title={articles[2].title}
            paragraph={articles[2].description}
            // content={articles[2]['content:encoded']} 
          />
          : null }
          
          {articles.length >= 4 ?
          <Post 
            type={'design'}
            key={articles[3].title}
            link={articles[3].link} 
            categories={articles[3].category}
            img={articles[3]['media:content'][1].url}
            title={articles[3].title}
            paragraph={articles[3].description}
            // content={articles[3]['content:encoded']} 
          />
          : null }
        
        </div>
      </div>
      
      <div className='tenFourteenColumn'>
        <div id='postContainer'>
          
          {articles.length >= 5 ?
          <Post 
            type={'design'}
            key={articles[4].title}
            link={articles[4].link} 
            categories={articles[4].category}
            img={articles[4]['media:content'][1].url}
            title={articles[4].title}
            paragraph={articles[4].description}
            // content={articles[4]['content:encoded']} 
          />
          : null }
          
          {articles.length >= 6 ?
          <Post 
            type={'design'}
            key={articles[5].title}
            link={articles[5].link} 
            categories={articles[5].category}
            img={articles[5]['media:content'][1].url}
            title={articles[5].title}
            paragraph={articles[5].description}
            // content={articles[5]['content:encoded']} 
          />
          : null }
          
          {articles.length >= 7 ?
          <Post 
            type={'design'}
            key={articles[6].title}
            link={articles[6].link} 
            categories={articles[6].category}
            img={articles[6]['media:content'][1].url}
            title={articles[6].title}
            paragraph={articles[6].description}
            // content={articles[6]['content:encoded']} 
          />
          : null }
          
        </div>
      </div>
      
      <div className='fourteenEighteenColumn'>
        <div id='postContainer'>
            
        {articles.length >= 8 ?
          <Post 
            type={'design'}
            key={articles[7].title}
            link={articles[7].link} 
            categories={articles[7].category}
            img={articles[7]['media:content'][1].url}
            title={articles[7].title}
            paragraph={articles[7].description}
            // content={articles[7]['content:encoded']} 
          />
          : null }
          
          <SeeMorePosts type='Design'/>
        
        </div>
      </div>
    
    </div>
    </>
  )
}

export default DesignGallery;

{/* <div className='postImage'></div>
            <div className='postTitle'> <b> What on Earth is a Garden?, Hunt </b> </div>
            <div className='postParagraph'> John Dixon Hunt introduces the concept of a garden 
            by questioning what exactly it is. Before providing a definitive answer, 
            however, he questions whether there is such an answer, and what difference 
            it would make if it were implemented. “It is what it is,” he quotes a French poet...</div>
            <div className='readMore'> Continue Reading ></div> */}