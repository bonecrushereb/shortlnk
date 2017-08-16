import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

// export class PrivateHeader extends React.Component {
//   onLogout() {
//     Accounts.logout();
//     this.props.history.push('/');
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.onLogout.bind(this)}>Logout</button>
//       </div>
//     );
//   }
// }

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
