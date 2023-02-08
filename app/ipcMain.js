const { ipcMain } = require('electron');


ipcMain.on("toMain", async (event, args) => {
  console.log('[ipcMain - DEBUG] ' + args + ' 事件已觸發');
});