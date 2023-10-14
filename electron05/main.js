const { createWindow } = require('./window')
const { app, BrowserWindow } = require('electron')
const { createMenu } = require('./menu')
require('./contextMenu')
app.whenReady().then(() => {
    const win = createWindow()
    createMenu(win)
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows.length === 0 && process.platform === 'darwin') {
        createWindow()
    }
})