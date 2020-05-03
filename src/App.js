import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import history from './components/History';
import Layout from './pages/Layout';
import index from './pages/index';
import NewsDetails from './pages/NewsDetails'

import './App.css';

function App() {
  return (
    <div class='body'>
      <BrowserRouter basename={'/'} >
        <Router history={history}>
          <Switch>
            <Layout>
              <Route exact path={`/`} component={index} />
              <Route exact path={`/NewsDetails/:id/:auth`} component={NewsDetails} />
            </Layout>
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
