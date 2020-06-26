import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainScroll from './components/MainScroll';
import Article from './components/Article';
import AllArticles from './components/AllArticles';
import ArticlesByCategory from './components/ArticlesByCategory'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component = {MainScroll}/>
        <Route path='/janineteeneightynine' exact component = {MainScroll}/>
        <Route path='/articles/:type/:title' exact component = {Article}/>
        <Route path='/articles' exact component = {AllArticles}/>
        <Route path='/articles/:type' exact component = {ArticlesByCategory}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
