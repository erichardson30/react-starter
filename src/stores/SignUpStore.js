/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import alt from '../core/alt';
import SignUpActions from '../actions/SignUpActions';

class SignUpStore {
    constructor() {
        this.bindActions(SignUpActions);
        this.email = null;
        this.password = null;
        this.passwordsNotMatch = true;
        this.signedIn = false;
    }

    onCreateUser(data) {
        this.signedIn = true;
    }
}

export default alt.createStore(SignUpStore, 'SignUpStore');
