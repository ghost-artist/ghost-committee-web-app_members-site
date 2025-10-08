/**
 * This module is used to control the logging of different parts of the application.
 * 
 * Because the application is a full-stack application, it can be difficult to debug the application
 * because the logs from the server and the client are mixed together.
 * 
 * Backend JS and Client js use different import styles, so we need to use a special export style to make this module work in both environments.
 * 
 * in files you'll see code like this:
 * const logIf = require('../../../utils/logIf.js'); <--- this is a node.js import
 * import '../../../utils/logIf.js'; <--- this is a client import and binds logIf to the window object
 * 
 */


const logIf = {
    server: false,
    client: false,
    archive: false,
    paypal: false,
    auth: false,
    component: false,
    crud: false,
    memberSidePanel: false
};


/**
 * This is a special way to export the module, it will work in both Node.js and the browser.
 */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = logIf;
  } else {
    // ES6 export
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return logIf;
      });
    } else {
      window.logIf = logIf;
    }
  }