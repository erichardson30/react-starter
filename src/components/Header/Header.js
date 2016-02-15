/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import { IndexLink } from 'react-router';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <IndexLink className={s.brand} to="/">
            <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>Your Company</span>
          </IndexLink>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>React Starter</h1>
            <p className={s.bannerDesc}>A great starting point for React / Flux apps</p>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
