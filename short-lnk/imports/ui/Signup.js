import React from 'react';
import { Link } from 'react-router-dom';

export default class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({
      error: 'something went wrong.'
    })
  }
  render() {
    return (
      <div>
        <h1>Create an account</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" name="email" placeholder="example@example.com"/>
          <input type="password" name="password" placeholder="password"/>
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
