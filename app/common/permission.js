'use strict';
const exec = require('child_process').exec;

const $ = {
    check: function(){
        return new Promise((resolve,reject)=>{
            console.warn(`[SYSTEM] ${i.__('check permission')}`);
            exec('NET SESSION', function(err,so,se) {
                if(se.length === 0){
                    console.warn(`[INFO] ${i.__('Run as admin')}`);
                    // main.webContents.send("admin_permission", "管理員權限");
                }else{
                    console.warn(`[WARN] ${i.__('Not run as admin')}`);
                    console.warn(`[ERROR] ${i.__('check permission_error')}`);
                    msgbox.error(main, `${productName} - Error`, "error", "Why did it happen... This can't happen!", `${i.__('Not run as admin')}`, false);
                    // core.closeApp();
                }
            });
            resolve(true);
        });
    }
}
module.exports = $;