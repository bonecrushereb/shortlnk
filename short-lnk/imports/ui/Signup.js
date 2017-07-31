import React from 'react';
import { Link } from 'react-router-dom';

export default class signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Create an account</h1>

      <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
