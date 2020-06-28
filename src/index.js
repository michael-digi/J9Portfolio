import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers)
try {
  let type = (typeof InstallTrigger)
  if (type === 'undefined') window.screen.orientation.lock('portrait')
}
catch {
  console.log('not supported')
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

