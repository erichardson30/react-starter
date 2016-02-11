/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import http from 'http';

export default async (url) => new Promise((resolve, reject) =>
    http.get(url, res => resolve(res)).on('error', err => reject(err))
);
