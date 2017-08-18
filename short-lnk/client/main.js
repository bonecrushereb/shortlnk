import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { routes } from '../imports/routes/routes';
import { Session } from 'meteor/session';
import '../imports/startup/simple-schema-config';

Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));
});
