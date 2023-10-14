const {BrowserWindow} = require('electron')
const path = require('path')
const createWindow = ()=>{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        alwaysOnTop:true,
        webPreferences:{
            preload:path.resolve(__dirname,'preload.js')
        }
    })
    win.webContents.openDevTools()
    win.loadFile(path.resolve(__dirname,'index.html'))
    return win
}

module.exports = {
    createWindow
}