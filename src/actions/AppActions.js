/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import alt from '../core/alt';
import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com';
class AppActions {
    constructor() {
        // put auto generate actions here
        this.generateActions(
            'getData'
        );
    }
}
export default (alt.createActions(AppActions));
