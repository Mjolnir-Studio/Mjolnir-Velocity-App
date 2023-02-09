"use strict";
const { app, dialog, shell } = require("electron");
// module

const $ = {
    closeApp: function(){
        if(pid){
            process.kill(pid);
            pid = 0;
        }
        app.quit(); //沒有真的退出
        process.exit();
    },
    error: function(window, title, type, message, detail,nolink){
        dialog.showMessageBox(window, {
            title: title,
            type: type,
            message: message,
            detail: detail,
            noLink: nolink,
            buttons: [`${i.__('Go Discord to Report this issue')}`,`${i.__('Exit App')}`, "OK"],
            cancelId:1
        }).then((index) => {
            if(index.response === 0){
                shell.openExternal(`${discord_url}`);
            }else if(index.response === 1){
                $.closeApp();
            }
        });
    },
    info: function(window, title, type, message, detail,nolink){
        dialog.showMessageBox(window, {
            title: title,
            type: type,
            message: message,
            detail: detail,
            noLink: nolink,
            buttons: [`${i.__('Go Discord to Report this issue')}`, "OK"],
            cancelId:1
        }).then((index) => {
            if(index.response === 0){
                shell.openExternal(`${discord_url}`);
            }
        });
    },
}
module.exports = $;