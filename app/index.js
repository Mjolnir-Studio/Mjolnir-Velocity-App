"use strict";
require('./global');
require('./common/logger');
const { app } = require('electron');
const i18n = require('./i18n/default_i18n');

log_dir = app.getPath('userData') + '\\logger';


console.log(`${commit}`);
console.log(`App Name: ${productName}`);
console.log(`App Version: ${app.getVersion()}`);
console.log(`${commit}`);

if(!app.isPackaged){
    require('electron-reload')(__dirname);
    console.warn("[DEBUG] Dev mode - Enable electron-reload");
    console.warn(`[DEBUG] Dev mode - log file local: ${log_dir}`);
}

app.whenReady().then(async () => {
    // 前置後/前作業
    const instanceLock = app.requestSingleInstanceLock();
    if(!app.isPackaged){
        app.setAppUserModelId('com.mjolnirstudio.velocitydebug');
    }else{
        app.setAppUserModelId('com.mjolnirstudio.velocity');
    }

    await permission.check();
    await i18n.defaultlang();
    // 開始執行視窗作業
    // 單一處理程序鎖定，有兩個以上的處理程序時，強制關閉最後開啟的那個
    if(!instanceLock){
        msgbox.closeApp();
    }else{
        app.on('second-instance', (event, commandLine, workingDirectory) => {
            // 如果啟動第二個處理程序，則將原先啟動的那個彈出來並聚焦
            // console.log(`[INFO] ${i.__('second instance')}`);
            msgbox.info(main, productName, "info", "Hmmm... Need any help?", `${i.__('second instance')}`, false);
            if (main) {
                if (main.isMinimized()) main.restore();
                main.focus();
            }
        });
    }
    require('./splash-window');
});