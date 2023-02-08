"use strict";
const { app } = require('electron');
const { BrowserWindow } = require("electron");
const nodepackage = require('../package.json');
const productName = nodepackage.productName;
const path = require("path");

// Create some window settings
splash = new BrowserWindow
({
    // 窗口標題
    // 如果HTML標籤 <title> 在由...加載的HTML文件中定義 loadURL(), 此屬性將被忽略。
    title: productName,
    icon: './app/splash/favicon.ico',
    // darkTheme : true,
    // 透明人間 0.0(完全透明) ~ 1.0 (完全不透明)
    // opacity: 1.0,
    show: true,
        // if show false, paintWhenInitiallyHidden need false too
        // paintWhenInitiallyHidden: true,
    // 指定父窗口
    // parent: null,
    width: 300, height: 400,
    minWidth: 300, minHeigh: 300,
    maxWidth: 400, maxHeight: 400,
    // width 和 height 將用作網絡 頁面的大小,這意味著實際窗口
    useContentSize: true,
    // Set Background Color
    // backgroundColor: '#000000',
    // 視窗是否有陰影
    // hasShadow: true,
    // 在Screen中央顯示
    center: true,
    // 窗口是否不想要成為無邊框視窗?
    frame: false,
        // if frame false, 在Windows上,除非窗口無框,否則無法工作。
        // transparent: true,
    // 窗口是否可調整
    resizable: false,
    // 窗口是否可移動 (MacOS Windows)
    // movable: true,
    // 是否可以聚焦窗口與窗口是否可移動相同
    // focusable: true,
    // if focusable is false, skipTaskbar will false too    
    // skipTaskbar: false, // MacOS Windows
    // 窗口是否在最上層
    alwaysOnTop: false,
    // 窗口是否可關閉-標題列的 (MacOS Windows)
    // closable: true,
    // 窗口是否可最小化-標題列的 (MacOS Windows)
    // minimizable: true,
        // 窗口是否可最大化-標題列的 (MacOS Windows)
        // minimizable 先 false maximizable 也會是 false
        // maximizable: false,
    // 資訊站模式-建議用在Windows上
    // kiosk: false,
    // 自動隱藏菜單欄,除非 Alt 按下鍵。默認值為 false。
    autoHideMenuBar: true,
    webPreferences: {
        devTools: !app.isPackaged,
        // preload: "./splash-preload.js",
        preload: path.join(__dirname, 'splash-preload.js'),
            // Node 關閉不安全的 API
            nodeIntegration: false,
                // 通常　nodeIntegration 值是多少 nodeIntegrationInSubFrames 值就是多少
                nodeIntegrationInSubFrames: false,
            nodeIntegrationInWorker: false,
        // Disallow http content(cdn...etc)
        allowRunningInsecureContent: false,
        // 預防 前端 js 可以訪問後端的資料
        contextIsolation: true,
    }
});

splash.loadFile('./app/splash/index.html');
splash.setMenu(null);
splash.center();
if(!app.isPackaged)
    splash.webContents.openDevTools();