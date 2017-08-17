import { Meteor } from 'meteor/meteor';
import React from 'react';
import Clipboard from 'clipboard';
import propTypes from 'prop-types';


export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false
    };
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      this.setState({ justCopied: true });
      setTimeout(() => this.setState({ justCopied: false }), 1000)
    }).on('error', () => {
      console.log('Unable to copy to clipboard, please manually copy link');
    });

  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
      <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied ? 'Copied': 'Copy'}</button>
    <button onClick={() => {
        Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
      }}>{this.props.visible ? 'Hide' : 'Unhide'}</button>
      </div>
    );
  }
};

LinksListItem.propTypes = {
  _id: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
  visible: propTypes.bool.isRequired,
  shortUrl: propTypes.string.isRequired
}
