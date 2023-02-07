const {autoUpdater} = require("electron-updater");

autoUpdater.on('checking-for-update', () => {
  console.log(`[INFO] Checking for update...`);
  splash.webContents.send('update_status',`Checking for update...`);
});

autoUpdater.on('update-available', (info) => {
  console.log(`[INFO] Update available.`);
  splash.webContents.send('update_status',`Update available.`);
});

autoUpdater.on('update-not-available', (info) => {
  console.log(`[INFO] Update is latest.`);
  splash.webContents.send('update_status',`Update is latest.`);
  splash.webContents.send('update_status',`Update is latest. webContents`);
  $.run();
});

autoUpdater.on('error', (err) => {
  console.warn(`[WARN] Update Error ${err}`);
  splash.webContents.send('update_status',`Update Error webContents`);
  //Error in auto-updater. HttpError: 500 When repo server error.
//   let reg = RegExp(/HttpError: 500/);
//   if(reg.exec(err)){
//     unit.showMessage(splash, appname + " - Updater error", "error", "X _ X", "Updater Error 500 - Github have some issue\n Tips: This time Update is skip.", false);
//   }
  unit.showMessage(splash, appname + " - Updater error", "error", "X _ X", "Github may have some issue\n - This time Update is skip.", false);
});

autoUpdater.on('download-progress', (progressObj) => {
  let percent = progressObj.percent.toFixed(0);
  console.log(`[INFO] Download progress: %s %',percent)}`);
  splash.webContents.send('update_status',`${i.__('Downloading... %s %',percent)}`);
  splash.webContents.send('update_percent',percent);
});

autoUpdater.on('update-downloaded', (info) => {
  console.log(`[INFO] ${i.__('Update downloaded')}`);
  splash.webContents.send('update_status',`${i.__('Update downloaded webContents')}`);
  autoUpdater.quitAndInstall(false, true); // isSilent: false, isForceRunAfter: true
});