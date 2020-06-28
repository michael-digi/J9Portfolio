import React, { useEffect } from 'react';
import DesignGallery from '../DesignGallery';
import { setArtArticles } from '../../actions';
import { useSelector, useDispatch } from 'react-redux'
import { parseXML } from '../helpers';

function DesignGalleryContainer() {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.currentArticles.artArticles)
  const RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`;
  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => parseXML(data))
    .then(parsed => {
      console.log(parsed.channel.item, ' this is the item')
      dispatch(setArtArticles(parsed.channel.item))
    })
  }, [])
  
  return <DesignGallery articles={articles} />
}

export default DesignGalleryContainer;