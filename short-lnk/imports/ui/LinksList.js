import React from 'react';

export default class LinksList extends React.Component {
  componentDidMount() {
    console.log('componentDidMount LinksList');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
        <div>
          <p>Links List</p>
        </div>
    );
  }
};
