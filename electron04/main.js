const {app,ipcMain,BrowserWindow} = require('electron')
const {createWindows} = require("./windows");

app.whenReady().then(()=>{
    createWindows()
})

ipcMain.on('toMain',(event,widthValue,heightValue)=>{
    //获取当前调用api的窗口
    const win = BrowserWindow.fromWebContents(event.sender)
    win.setSize(widthValue,heightValue,true)
})