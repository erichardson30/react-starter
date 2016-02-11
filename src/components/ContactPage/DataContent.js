/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';

class DataContent extends Component {
    render() {
        return (
            <div>
                <span>Id: {this.props.data.id} </span>
                <span>Body : {this.props.data.body}</span>
            </div>
        )
    }
}

export default DataContent;
