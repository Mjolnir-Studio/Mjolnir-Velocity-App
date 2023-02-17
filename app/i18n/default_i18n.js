"use strict";
const {app} = require('electron');

const $ = {
    defaultlang: function(){
        return new Promise(async (resolve,reject)=>{
            DisplayLang = app.getLocale();
            console.log(`[SYSTEM - INFO] 使用者的Locale 是:${DisplayLang}`);
            await $.check();
            resolve(true);
        });
    },
    check: function(){
        return new Promise((resolve,reject)=>{
            console.log(`[I18n - INFO] 載入 "${i.getLocales()}" 與此區域的使用者相符的語言`);
            // console.log(`[INFO] Use default locale ${DisplayLang}`);
            if(DisplayLang == "zh-TW"){
                i.setLocale('tw');
            }else if(DisplayLang == "zh-CN"){
                i.setLocale('tw');
            }
            else{
                // console.warn(`[I18n - WARN] Not have this ${DisplayLang} language file use default lang... If you want change Display Language please wait software open complete. Go setting>Display Language> Change you prefer display language.`);
                i.setLocale('en');
            }
            console.log(`[I18n - INFO] 現在前端語言顯示檔案是: ${i.getLocale()}.json`);
            resolve(true);
        });
    }
}

module.exports = $;
