"use strict";
require('./global');

const { app } = require('electron');

if(!app.isPackaged)
    require('electron-reload')(__dirname);

app.whenReady().then(async () => {
    app.setAppUserModelId('com.mjolnirstudio.velocity');
    require('./splash-window');

    splash.once('ready-to-show', async () => {
        splash.show();
        if(app.isPackaged){
            console.log("[INFO] 開始檢查是否有可用更新");
        }else{
            console.warn("[INFO] Debug模式下...略過檢查更新");
            console.warn("[INFO] Debug模式下...");
        }
    });
});