const {app} = require('electron')
const {createWindow} = require('./window');
require('./menu');
require('./File')
app.whenReady().then(()=>{
    createWindow()
})