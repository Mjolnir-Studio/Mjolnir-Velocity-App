"use strict";
// Product Name
global.nodepackage = require('../package.json');
global.productName = nodepackage.productName;

// Core
global.pid = 0, // process pid
global.updater = null;
global.permission = null;
global.splash = null;
global.main = null;
global.permission = require('./common/permission');
global.discord_url = "http://mjolnirdc.yomisana.xyz/";

// module
global.path = require("path");
// logger
global.electronLogger = require('electron-log');
global.log_dir = null;

// MessageBox
global.msgbox = require('./common/messagebox.js'); 

// i18n
global.i = require('./i18n/i18n.config.js');
global.DisplayLang = null;