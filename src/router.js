import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/index/index';
import Home from './pages/home';

const Router = ({ history }) => (
  <HashRouter history={history}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </HashRouter>
);
export default Router;