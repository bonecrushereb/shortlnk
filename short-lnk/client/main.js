import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';

const routes = (
  <Router>
    <div>
      <Route path="/signup" component={Signup}/>
      <Route path="/links" component={Link}/>
    </div>
</Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
