import React from 'react';
import Post from '../Post';
import SeeMorePosts from '../SeeMorePosts';
import SectionTitleMobile from '../SectionTitleMobile';
import './DesignGalleryMobile.css';

function DesignGalleryMobile(props) {

  return (
    <div id = 'designGalleryContainerMobile'>
      <div className='twoTenColumn'>
        <div id='postContainer'>
        <SectionTitleMobile section={'Design Gallery'} />
          {props.articles.length >= 1 ?
          <Post
            type={'design'}
            key={props.articles[0].title}
            link={props.articles[0].link} 
            categories={props.articles[0].category}
            img={props.articles[0]['media:content'][1].url}
            title={props.articles[0].title}
            paragraph={props.articles[0].description}
          />
          : null }
          
          {props.articles.length >=2 ?
          <Post 
            type={'design'}
            key={props.articles[1].title}
            link={props.articles[1].link} 
            categories={props.articles[1].category}
            img={props.articles[1]['media:content'][1].url}
            title={props.articles[1].title}
            paragraph={props.articles[1].description}
          />
          : null }
          
          {props.articles.length >= 3 ?
          <Post 
            type={'design'}
            key={props.articles[2].title}
            link={props.articles[2].link} 
            categories={props.articles[2].category}
            img={props.articles[2]['media:content'][1].url}
            title={props.articles[2].title}
            paragraph={props.articles[2].description}
          />
          : null }
          
          {props.articles.length >= 4 ?
          <Post 
            type={'design'}
            key={props.articles[3].title}
            link={props.articles[3].link} 
            categories={props.articles[3].category}
            img={props.articles[3]['media:content'][1].url}
            title={props.articles[3].title}
            paragraph={props.articles[3].description}
          />
          : null }
        
          {props.articles.length >= 5 ?
          <Post 
            type={'design'}
            key={props.articles[4].title}
            link={props.articles[4].link} 
            categories={props.articles[4].category}
            img={props.articles[4]['media:content'][1].url}
            title={props.articles[4].title}
            paragraph={props.articles[4].description}

          />
          : null }
          
          {props.articles.length >= 6 ?
          <Post 
            type={'design'}
            key={props.articles[5].title}
            link={props.articles[5].link} 
            categories={props.articles[5].category}
            img={props.articles[5]['media:content'][1].url}
            title={props.articles[5].title}
            paragraph={props.articles[5].description}
          />
          : null }
          
          {props.articles.length >= 7 ?
          <Post 
            type={'design'}
            key={props.articles[6].title}
            link={props.articles[6].link} 
            categories={props.articles[6].category}
            img={props.articles[6]['media:content'][1].url}
            title={props.articles[6].title}
            paragraph={props.articles[6].description}
          />
          : null }

        {props.articles.length >= 8 ?
          <Post 
            type={'design'}
            key={props.articles[7].title}
            link={props.articles[7].link} 
            categories={props.articles[7].category}
            img={props.articles[7]['media:content'][1].url}
            title={props.articles[7].title}
            paragraph={props.articles[7].description}
          />
          : null }
          
          <SeeMorePosts type='Design'/>
        
        </div>
      </div>
    
    </div>
  )
}

export default DesignGalleryMobile;