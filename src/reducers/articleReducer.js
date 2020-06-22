import { 
  SET_ALL_ARTICLES,
  SET_DESIGN_ARTICLES,
  SET_ART_ARTICLES } from '../actions/types';

const INITIAL_STATE = {
  designArticles: [],
  artArticles: [],
  allArticles: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALL_ARTICLES:
      return {...state, allArticles: action.payload}
    case SET_DESIGN_ARTICLES:
      return {...state, designArticles: action.payload}
    case SET_ART_ARTICLES:
      return {...state, artArticles: action.payload}
    default:
      return state;
  }
}