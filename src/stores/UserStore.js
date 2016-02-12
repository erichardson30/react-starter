/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import alt from '../core/alt';
import UserActions from '../actions/UserActions';

class UserStore {
    constructor() {
        this.bindActions(UserActions);
        this.email = null;
        this.password = null;
        this.passwordsMatch = false;
        this.signedIn = false;
    }

    onGetUser(data) {
        this.signedIn = true;
        return true;
    }

    onCreateUser(data) {
        this.signedIn = true;
        return true;
    }
}

export default alt.createStore(UserStore, 'UserStore');
