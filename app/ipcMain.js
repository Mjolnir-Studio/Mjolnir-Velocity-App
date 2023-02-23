const { ipcMain } = require('electron');


ipcMain.on("toMain", async (event, args) => {
  console.log('[ipcMain - DEBUG] ' + args + ' 事件已觸發');
  if(args == "closeapp"){
    msgbox.closeApp();
  }else if (args == "frontend_load"){
    // mjolnir velocity app backend
    // require('./backend/index');
    // main.webContents.send('frontend_data', { name: 'client_status', status:true, value: `${i.__('client_status.connect')}`});
  }
});