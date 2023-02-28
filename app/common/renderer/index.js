const http = require('http');

let backend_url = `http://127.0.0.1:${expressport}`

const $ = {
    send_name: function(){
        http.get(`${backend_url}/summoner/name`, (res) => {
            let data = '';
            // 接收資料
            res.on('data', (chunk) => {
              data += chunk;
            });
            // 接收完成
            res.on('end', () => {
              console.log(data); // 路由回應的 HTML 資料
              main.webContents.send('frontend_data', { name: 'summoner_name', value: `${data}` });
            });
          }).on('error', (err) => {
            console.log('發生錯誤：', err.message);
            setTimeout(() => {
                console.warn(`[ERROR] 傳送至前端，重新嘗試提取名稱，再傳送至前端`)
                $.send_name();    
            }, 500);
          });        
    }
}

$.send_name();

main.webContents.send('frontend_data', { name: 'summoner_icon', value: `${backend_url}/summoner/icon` });
main.webContents.send('frontend_data', { name: 'summoner_bg', value: `${backend_url}/summoner/bg` });