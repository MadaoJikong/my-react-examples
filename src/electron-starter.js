// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url');
const config = require('./electron/config/config.js');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // and load the index.html of the app.
    var startUrl = "";
    if (config.env === "dev") {
        startUrl = config.baseUrl;
    }
    else {
        startUrl = url.format({
            pathname: path.join(__dirname, '/../build/index.html'),
            protocol: 'file:',
            slashes: true
        })
    }
    //mainWindow.loadURL(startUrl);
    mainWindow.loadURL(startUrl);
    mainWindow.webContents.openDevTools()
}
app.allowRendererProcessReuse = true;
app.on('ready', createWindow)

app.on('window-all-closed', function () {
    //cmd+q 退出 不会触发这个事件
    // if (process.platform !== 'darwin') {
    //     app.quit();
    // }
    app.exit(0);
})

app.on('activate', function () {
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})