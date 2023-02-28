const http = require('http');

let backend_url = `http://127.0.0.1:${expressport}`

const $ = {
    get_module: function(url, ipc, name){
      http.get(url, (res) => {
        let data = '';
        // 接收資料
        res.on('data', (chunk) => {
          data += chunk;
        });
        // 接收完成
        res.on('end', () => {
          console.log(data); // 路由回應的 HTML 資料
          main.webContents.send(`${ipc}`, { name: `${name}`, value: `${data}` });
        });
      }).on('error', (err) => {
        console.log('發生錯誤：', err.message);
      }); 
    }
}

console.log(`[INFO] APP - 開始取得資料`);
$.get_module(`${backend_url}/summoner/name`,"frontend_data","summoner_name");
$.get_module(`${backend_url}/summoner/level/current`,"frontend_data","summoner_level");
$.get_module(`${backend_url}/summoner/level/needed`,"frontend_data","summoner_level_needed");
main.webContents.send('frontend_data', { name: 'summoner_icon', value: `${backend_url}/summoner/icon` });
main.webContents.send('frontend_data', { name: 'summoner_bg', value: `${backend_url}/summoner/bg` });
main.webContents.send('frontend_data', { name: 'profile_done', value: true });
setInterval(() => {
  if(!lol.init)
    main.webContents.send('frontend_data', { name: 'profile_done', value: false });
}, 1000);