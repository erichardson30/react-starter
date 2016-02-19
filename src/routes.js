/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';
import fetch from './core/fetch';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import AppStore from './stores/AppStore';

async function getContextComponent(location, callback) {
  const response = await fetch(`/api/content?path=${location.pathname}`);
  const content = await response.json();
  // using an arrow to pass page instance instead of page class; cb accepts class by default
  callback(null, () => <ContentPage {...content} />);
}

const getData = async (location, callback) => {
    await AppStore.fetchData();
    callback(null, () => <ContactPage />)
}
export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute getComponent={getContextComponent} />
      <Route path="contact" getComponent={getData} />
      <Route path="login" component={LoginPage} />
      <Route path="register" component={RegisterPage} />
      <Route path="about" getComponent={getContextComponent} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
