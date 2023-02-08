"use strict";
require('./global');
require('./common/logger');
const { app } = require('electron');

log_dir = app.getPath('userData') + '\\logger';

if(!app.isPackaged){
    require('electron-reload')(__dirname);
    console.debug("[DEBUG] Dev mode - Enable electron-reload");
    console.debug(`[DEBUG] Dev mode - log file local: ${log_dir}`);
}

app.whenReady().then(async () => {
    app.setAppUserModelId('com.mjolnirstudio.velocity');
    require('./splash-window');

    splash.once('ready-to-show', async () => {
        splash.show();
        if(app.isPackaged){
            console.log("[INFO] 開始檢查是否有可用更新");
            require('./common/updater.js');
            
        }else{
            console.warn("[INFO] Dev mode - Skip Check updater");
            // splash.webContents.send('update_status',`123`);
            // require('./common/updater.js');
            // msgbox.error(splash, productName + " - Updater error", "error", "X _ X", "Skip this time Updater.\nUpdater guess Github may some issue", false);
            // splash.webContents.send('update_status', `${i.__('Update Error webContents')}`);
        }
    });
});