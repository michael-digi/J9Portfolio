import React from 'react';
import './ArticlesInfo.css';

function ArticlesInfo(props) {
  return (
    <>
        <div id='articleTitleContainer'>
          <h1 id='articleTitle'> {props.articleTitle} </h1>
          <div id='articleAuthorAndDate'> 
            <div id='author'>
              {props.articleAuthor 
              ? `Posted by ${props.articleAuthor}` 
              : null}
            </div>
            <div id='date'>
              {props.articleDate}
            </div>
          </div>
        </div>
    </>
  )
}

export default ArticlesInfo;