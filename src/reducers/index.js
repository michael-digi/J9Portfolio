import { combineReducers } from 'redux'
import articlesReducer from './articleReducer';

export default combineReducers({
  currentArticles: articlesReducer
})