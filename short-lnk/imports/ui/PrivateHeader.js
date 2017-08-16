import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

const PrivateHeader = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    <button onClick={() => {
        Accounts.logout();
        props.history.push('/');
      }}>Logout</button>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: propTypes.string.isRequired
};

export default withRouter(PrivateHeader);
