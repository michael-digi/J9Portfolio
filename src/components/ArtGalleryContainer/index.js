import React, { useEffect } from 'react';
import ArtGallery from '../ArtGallery';
import { setArtArticles } from '../../actions';
import { useSelector, useDispatch } from 'react-redux'
import { parseXML } from '../helpers';

function ArtGalleryContainer() {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.currentArticles.artArticles)
  const RSS_URL = `https://historytheorymethodology.wordpress.com/category/art-gallery/feed`;
  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/' + RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => parseXML(data))
    .then(parsed => {
      dispatch(setArtArticles(parsed.channel.item))
    })
  }, [])
  
  return <ArtGallery articles={articles} />
}

export default ArtGalleryContainer;