'use strict';
const exec = require('child_process').exec;
const { app } = require("electron");

const $ = {
    check: function(){
        return new Promise((resolve,reject)=>{
            console.warn(`[SYSTEM] ${i.__('check permission')}`);
            exec('NET SESSION', function(err,so,se) {
                if(se.length === 0){
                    console.warn(`[INFO] ${i.__('Run as admin')}`);
                    permission = true;
                    // main.webContents.send("admin_permission", "管理員權限");
                }else{
                    if(app.isPackaged){
                        console.warn(`[WARN] ${i.__('Not run as admin')}`);
                        console.warn(`[ERROR] ${i.__('check permission_error')}`);
                        msgbox.error(main, `${productName} - Error`, "error", "Why did it happen... This can't happen!", `${i.__('Not run as admin')}`, false);
                        // core.closeApp();
                    }else{
                        console.warn(`[DEBUG] Dev mode - Skip permission check`);
                        permission = true;
                    }
                }
                resolve(true);
            });
        });
    }
}
module.exports = $;