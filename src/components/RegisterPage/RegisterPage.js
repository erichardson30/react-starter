/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RegisterPage.scss';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';

const title = 'New User Registration';

class RegisterPage extends Component {
    state = UserStore.getState();

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  emailChange = (val) => {
      this.setState({email: val});
  };
  passChange = (val) => {
      this.setState({password: val});
  };
  confirmPassChange = (val) => {
      if (val === this.state.password) {
          this.setState({passwordsMatch: true});
      } else {
          this.setState({passwordsMatch: false});
      }
  };

  signup = () => {
      UserActions.createUser(this.state);
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
              <TextInput hintText="Email"
                  change={this.emailChange}/>
              <TextInput hintText="Password"
                  change={this.passChange}/>
              <TextInput hintText="Confirm Password"
                  change={this.confirmPassChange}/>
              {(this.state.password != null && !this.state.passwordsMatch) ? <div>Passwords do not match</div> : null}
              <Button label="Sign up" onSubmit={this.signup} disabled={this.state.passwordsMatch}/>
        </div>
      </div>
    );
  }

}

export default withStyles(RegisterPage, s);
