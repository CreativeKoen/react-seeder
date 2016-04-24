'use strict';

/**
 * @fileoverview Root configuration file of the Gulp build system. It loads child modules which
 * define specific Gulp tasks.
 *
 * Learn more at: http://gulpjs.com
 */

import './tools/config';
import './tools/webpack';
import './tools/server';
import './tools/build';
import './tools/testing';
//import 'tools/stylus';

// No business logic in this file.


/**
 * gulp serve
 * gulp test
 * gulp test:watch
 * gulp test:coverage
*/
