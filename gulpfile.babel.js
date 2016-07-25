'use strict';

/**
 * @fileoverview Root configuration file of the Gulp build system. It loads child modules which
 * define specific Gulp tasks.
 *
 * Learn more at: http://gulpjs.com
 */

import './gulp/config';
import './gulp/server';
import './gulp/webpack';
import './gulp/styles';
import './gulp/views';
import './gulp/build';
import './gulp/testing';
import './gulp/commen';

// No business logic in this file.


/**
 * gulp serve
 * gulp test
 * gulp test:watch
 * gulp test:coverage
*/
