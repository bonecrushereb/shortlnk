import { Meteor } from 'meteor/meteor';
import React from 'react';
import Clipboard from 'clipboard';
import propTypes from 'prop-types';
import moment from 'moment';


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
  renderStats(){
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
    let visitedMessage = null;

    if (typeof this.props.lastVisited === 'number') {
      visitedMessage = `(visited ${ moment(this.props.lastVisited).fromNow() })`;
    }

    return <p>{this.props.visitedCount} {visitMessage} {visitedMessage}</p>
  }
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        {this.renderStats()}
        <a className="button button--pill button--link" href={this.props.shortUrl} target="_blank">Visit</a>
        <button className="button button--pill" ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied ? 'Copied': 'Copy'}</button>
        <button className="button button--pill" onClick={() => {
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
  shortUrl: propTypes.string.isRequired,
  visitedCount: propTypes.number.isRequired,
  lastVisited: propTypes.number
}
