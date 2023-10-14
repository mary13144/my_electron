const {ipcMain, Menu} = require('electron')


const contextMenu = [
    {
        label:"测试",
        click:()=>{
            console.log("123")
        }
    },
    {
        type:"separator"
    },
    {
        label:"测试2",
        role:'quit'
    }
]

ipcMain.on("context-menu",()=>{
    const menu = Menu.buildFromTemplate(contextMenu)
    menu.popup()
})