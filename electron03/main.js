const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const { createMenu } = require('./menu')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 300,
        alwaysOnTop: true,
        x: 1000,
        y: 300,
        webPreferences: {
          preload: path.resolve(__dirname, 'preload.js'),
        }
    })
    win.webContents.openDevTools()
    win.loadFile(path.resolve(__dirname, 'index.html'))
    createMenu(win)
}

app.whenReady().then(res=>{
  createWindow()

  app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
      }
  })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

ipcMain.on('changeTitle',(event,title)=>{
    console.log(title);
    BrowserWindow.fromWebContents(event.sender).setTitle(title)
    BrowserWindow.fromWebContents(event.sender).webContents.send('msg','🐮')
})
