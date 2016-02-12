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
import s from './LoginPage.scss';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';

const title = 'Log In';

class LoginPage extends Component {

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

  signin = () => {
      UserActions.getUser(this.state);
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
          <Button label="Sign in" onSubmit={this.signin}/>
        </div>
      </div>
    );
  }

}

export default withStyles(LoginPage, s);
