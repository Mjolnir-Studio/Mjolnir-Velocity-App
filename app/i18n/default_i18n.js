"use strict";
const {app} = require('electron');

const $ = {
    defaultlang: function(){
        return new Promise(async (resolve,reject)=>{
            DisplayLang = app.getLocale();
            console.log(`[SYSTEM - INFO] Get User Locale is:${DisplayLang}`);
            await $.check();
            resolve(true);
        });
    },
    check: function(){
        return new Promise((resolve,reject)=>{
            console.log(`[I18n - INFO] Load "${i.getLocales()}" language for display language`);
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
            console.log(`[I18n - INFO] Now i18n Display Language file is:${i.getLocale()}.json`);
            resolve(true);
        });
    }
}

module.exports = $;