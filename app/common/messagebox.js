"use strict";
const { dialog, shell } = require("electron");
// module

const $ = {
    error: function(window, title, type, message, detail,nolink){
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
                shell.openExternal("http://mjolnirdc.yomisana.xyz/");
            }
        });
    }
}
module.exports = $;