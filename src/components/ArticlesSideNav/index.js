import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
// import { useRouteMatch } from 'react-router-dom';
import './ArticlesSideNav.css';

function ArticlesSideNav(props) {
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
          <div id='categoryNavContainer'>
             <> <div id='navContainerTitle'> Article Categories </div> 
            <ul>
              <NavLink className='categoryLinks' to={'/articles'}> All articles </NavLink>
              <NavLink className='categoryLinks' to={'/articles/design'}> Design articles </NavLink>
              <NavLink className='categoryLinks' to={'/articles/art'}> Art Articles </NavLink>
            </ul> </> 
          </div>
        </div>
    </>
  )
}

export default ArticlesSideNav;