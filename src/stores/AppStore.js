/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import alt from '../core/alt';
import AppActions from '../actions/AppActions';

class AppStore {
    constructor() {
        this.bindActions(AppActions);
        this.loaded = false;
        this.data = [];
        this.error = null
    }

    onGetDataSuccess(data) {
        this.data = data;
        this.loaded = true;
    }
}

export default alt.createStore(AppStore, 'AppStore');
