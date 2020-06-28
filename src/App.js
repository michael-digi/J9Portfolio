import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import MainScroll from './components/MainScroll';
import Article from './components/Article';
import ArticlesByCategory from './components/ArticlesByCategory'
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route path='/' exact component = {MainScroll}/>
        <Route path='/janineteeneightynine' exact component = {MainScroll}/>
        <Route path='/articles/:type/:title' exact component = {Article}/>
        <Route path='/articles' exact component = {ArticlesByCategory}/>
        <Route path='/articles/:type' exact component = {ArticlesByCategory}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
