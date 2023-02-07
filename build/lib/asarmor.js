const asarmor = require('asarmor');
const { join } = require("path");

exports.default = async ({ appOutDir, packager }) => {
  try {
    const asarPath = join(packager.getResourcesDir(appOutDir), 'app.asar');
    console.log(`[INFO] 正在加固 asar 檔案! 位置: ${asarPath}`);
    const archive = await asarmor.open(asarPath);
    archive.patch(); // apply default patches
    await archive.write(asarPath);
    console.log(`[INFO] 完成加固 asar 檔案!`);
  } catch (err) {
    console.error(`[ERROR] 加固 asar 檔案 發生錯誤!`);
    console.error(err);
  }
};