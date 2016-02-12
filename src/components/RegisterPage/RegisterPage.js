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

const title = 'New User Registration';

class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
              <TextInput hintText="Email"/>
              <TextInput hintText="Password"/>
              <TextInput hintText="Confirm Password"/>
              <Button label="Sign up" />
        </div>
      </div>
    );
  }

}

export default withStyles(RegisterPage, s);
