import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const routes = (
  <Router>
    <Switch>
      <Route exact path="/" compoent={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/links" component={Link}/>
      <Route component={NotFound}/>
    </Switch>
</Router>
);

// Tracker.autorun(() => {
//   const isAuthenticated = !!Meteor.userId();
//   const pathname = location.pathname;
//   const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
//   const isAuthenticatedPage = authenticatedPages.includes(pathname);
//
//   console.log('pathname', pathname);
//   console.log('isAuthenticated', isAuthenticated);
// });

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
