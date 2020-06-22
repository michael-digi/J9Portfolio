import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainScroll from './components/MainScroll';
import Article from './components/Article';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact component = {MainScroll}/>
        <Route path='/J9Portfolio' exact component = {MainScroll}/>
        <Route path='/articles/:type/:title' exact component = {Article}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
