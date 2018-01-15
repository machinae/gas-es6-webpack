/**
 * This module is the entry point for your GAS code. You can create additional
 * modules and import them here as necessary.
 *
 * Functions exported from this module will appear in the GAS editor's "Run"
 * and "Select function" menus. GAS will also pick up any trigger functions
 * exported from this module. For more details, see
 * https://developers.google.com/apps-script/guides/triggers/
 */

// NOTE: imports must be as below. default exports and wildcard exports are NOT
// supported

import {helloWorld} from 'hello'
import {config} from 'config'

global.sayHello = function () {
  helloWorld(config.name)
}

global.sayBye = function () {
  helloWorld('joe')
}
