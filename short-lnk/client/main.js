import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import createBrowserHistory from 'history/createBrowserHistory';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const history = createBrowserHistory();

const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => (
          Meteor.userId() ? (
            <Redirect to="/links"/>
          ) : (
            <Login />
          )
        )}/>
      <Route exact path="/signup" render={() => (
          Meteor.userId() ? (
            <Redirect to="/links"/>
          ) : (
            <Signup />
          )
        )}/>
      <Route exact path="/links" render={() => (
          !Meteor.userId() ? (
            <Redirect to="/"/>
          ) : (
            <Link />
          )
        )}/>
      <Route component={NotFound}/>
    </Switch>
</Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated) {
    history.push('/links');
  } else if(isAuthenticatedPage && !isAuthenticated) {
    history.push('/');
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
