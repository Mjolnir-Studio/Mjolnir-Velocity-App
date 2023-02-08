const {autoUpdater} = require("electron-updater");
const electronLogger = require('electron-log');

autoUpdater.checkForUpdatesAndNotify();
// autoUpdater
autoUpdater.logger = electronLogger;
autoUpdater.logger.transports.file.level = 'info';

autoUpdater.on('checking-for-update', () => {
    console.log(`[INFO] ${i.__('Checking for update...')}`);
    splash.webContents.send('update_status', `${i.__('Checking for update... webContents')}`);
});

autoUpdater.on('update-available', (info) => {
    console.log(`[INFO] ${i.__('Update available.')}`);
    splash.webContents.send('update_status',`${i.__('Update available webContents')}`);
});

autoUpdater.on('update-not-available', (info) => {
    console.log('[INFO] No new version available.');
    splash.webContents.send('update_status', lang.express.SPLASH_STARTING);
    let AppReadyTimer = setInterval(()=>{
        if(mainWindowReady && isTranslated){
          clearInterval(AppReadyTimer);
          slashReadyToDestroyed = true;
        //   splash.close();
        //   main.setOpacity(1);
        //   main.show();
    
        //   if(readyToShowGA4Notify){
        //       authentication.showMessage(mjolnir_main,lang.express.GOOGLE_ANALYTICS,"info",lang.express.NOTIFY);
        //       login_session.launcher.googleAnalytics = true;
        //       savingSession();
        //   }
        }
    },500);
});

autoUpdater.on('error', (err) => {
    console.warn(`[WARN] Updater Error: Reason ${err}`);
    splash.webContents.send('update_status', lang.express.SPLASH_UPDATING_ERROR);
    msgbox.error(splash, productName + " - Updater error", "error", "X _ X", "Skip this time Updater.\nUpdater guess Github may some issue", false);
});

autoUpdater.on('download-progress', (progressObj) => {
    let percent = progressObj.percent.toFixed(0);
    console.log(`[INFO] ${i.__('Download progress: %s %',percent)}`);
    splash.webContents.send('update_status',`${i.__('Downloading... %s %',percent)}`);
    splash.webContents.send('update_percent',percent);
});

autoUpdater.on('update-downloaded', (info) => {
    console.log(`[INFO] ${i.__('Update downloaded')}`);
    splash.webContents.send('update_status',`${i.__('Update downloaded webContents')}`);
    autoUpdater.quitAndInstall(false, true); // isSilent: false, isForceRunAfter: true
});