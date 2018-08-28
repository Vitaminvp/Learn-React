import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Miss, Match } from 'react-router';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';
import './css/style.css';

const Root = () => {
  return (
      <BrowserRouter>
          <div>
              <Match exectly pattern="/" component={StorePicker} />
              <Match pattern="/store/:storeId" component={App} />
              <Miss component={NotFound}/>
          </div>
      </BrowserRouter>
  )
};

render(<Root/>, document.querySelector('#main'));