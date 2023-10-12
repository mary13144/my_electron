const { BrowserWindow } = require("electron")
const path = require("path")
const createWindows = ()=>{
    const win = new BrowserWindow({
        width: 400,
        height: 300,
        x: 500,
        y: 400,
        webPreferences:{
            preload:path.resolve(__dirname,"preload.js")
        }
    })
    win.webContents.openDevTools()
    win.loadFile(path.resolve(__dirname,"index.html"))
}

module.exports = {
    createWindows
}