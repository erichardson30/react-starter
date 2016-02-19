/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

import { match, RouterContext } from 'react-router';
import routes from './routes';
import ContextHolder from './core/ContextHolder';

import Html from './components/Html';
import assets from './assets';
import { port } from './config';

import alt from './core/alt';
import Iso from 'iso';


const server = global.server = express();

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content').default);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        throw error;
      }
      if (redirectLocation) {
        const redirectPath = `${ redirectLocation.pathname }${ redirectLocation.search }`;
        res.redirect(302, redirectPath);
        return;
      }
      let statusCode = 200;
      const data = { title: '', description: '', css: '', body: '', entry: assets.main.js };
      const css = [];
      const context = {
        insertCss: styles => css.push(styles._getCss()),
        onSetTitle: value => data.title = value,
        onSetMeta: (key, value) => data[key] = value,
        onPageNotFound: () => statusCode = 404,
      };

      const iso = new Iso();

      iso.add(
          ReactDOM.renderToString(
              <ContextHolder context={context}>
                  <RouterContext {...renderProps}/>
              </ContextHolder>
          ),
          alt.flush()
      );
      data.body = iso.render();
      data.css = css.join('');

      const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
      res.status(statusCode).send(`<!doctype html>\n${html}`);
    });
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`The server is running at http://localhost:${port}/`);
});
