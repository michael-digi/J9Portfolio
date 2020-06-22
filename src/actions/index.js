import { 
  SET_ALL_ARTICLES,
  SET_DESIGN_ARTICLES,
  SET_ART_ARTICLES } from './types';

export const setAllArticles = articles => {
  return {
    type: SET_ALL_ARTICLES,
    payload: articles
  }
}

export const setDesignArticles = articles => {
  return {
    type: SET_DESIGN_ARTICLES,
    payload: articles
  }
}

export const setArtArticles = articles => {
  return {
    type: SET_ART_ARTICLES,
    payload: articles
  }
}