//  cordova-plugin-fullscreen
//  Copyright © 2016 filfat Studios AB
//  Repo: https://github.com/filfat-Studios-AB/cordova-plugin-fullscreen
var exec = require('cordova/exec');

module.exports = {
    /* Open */
    open: function(para, successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'ContextMenu', 'open', para);
    }
};
