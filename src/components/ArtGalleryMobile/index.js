import React, { useState, useEffect } from 'react';
import Post from '../Post';
import SeeMorePosts from '../SeeMorePosts';
import SectionTitleMobile from '../SectionTitleMobile';
import '../DesignGallery/DesignGallery.css';

function ArtGalleryMobile(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    let postArray = []
    let img;
    
    if (props.articles.length === 0) return
    for (let i = 0; i < 9; i++) {
      if (props.articles[i]['media:content'][1] === undefined) {
        img = props.articles[i]['media:content'].url
      }
      else {
        img = props.articles[i]['media:content'][1].url
      }
      postArray.push(<Post
        type={'art'}
        key={props.articles[i].title}
        link={props.articles[i].link} 
        categories={props.articles[i].category} 
        img={img}
        title={props.articles[i].title}
        paragraph={props.articles[i].description} />)
    }
    setPosts(postArray)
  }, [props.articles])

  return (
    <div id = 'designGalleryContainerMobile'>
      <div className='twoTenColumn'>
        <div id='postContainer'>
          <SectionTitleMobile section={'Art Gallery'} />
          {posts}
          <SeeMorePosts type='Art'/>
        </div>
      </div>
    </div>
  )
}

export default ArtGalleryMobile;