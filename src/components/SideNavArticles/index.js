import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideNavArticles.css';

function SideNavArticles(props) {
  const [styles, setStyles] = useState({
    design: 'navTab',
    art: 'navTab',
    all: 'navTab'
  })

  useEffect(() => {
    let newState;
    let type = props.type;
    console.log(type)
    if (type === 'art') newState = {design: 'navTab', art: 'navTabActive', all: 'navTab'}
    if (type === 'design') newState = {design: 'navTabActive', art: 'navTab', all: 'navTab'}
    if (type === 'all') newState = {design: 'navTab', art: 'navTab', all: 'navTabActive'}
    setStyles(newState)
  }, [props.type])
  
  return (
    <div id='sidebar'>
      <Link className={styles.design} to='/articles/design'>Design Gallery</Link>
      <Link className={styles.art} to='/articles/art'>Art Gallery</Link>
      <Link className={styles.all} to='/articles/all'>All Content</Link>
      <Link className='navTab' to='/'>j1989</Link>
      {/* <Link className='navTab' to='projects'>Projects</Link> */}
    </div>
  );
}

export default SideNavArticles;