// splash.webContents.send('frontend_data', `${i.__('Checking for update... webContents')}`);
let backend_url = `http://127.0.0.1:${expressport}`
main.webContents.send('frontend_data', { name: 'summoner_name', value: `${backend_url}/summoner/name` });
main.webContents.send('frontend_data', { name: 'summoner_icon', value: `${backend_url}/summoner/icon` });
main.webContents.send('frontend_data', { name: 'summoner_bg', value: `${backend_url}/summoner/bg` });