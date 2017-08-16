import React from 'react';
import propTypes from 'prop-types';


export default class LinksListItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
      </div>
    );
  }
};

LinksListItem.propTypes = {
  _id: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
  shortUrl: propTypes.string.isRequired,
}
