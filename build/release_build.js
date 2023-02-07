const { exec } = require('child_process');
const path = require('path');

const clear_bin_dist = path.join(__dirname, "script", "clear_compiler_dist.bat");
// const create_compiler = path.join(__dirname, "script", "compiler.bat");
const build_bash = path.join(__dirname, "script", "release_build.bat");

main();
async function main(){
    let getos_commit = "****************************************************************";
    console.log(`[INFO] 打包軟體中...`);
    console.log(`${getos_commit}`);

    console.log(`[INFO] 執行 npm install ...`);
    await npminstall();
    console.log(`${getos_commit}`);
    // setTimeout(() => {}, 5000);
    await sleep(5000);

    console.log(`[INFO] 清理舊編譯與打包檔案批次檔: ${clear_bin_dist}`);
    await clear_dist();
    console.log(`${getos_commit}`);
    await sleep(5000);

    // console.log(`[INFO] 製作新的編譯檔案批次檔: ${create_compiler}`);
    // await compiler();
    // console.log(`${getos_commit}`);
    // await sleep(5000);

    console.log(`[INFO] 製作release build批次檔: ${build_bash}`);
    await runbuild();
    console.log(`${getos_commit}`);
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 製作新 compiler 檔案的
function runbuild() {
    return new Promise((resolve, reject) => {
        exec(`${build_bash}`, {encoding: 'gbk'}, (err, stdout, stderr) => {
            if (err) {
                console.error(`[ERROR] runbuild 子進程錯誤 ${err}`);
                reject(-1);
                return;
            }
            // console.log(`${stdout}`);
            console.log(`Bash-INFO: ${stdout}`);
            console.log(`Bash-WARN: ${stderr}`);
            console.log(`[INFO] 執行 runbuild 完成!`);
            resolve(true);
        });
    });
};

// 製作新 compiler 檔案的
function compiler() {
    return new Promise((resolve, reject) => {
        exec(`${create_compiler}`, {encoding: 'gbk'}, (err, stdout, stderr) => {
            if (err) {
                console.error(`[ERROR] compiler 子進程錯誤 ${err}`);
                reject(-1);
                return;
            }
            // console.log(`${stdout}`);
            console.log(`Bash-INFO: ${stdout}`);
            console.log(`Bash-WARN: ${stderr}`);
            console.log(`[INFO] 執行 製作新的編譯檔案 完成!`);
            resolve(true);
        });
    });
};

// 清除舊檔案的 compiler 所產生的資料夾 與 打包產生的dist資料夾
function clear_dist() {
    return new Promise((resolve, reject) => {
        exec(`${clear_bin_dist}`, {encoding: 'gbk'}, (err, stdout, stderr) => {
            if (err) {
                console.error(`[ERROR] clear_dist 子進程錯誤 ${err}`);
                reject(-1);
                return;
            }
            // console.log(`${stdout}`);
            console.log(`Bash-INFO: ${stdout}`);
            console.log(`Bash-WARN: ${stderr}`);
            console.log(`[INFO] 執行 清理 dist 資料夾 完成!`);
            resolve(true);
        });
    });
};

// npm install
function npminstall() {
    return new Promise((resolve, reject) => {
        exec('npm install', (err, stdout, stderr) => {
            if (err) {
                console.error(`[ERROR] npminstall 子進程錯誤 ${err}`);
                reject(-1);
                return;
            }
            console.log(`NPM-INFO: ${stdout}`);
            console.log(`NPM-WARN: ${stderr}`);
            console.log(`[INFO] 執行 npm install 完成!`);
            resolve(true);
        });
    });
};
// 標準動作
// console.log(`[INFO] 開始準備打包檔案...`);
// console.log(`[INFO] 正在加密檔案...`);
// await encrypt();
// console.log(`[INFO] 完成加密檔案!`);


// try {
//   const asarPath = join(packager.getResourcesDir(appOutDir), 'app.asar');
//   console.log(`[INFO] 正在加固 asar 檔案! 位置: ${asarPath}`);
//   const archive = await asarmor.open(asarPath);
//   archive.patch(); // apply default patches
//   await archive.write(asarPath);
//   console.log(`[INFO] 完成加固 asar 檔案!`);
// } catch (err) {
//   console.error(`[ERROR] 加固 asar 檔案 發生錯誤!`);
//   console.error(err);
// }


// // 刪除舊編譯資料夾與檔案 以及 舊的打包檔案
// function clear_bin_dist() {
//     return new Promise((resolve, reject) => {
//         exec("./script/clear_build.bat", (err, stdout, stderr) => {
//             if(err){
//                 console.error(`[ERROR] 子進程錯誤 ${err}`);
//                 reject(-1);
//                 return;
//             }
//           console.log("[INFO]",stdout);
//         });
//     });
// };
