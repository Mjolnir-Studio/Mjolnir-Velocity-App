"use strict";
// Core
global.splash = null;

// logger
global.log_dir = null;

// MessageBox
global.msgbox = require('./common/messagebox.js'); 

// i18n
global.i = require('./i18n/i18n.config.js');

// Product Name
global.nodepackage = require('../package.json');
global.productName = nodepackage.productName;