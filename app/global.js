"use strict";
// Product Name
global.nodepackage = require('../package.json');
global.productName = nodepackage.productName;

// Core
global.splash = null;
global.main = null;

// module
global.path = require("path");

// logger
global.electronLogger = require('electron-log');
global.log_dir = null;

// MessageBox
global.msgbox = require('./common/messagebox.js'); 

// i18n
global.i = require('./i18n/i18n.config.js');