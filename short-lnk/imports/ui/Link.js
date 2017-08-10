import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';


export class Link extends React.Component {
  onLogout() {
    Accounts.logout();
    this.props.history.push('/');
  }
  onSubmit(e) {
    e.preventDefault();

    const url = this.refs.url.value.trim();

    if (url) {
      Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    }
  }
  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <LinksList />
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL"/>
          <button>Add Links</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Link);
