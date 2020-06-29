import React, { useState, useEffect } from 'react';
import Post from '../Post';
import SeeMorePosts from '../SeeMorePosts';
import ArtGalleryMobile from '../ArtGalleryMobile';
import '../DesignGallery/DesignGallery.css';

function ArtGallery(props) {
  const [articlesByColumn, setArticlesByColumn] = useState({articles: 
    { columnOne: [],
      columnTwo: [],
      columnThree: [] }
  })

  useEffect(() => {
    let one = []
    let two = []
    let three = []
    props.articles.forEach((article, index) => {
      let img;
      if (props.articles[index]['media:content'][1] === undefined) {
        img = props.articles[index]['media:content'].url
      }
      else {
        img = props.articles[index]['media:content'][1].url
      }
      if (index <= 3) {
        one.push(
          <Post
            type={'art'}
            key={props.articles[index].title}
            link={props.articles[index].link} 
            categories={props.articles[index].category}
            img={img}
            title={props.articles[index].title}
            paragraph={props.articles[index].description}
          />
        )
      }
      if(index > 3 && index <= 7) {
        two.push(
          <Post
            type={'art'}
            key={props.articles[index].title}
            link={props.articles[index].link} 
            categories={props.articles[index].category}
            img={img}
            title={props.articles[index].title}
            paragraph={props.articles[index].description}
          />
        )
      }
      if(index === 8) {
        three.push(
          <Post
            type={'art'}
            key={props.articles[index].title}
            link={props.articles[index].link} 
            categories={props.articles[index].category}
            img={img}
            title={props.articles[index].title}
            paragraph={props.articles[index].description}
          />
        )
      }
    })
    setArticlesByColumn({
      articles: {
        columnOne: one,
        columnTwo: two,
        columnThree: three
      }
    })

  }, [props.articles])

  return (
    <>
      <ArtGalleryMobile articles={props.articles} />
      <div id = 'designGalleryContainer'>
      
        <div className='twoTenColumn'>
          <div id='postContainer'>
            {articlesByColumn.articles.columnOne}
          </div>
        </div>
      
        <div className='tenFourteenColumn'>
          <div id='postContainer'>
            {articlesByColumn.articles.columnTwo}
          </div>
        </div>
      
        <div className='fourteenEighteenColumn'>
          <div id='postContainer'>
            {articlesByColumn.articles.columnThree}
            <SeeMorePosts type='Art'/>
          </div>
        </div>
    
      </div>
  </>
  )
}

export default ArtGallery;

ArtGallery.defaultProps = {
  articles: []
}