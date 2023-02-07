const {autoUpdater} = require("electron-updater");

// 檢查軟體更新
autoUpdater.on('checking-for-update', () => {
  console.log('[INFO] Checking for update...');
  mjolnir_splash.webContents.send('status', lang.express.SPLASH_CHECKING_UPDATES);
})

autoUpdater.on('update-available', (info) => {
  console.log('[INFO] Update available.');
  mjolnir_splash.webContents.send('status', lang.express.SPLASH_PREPARING_DOWNLOAD);
})

autoUpdater.on('update-not-available', (info) => {
  console.log('[INFO] No new version available.');
  mjolnir_splash.webContents.send('status', lang.express.SPLASH_STARTING);
  let starterTimer = setInterval(()=>{
    if(mainWindowReady && isTranslated){
      clearInterval(starterTimer);
      slashReadyToDestroyed = true;
      mjolnir_main.setOpacity(1);
      mjolnir_main.show();
      mjolnir_splash.close();

      if(readyToShowGA4Notify){
          authentication.showMessage(mjolnir_main,lang.express.GOOGLE_ANALYTICS,"info",lang.express.NOTIFY);
          login_session.launcher.googleAnalytics = true;
          savingSession();
      }
    }
  },500);
})

autoUpdater.on('error', (err) => {
  console.warn('[WARN] Error in auto-updater. ' + err);
  mjolnir_splash.webContents.send('status', lang.express.SPLASH_UPDATING_ERROR);
  closeApp();
})

autoUpdater.on('download-progress', (progressObj) => {
  var percent = progressObj.percent.toFixed(0);
  console.log('[INFO] Download progress:' + percent + '%');
  mjolnir_splash.webContents.send('status',lang.replacement(lang.express.SPLASH_DOWNLOADING, percent));
  mjolnir_splash.webContents.send('fromMain',percent);
})

autoUpdater.on('update-downloaded', (info) => {
  console.log('[INFO] Newer version has downloaded then it will install in 3 seconds.');
  mjolnir_splash.webContents.send('status', lang.express.SPLASH_RESTARTING);
});

// 更新檔下載完畢後 過 x 秒 關閉軟體更新後重啟軟體
autoUpdater.on('update-downloaded', (ev, info) => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 5 seconds.
  // You could call autoUpdater.quitAndInstall(); immediately
  if(process.platform == 'darwin'){
    authentication.showMessage(mjolnir_main,lang.express.UPDATE_MACOS,"warning",lang.express.NOTIFY);
    closeApp();
  }
  else{
    setTimeout(function() {
      closeApp();
      autoUpdater.quitAndInstall();  
    }, 3000);
  }
})