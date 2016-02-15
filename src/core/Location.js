/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import { browserHistory, createMemoryHistory } from 'react-router';

const location = canUseDOM ? browserHistory : createMemoryHistory();

export default location;
